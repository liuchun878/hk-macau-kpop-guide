function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">K-POP FAN TRAVEL GUIDE</div>
        <p className="footer-text">
          愿每一场奔赴都值得，愿每一次相遇都难忘。
          <br />
          港澳追星，出发吧 ✦
        </p>
        <div className="footer-tags">
          <span className="footer-tag">香港</span>
          <span className="footer-tag">澳门</span>
          <span className="footer-tag">K-POP</span>
          <span className="footer-tag">演唱会</span>
          <span className="footer-tag">追星旅行</span>
          <span className="footer-tag">新手攻略</span>
        </div>
        <div className="footer-copyright">
          © 2024 Fan Travel Guide · 仅供参考，出行前请以官方最新信息为准
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
