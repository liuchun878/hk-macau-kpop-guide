const { useState, useEffect } = React;

const photoSpots = [
  {
    id: 'star-avenue',
    location: '香港 · 尖沙咀',
    title: '星光大道 / 维港夜景',
    image: 'https://media.doubao.com/space/api/box/stream/download/all_by_mount_point/BAl1bsiJxolaKjxrdSdcLl1OnNd',
    desc: '明星手印、金像奖女神像，晚上看中环天际线灯光秀',
    tag: '夜景必打卡',
    tips: [
      '每晚8点有「幻彩咏香江」灯光音乐汇演',
      '尖沙咀港铁站E出口步行约10分钟',
      '建议傍晚抵达，黄昏到夜景一次拍齐',
      '钟楼、文化中心也是热门取景地',
    ],
  },
  {
    id: 'ferris-wheel',
    location: '香港 · 中环',
    title: '中环海滨摩天轮',
    image: 'https://media.doubao.com/space/api/box/stream/download/all_by_mount_point/CFribtcoXojmWLxRwTQc2qMyn5g',
    desc: '维港边的浪漫地标，傍晚时分最出片',
    tag: '浪漫地标',
    tips: [
      '黄昏时段乘坐可同时看到白天与夜景',
      '港铁中环站A出口步行约10分钟',
      '车厢内有WiFi可直播分享',
      '旁边海滨长廊适合散步拍照',
    ],
  },
  {
    id: 'disneyland',
    location: '香港 · 大屿山',
    title: '迪士尼乐园',
    image: 'https://media.doubao.com/space/api/box/stream/download/all_by_mount_point/KDNjbAQuioJji2xrJ3McSYIOnfg',
    desc: '梦幻城堡与夜间烟花，地铁迪士尼线直达',
    tag: '梦幻打卡',
    tips: [
      '夜间烟花秀约晚上9点开始（需提前查时间表）',
      '港铁欣澳站转乘迪士尼线',
      '建议预留一整天游玩时间',
      '城堡前的倒影湖是最佳拍照位',
    ],
  },
  {
    id: 'ruins',
    location: '澳门 · 半岛',
    title: '大三巴牌坊',
    image: 'https://media.doubao.com/space/api/box/stream/download/all_by_mount_point/Lr74b3iHroCIW5xAxcOcjVaanFe',
    desc: '世界遗产地标，周边小吃街一路逛吃',
    tag: '世界遗产',
    tips: [
      '世界文化遗产，澳门必打卡地标',
      '旁边恋爱巷粉彩色调超好拍',
      '附近有手信街可买杏仁饼、肉干',
      '建议上午前往避开人潮',
    ],
  },
  {
    id: 'macau-tower',
    location: '澳门 · 半岛',
    title: '澳门旅游塔',
    image: 'https://media.doubao.com/space/api/box/stream/download/all_by_mount_point/TKrubKNjXoZUjzx8aEBctY5ln4c',
    desc: '338米观景台俯瞰全城，夜晚灯光璀璨',
    tag: '高空夜景',
    tips: [
      '338米高观景台360°俯瞰澳门全景',
      '夜晚灯光璀璨，建议傍晚登塔',
      '塔内有旋转餐厅可边吃边赏景',
      '从关口打车约20分钟可达',
    ],
  },
];

function PhotoModal({ spot, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!spot) return null;

  return (
    <div className="photo-modal-overlay" onClick={onClose}>
      <div className="photo-modal" onClick={e => e.stopPropagation()}>
        <button className="photo-modal-close" onClick={onClose} aria-label="关闭">
          ✕
        </button>
        <img className="photo-modal-image" src={spot.image} alt={spot.title} />
        <div className="photo-modal-body">
          <div className="photo-modal-location">{spot.location}</div>
          <h3 className="photo-modal-title">{spot.title}</h3>
          <p className="photo-modal-desc">{spot.desc}</p>
          <div className="photo-modal-tips">
            <strong style={{ color: 'var(--accent)', fontSize: '14px' }}>追星打卡小贴士</strong>
            {spot.tips.map((tip, i) => (
              <div key={i} className="photo-modal-tip">{tip}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PhotoMap() {
  const [selectedSpot, setSelectedSpot] = useState(null);

  return (
    <section className="section" id="photomap">
      <div className="section-head">
        <span className="section-eyebrow">PHOTO SPOTS</span>
        <h2 className="section-title">追星打卡地图</h2>
        <p className="section-desc">
          除了演唱会，这些拍照圣地也别错过 — 点击查看打卡攻略
        </p>
      </div>

      <div className="photo-map-grid">
        {photoSpots.map(spot => (
          <div
            key={spot.id}
            className="photo-card"
            onClick={() => setSelectedSpot(spot)}
          >
            <img src={spot.image} alt={spot.title} loading="lazy" />
            <div className="photo-card-overlay"></div>
            <div className="photo-card-content">
              <div className="photo-card-location">{spot.location}</div>
              <div className="photo-card-title">{spot.title}</div>
              <div className="photo-card-desc">{spot.desc}</div>
              <span className="photo-card-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
                {spot.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      <PhotoModal spot={selectedSpot} onClose={() => setSelectedSpot(null)} />
    </section>
  );
}

Object.assign(window, { PhotoMap });
