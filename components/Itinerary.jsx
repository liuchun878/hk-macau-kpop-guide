const { useState } = React;

const days = [
  {
    id: 1,
    label: 'DAY 1',
    title: '抵达香港',
    subtitle: '入关 + 入住 + 打卡维港夜景',
    items: [
      {
        time: '12:00',
        title: '抵达香港 & 入关',
        desc: '从内地出发，经高铁西九龙站或港珠澳大桥金巴抵达。持通行证自助通关，全程约15-30分钟。',
        tag: '交通',
      },
      {
        time: '14:00',
        title: '入住尖沙咀 / 佐敦酒店',
        desc: '推荐住在尖沙咀、佐敦或油麻地一带，港铁站近、夜宵多、去红磡和亚博都方便。',
        tag: '住宿',
      },
      {
        time: '16:00',
        title: '周边闲逛 & 踩点路线',
        desc: '先去场馆附近踩个点，摸清地铁出口和周边商圈。尖沙咀海港城、K11 Musea 可顺路逛。',
        tag: '自由活动',
      },
      {
        time: '19:00',
        title: '星光大道 + 维港夜景',
        desc: '傍晚逛星光大道，找明星手印合影。8点整看「幻彩咏香江」灯光秀，配音乐超有氛围。',
        tag: '打卡',
      },
      {
        time: '21:30',
        title: '茶餐厅夜宵',
        desc: '看完夜景直奔附近茶餐厅，点一份奶茶 + 菠萝油 + 公仔面，港式夜宵仪式感拉满。',
        tag: '美食',
      },
    ],
  },
  {
    id: 2,
    label: 'DAY 2',
    title: '观演日',
    subtitle: '打卡 + 应援 + 演唱会',
    items: [
      {
        time: '10:00',
        title: '上午就近打卡',
        desc: '红馆场可以逛尖东 / 黄埔；亚博场可以去东荟城奥特莱斯；下午留足体力给晚上！',
        tag: '自由活动',
      },
      {
        time: '15:00',
        title: '抵达场馆 + 领应援',
        desc: '提前2-3小时到场馆，场外粉丝站通常会排队领手幅、小卡、贴纸。记得带齐自证物料。',
        tag: '应援',
      },
      {
        time: '17:00',
        title: '排队安检入场',
        desc: '开场前约1小时开始检票。注意场馆禁带物品：专业相机、长柄灯牌、食物饮料等。',
        tag: '入场',
      },
      {
        time: '19:00',
        title: '演唱会开始',
        desc: '享受属于你的3小时！记得存好体力，安可环节才是全场大合唱的高光时刻～',
        tag: '演唱会',
      },
      {
        time: '22:00',
        title: '散场 & 返回酒店',
        desc: '散场人多，地铁会加开班次。亚博场散场可坐机场快线回市区，红馆场步行回尖沙咀即可。',
        tag: '返程',
      },
    ],
  },
  {
    id: 3,
    label: 'DAY 3',
    title: '澳门一日',
    subtitle: '港珠澳大桥 + 澳门打卡 + 演唱会',
    items: [
      {
        time: '08:30',
        title: '出发前往澳门',
        desc: '港珠澳大桥金巴约40分钟，港澳快线巴士约60分钟。建议提前网上买票，过关走自助通道。',
        tag: '交通',
      },
      {
        time: '10:30',
        title: '大三巴 + 周边逛吃',
        desc: '上午先去大三巴牌坊打卡，逛恋爱巷、手信街，一路吃葡挞、猪扒包、杏仁饼。',
        tag: '打卡',
      },
      {
        time: '13:00',
        title: '官也街午餐',
        desc: '氹仔官也街美食云集：葡国菜、水蟹粥、木糠布甸、榴莲雪糕，选择困难症慎入。',
        tag: '美食',
      },
      {
        time: '15:00',
        title: '威尼斯人 / 银河',
        desc: '如果演唱会在威尼斯人综艺馆或银河综艺馆，下午可以先到度假村逛逛、踩点、领应援。',
        tag: '场馆',
      },
      {
        time: '19:00',
        title: '演唱会 / 澳门塔夜景',
        desc: '有演唱会就直接进场嗨；不看演唱会的话，可以去澳门塔看夜景，360°俯瞰澳门半岛。',
        tag: '重头戏',
      },
    ],
  },
];

function Itinerary() {
  const [activeDay, setActiveDay] = useState(1);
  const day = days.find(d => d.id === activeDay);

  return (
    <section className="section" id="itinerary">
      <div className="section-head">
        <span className="section-eyebrow">3 DAYS 2 NIGHTS</span>
        <h2 className="section-title">3天2夜行程模板</h2>
        <p className="section-desc">
          一份给追星党的经典行程：第一天到港，第二天看演唱会，第三天澳门打卡 / 赶下一场
        </p>
      </div>

      <div className="itinerary-container">
        <div className="itinerary-tabs">
          {days.map(d => (
            <button
              key={d.id}
              className={`itinerary-tab ${activeDay === d.id ? 'active' : ''}`}
              onClick={() => setActiveDay(d.id)}
            >
              {d.label} · {d.title}
            </button>
          ))}
        </div>

        <div className="itinerary-content">
          <div className="itinerary-day-header">
            <div className="itinerary-day-num font-tech">{day.id}</div>
            <div className="itinerary-day-title">
              <h3>{day.title}</h3>
              <p>{day.subtitle}</p>
            </div>
          </div>

          <div className="itinerary-timeline">
            {day.items.map((item, i) => (
              <div key={i} className="itinerary-item">
                <div className="itinerary-time">{item.time}</div>
                <div className="itinerary-dot"></div>
                <div className="itinerary-item-content">
                  <div className="itinerary-item-title">{item.title}</div>
                  <div className="itinerary-item-desc">{item.desc}</div>
                  <span className="itinerary-item-tag">{item.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Itinerary });
