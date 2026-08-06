// watch-guide · 纯逻辑选表引擎（无 DOM 依赖，可被 Node 测试）
(function (root) {
  "use strict";
  const DATA = (typeof require !== "undefined") ? require("./watch-data.js")
    : (root.WATCH_BRANDS ? { WATCH_BRANDS: root.WATCH_BRANDS, WATCH_MOVEMENTS: root.WATCH_MOVEMENTS, WATCH_STYLES: root.WATCH_STYLES, WATCH_AESTHETIC: root.WATCH_AESTHETIC, WATCH_BUDGET: root.WATCH_BUDGET } : {});

  // 预算档位 → 可接受的 price 标签集合
  const BUDGET_TIER = {
    "入门机械": ["亲民"],
    "中端": ["亲民", "中端"],
    "高端": ["亲民", "中端", "高端"],
    "收藏级": ["亲民", "中端", "高端", "顶级"]
  };
  // price 标签 → 数值，用于排序
  const PRICE_RANK = { "亲民": 1, "中端": 2, "中高端": 2, "高端": 3, "顶级": 4 };

  // prefs: { budget:str, style:str|"不限", scene:str|"不限" }
  function recommend(prefs) {
    prefs = prefs || {};
    const budget = prefs.budget || "中端";
    const style = prefs.style || "不限";
    const scene = prefs.scene || "不限";
    const allow = BUDGET_TIER[budget] || ["亲民", "中端"];
    let list = DATA.WATCH_BRANDS.filter(b => allow.indexOf(b.price) >= 0);
    if (style && style !== "不限") list = list.filter(b => b.style.indexOf(style) >= 0);
    if (scene && scene !== "不限") list = list.filter(b => b.scene.indexOf(scene) >= 0);
    list.sort((a, b) => (PRICE_RANK[a.price] || 0) - (PRICE_RANK[b.price] || 0));
    return list;
  }

  function movements() { return DATA.WATCH_MOVEMENTS; }
  function styles() { return DATA.WATCH_STYLES; }

  function makeWishlist(store) {
    store = store || (typeof localStorage !== "undefined" ? localStorage : null);
    const KEY = "watch_wish_v1";
    return {
      all() { try { return JSON.parse(store.getItem(KEY) || "[]"); } catch (e) { return []; } },
      add(e) { const l = this.all(); l.unshift(Object.assign({ ts: Date.now() }, e)); store.setItem(KEY, JSON.stringify(l.slice(0, 100))); return l.length; },
      remove(i) { const l = this.all(); l.splice(i, 1); store.setItem(KEY, JSON.stringify(l)); },
      stats() { const l = this.all(); const by = {}; l.forEach(e => { by[e.status || "想了解"] = (by[e.status || "想了解"] || 0) + 1; }); return { total: l.length, by: by }; }
    };
  }

  const Engine = { recommend, movements, styles, makeWishlist, data: DATA };
  if (typeof module !== "undefined" && module.exports) module.exports = Engine;
  if (root) root.WatchEngine = Engine;
})(typeof window !== "undefined" ? window : this);
