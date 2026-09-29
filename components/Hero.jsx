function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <img
          src="https://media.doubao.com/space/api/box/stream/download/all_by_mount_point/LdmkbM1TBoQcyOxRq3pcXLWlnVf"
          alt="香港星光大道维港夜景"
          loading="eager"
        />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot"></span>
          K-POP CONCERT TRAVEL
        </div>

        <h1 className="hero-title">港澳追星攻略</h1>

        <p className="hero-subtitle font-display">K-POP FAN TRAVEL GUIDE</p>

        <p className="hero-desc">
          第一次去香港、澳门看演唱会？场馆怎么去、票从哪买、应援怎么领、看完怎么回酒店——
          从零开始的追星旅行手册，让你轻松奔赴每一场星光之约。
        </p>

        <div className="hero-actions">
          <a href="#venues" className="btn btn-primary">
            <span>开始攻略</span>
            <span>→</span>
          </a>
          <a href="#itinerary" className="btn btn-outline">
            <span>3天2夜行程</span>
          </a>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>SCROLL</span>
        <div className="hero-scroll-hint-line"></div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
