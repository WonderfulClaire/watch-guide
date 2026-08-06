// watch-guide · 名表研究浏览器数据层
// 来源：个人 vault《09-Hobbies/06-审美研究·表：名表研究》
const WATCH_BRANDS = [
  { name: "百达翡丽 Patek Philippe", tier: "顶级制表", style: ["正装", "复杂功能"], price: "顶级", icon: "永不停产的收藏级，Nautilus 运动壳也一表难求", scene: ["收藏", "正式"] },
  { name: "江诗丹顿 Vacheron", tier: "顶级制表", style: ["正装", "复杂功能"], price: "顶级", icon: "历史最悠久之一，Overseas 运动线", scene: ["收藏", "正式"] },
  { name: "爱彼 Audemars Piguet", tier: "顶级制表", style: ["运动", "复杂功能"], price: "顶级", icon: "Royal Oak 八角形表圈标志性运动表", scene: ["休闲", "社交"] },
  { name: "劳力士 Rolex", tier: "传统名表", style: ["运动", "潜水", "正装"], price: "高端", icon: "Submariner/Datejust/Daytona 认知度极高", scene: ["日常", "旅行", "正式"] },
  { name: "欧米茄 Omega", tier: "传统名表", style: ["潜水", "正装"], price: "中高端", icon: "Speedmaster 登月表、Seamaster 潜水", scene: ["日常", "运动"] },
  { name: "卡地亚 Cartier", tier: "传统名表", style: ["正装", "珠宝"], price: "高端", icon: "Tank / Ballon 蓝气球，珠宝表气质", scene: ["正式", "约会"] },
  { name: "积家 Jaeger-LeCoultre", tier: "传统名表", style: ["正装", "复杂功能"], price: "高端", icon: "Reverso 翻转表，机芯研发强", scene: ["正式", "收藏"] },
  { name: "浪琴 Longines", tier: "传统名表", style: ["正装"], price: "中端", icon: "优雅入门机械，性价比高", scene: ["通勤", "正式"] },
  { name: "沛纳海 Panerai", tier: "传统名表", style: ["运动", "潜水"], price: "高端", icon: "大表径护桥，硬朗军事风", scene: ["休闲", "运动感"] },
  { name: "精工 Seiko", tier: "亲民机械", style: ["潜水", "正装"], price: "亲民", icon: "Presage 机械入门、Marine 潜水性价比", scene: ["日常", "入门"] },
  { name: "卡西欧 Casio", tier: "实用/智能", style: ["运动"], price: "亲民", icon: "G-Shock 耐操、Edifice 机械感", scene: ["运动", "日常"] },
  { name: "苹果 Apple Watch", tier: "智能表", style: ["运动", "智能"], price: "亲民", icon: "健康运动生态，非机械但实用", scene: ["运动", "日常"] },
  { name: "理查德米尔 RM", tier: "独立制表", style: ["运动", "复杂功能"], price: "顶级", icon: "酒桶壳轻量高科技，辨识度极高", scene: ["社交", "收藏"] }
];

const WATCH_MOVEMENTS = [
  { name: "自动机械", note: "日常佩戴自动上链，最经典，有灵魂" },
  { name: "手动机械", note: "需定期上链，薄、正装表常用" },
  { name: "石英", note: "电池精准免维护，卡西欧/部分时装表" },
  { name: "Spring Drive", note: "精工独家，机械+电子平滑秒针" },
  { name: "陀飞轮", note: "复杂功能，观赏与收藏价值高" }
];

const WATCH_STYLES = [
  { name: "正装表", keys: ["薄", "简洁", "皮带", "优雅"], scene: ["正式", "通勤", "面试"] },
  { name: "运动表", keys: ["耐用", "金属链", "辨识度"], scene: ["日常", "旅行", "休闲"] },
  { name: "潜水表", keys: ["防水", "旋转表圈", "厚实"], scene: ["休闲", "运动感"] },
  { name: "珠宝表", keys: ["精致", "装饰", "女性化"], scene: ["晚宴", "约会", "重要场合"] },
  { name: "复杂功能", keys: ["月相", "计时", "万年历"], scene: ["收藏", "知识研究"] }
];

const WATCH_AESTHETIC = [
  ["表径", "手腕细选 36-38mm，粗犷选 40-44mm"],
  ["厚度", "正装要薄（<10mm），运动可厚"],
  ["表盘", "白/黑/蓝最百搭，绿/特殊色更个性"],
  ["表带", "皮带优雅、金属链耐用、橡胶运动"],
  ["金属色", "钢、金、玫瑰金，与肤色和衣橱一致"]
];

const WATCH_BUDGET = [
  ["入门机械", "1k-5k", "精工、浪琴入门、卡西欧"],
  ["中端", "5k-3w", "浪琴、欧米茄、精工高端"],
  ["高端", "3w-15w", "劳力士、卡地亚、积家"],
  ["收藏级", "15w+", "百达翡丽、AP、江诗丹顿、RM"]
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { WATCH_BRANDS, WATCH_MOVEMENTS, WATCH_STYLES, WATCH_AESTHETIC, WATCH_BUDGET };
}
if (typeof window !== "undefined") {
  window.WATCH_BRANDS = WATCH_BRANDS;
  window.WATCH_MOVEMENTS = WATCH_MOVEMENTS;
  window.WATCH_STYLES = WATCH_STYLES;
  window.WATCH_AESTHETIC = WATCH_AESTHETIC;
  window.WATCH_BUDGET = WATCH_BUDGET;
}
