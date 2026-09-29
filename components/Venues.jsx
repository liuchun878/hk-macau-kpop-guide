const { useState } = React;

const venues = [
  {
    id: 'awe',
    city: '香港',
    name: '亚洲国际博览馆 Arena',
    nameEn: 'ASIAWORLD-EXPO ARENA',
    image: 'https://media.doubao.com/space/api/box/stream/download/all_by_mount_point/XHYvb1TgHoIb76xskL3cWyI7ndg',
    capacity: '约14,000人',
    summary: '香港最大室内场馆，Kpop 巡演常驻场地，交通便利看完可赶晚机。',
    transport: '机场快线「博览馆」站直达，市区约30分钟',
    highlights: ['Kpop 常驻场馆', 'EXO、TXT、ITZY 等在此开唱', '毗邻机场，散场可赶晚班机'],
    feature: '香港最大室内场馆',
  },
  {
    id: 'hkc',
    city: '香港',
    name: '香港体育馆（红馆）',
    nameEn: 'HONG KONG COLISEUM',
    image: 'https://media.doubao.com/space/api/box/stream/download/all_by_mount_point/YHVRbiEb4oOLvrxuiLNcTyxAnGb',
    capacity: '约12,500席',
    summary: '香港地标级场馆，经典四面台设计，港铁直达交通便利。',
    transport: '港铁红磡站步行5分钟，尖东商圈旁',
    highlights: ['经典四面台设计', '香港地标级场馆', '周边商圈美食丰富'],
    feature: '经典四面台',
  },
  {
    id: 'venetian',
    city: '澳门',
    name: '威尼斯人综艺馆',
    nameEn: 'THE VENETIAN ARENA',
    image: 'https://media.doubao.com/space/api/box/stream/download/all_by_mount_point/NFxGbSmDnoaUASxG3ZMcvzYUn6A',
    capacity: '约14,000人',
    summary: '2024年升级改造后更名，位于威尼斯人酒店内，无柱式全场馆设计。',
    transport: '位于威尼斯人酒店内，免费穿梭巴士覆盖各口岸',
    highlights: ['2024年升级改造更名', '无柱式全场馆视野佳', '酒店内餐饮购物一站式'],
    feature: '无柱式全场馆',
  },
  {
    id: 'galaxy',
    city: '澳门',
    name: '银河综艺馆',
    nameEn: 'GALAXY ARENA',
    image: 'https://media.doubao.com/space/api/box/stream/download/all_by_mount_point/UgSgbBS8Eoip9Ox0HsPcwqDxnLg',
    capacity: '16,000席',
    summary: '澳门最大室内综艺馆，2023年开幕，BLACKPINK、王嘉尔等巨星在此演出。',
    transport: '轻轨排角站附近，度假村内免费穿梭',
    highlights: ['澳门最大室内综艺馆', '2023年全新开幕', 'BLACKPINK、王嘉尔等在此演出'],
    feature: '澳门最大',
  },
];

function VenueCard({ venue, isExpanded, onToggle }) {
  const isMacau = venue.city === '澳门';
  return (
    <div
      className={`venue-card ${isExpanded ? 'expanded' : ''}`}
      onClick={onToggle}
    >
      <div className="venue-card-image">
        <img src={venue.image} alt={venue.name} loading="lazy" />
        <span className={`venue-tag ${isMacau ? 'macau' : ''}`}>
          {venue.city}
        </span>
      </div>
      <div className="venue-card-body">
        <h3 className="venue-name">{venue.name}</h3>
        <p className="venue-name-en">{venue.nameEn}</p>
        <p className="venue-summary">{venue.summary}</p>
        <div className="venue-stats">
          <div className="venue-stat">
            <span className="venue-stat-value">{venue.capacity}</span>
            <span className="venue-stat-label">容纳人数</span>
          </div>
          <div className="venue-stat">
            <span className="venue-stat-value" style={{
              background: isMacau
                ? 'linear-gradient(135deg, var(--secondary), #6366f1)'
                : 'linear-gradient(135deg, var(--accent), var(--secondary))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>{venue.feature}</span>
            <span className="venue-stat-label">场馆特色</span>
          </div>
        </div>
        <div className="venue-expand-hint">
          <span>{isExpanded ? '收起详情' : '点击查看详情'}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
      <div className="venue-details">
        <div className="venue-details-grid">
          <div className="venue-detail-item">
            <svg className="venue-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span><strong className="venue-detail-label">交通：</strong>{venue.transport}</span>
          </div>
          {venue.highlights.map((h, i) => (
            <div key={i} className="venue-detail-item">
              <svg className="venue-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: isMacau ? 'var(--secondary)' : 'var(--accent)' }}>
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <span>{h}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Venues() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleVenue = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="section" id="venues">
      <div className="section-head">
        <span className="section-eyebrow">CONCERT VENUES</span>
        <h2 className="section-title">演唱会场馆</h2>
        <p className="section-desc">
          港澳四大 Kpop 热门场馆，点击卡片查看交通、特色与观演小贴士
        </p>
      </div>

      <div className="venues-grid">
        {venues.map(v => (
          <VenueCard
            key={v.id}
            venue={v}
            isExpanded={expandedId === v.id}
            onToggle={() => toggleVenue(v.id)}
          />
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Venues });
