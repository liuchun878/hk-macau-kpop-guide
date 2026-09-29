const guideItems = [
  {
    num: '01',
    icon: '🛂',
    title: '证件与过关',
    items: [
      '提前办好港澳通行证 + 有效签注',
      '香港、澳门签注各需一次',
      '团队旅游签（L签）可自助通关',
      '出发前核对签注有效期',
      '带好身份证 + 通行证原件',
    ],
  },
  {
    num: '02',
    icon: '🎫',
    title: '买票渠道',
    items: [
      '香港场：KKTIX HK、Cityline、快达票',
      '澳门场：金光票务、银河票务',
      '内地：大麦 / 猫眼 / Trip.com 同步',
      '只认官方渠道，谨防假票诈骗',
      '开票前提前注册并实名认证',
    ],
  },
  {
    num: '03',
    icon: '💎',
    title: '应援与观演',
    items: [
      '应援棒：官方线上店或场外购买',
      '场外粉丝站发手幅、小卡、贴纸',
      '开场前1-2小时到场排队安检',
      '录音录像以场馆公告为准',
      '灯牌尺寸限制需提前确认',
    ],
  },
  {
    num: '04',
    icon: '💳',
    title: '支付与网络',
    items: [
      '支付宝 / 微信 / 银联大部分可用',
      '备少量港币 / 澳门币现金',
      '香港交通：八达通或支付宝乘车码',
      '手机开漫游或出境流量包',
      '澳门部分店铺收港币1:1不补水',
    ],
  },
];

function Guide() {
  return (
    <section className="section" id="guide">
      <div className="section-head">
        <span className="section-eyebrow">BEGINNER'S GUIDE</span>
        <h2 className="section-title">新手必读四件事</h2>
        <p className="section-desc">
          第一次去港澳看演唱会？这四件事先搞明白，出发不慌
        </p>
      </div>

      <div className="guide-grid">
        {guideItems.map(item => (
          <div key={item.num} className="guide-card">
            <span className="guide-card-num font-tech">{item.num}</span>
            <div className="guide-card-icon">{item.icon}</div>
            <h3 className="guide-card-title">{item.title}</h3>
            <ul className="guide-card-list">
              {item.items.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Guide });
