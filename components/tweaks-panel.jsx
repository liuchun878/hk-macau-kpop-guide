/**
 * 风格调节面板（tweaks-panel）
 * 提供与项目使用一致的 API：useTweaks / TweaksPanel / TweakSection / TweakColor / TweakSlider / TweakToggle
 * 全部使用内联样式，自包含，不依赖额外 CSS。
 */
const { useState, useMemo } = React;

/* 注入少量全局样式：霓虹模式开关的视觉效果 */
(function () {
  if (typeof document === 'undefined') return;
  const styleEl = document.createElement('style');
  styleEl.textContent =
    '.neon-off .app::before{opacity:.25;}' +
    '.neon-off .nav-logo-dot,.neon-off .itinerary-dot{box-shadow:none;}' +
    '.neon-off .nav-links a::after{box-shadow:none;}';
  document.head.appendChild(styleEl);
})();

function useTweaks(defaults) {
  const [state, setState] = useState(defaults);
  const setTweak = (key, value) => {
    setState((prev) => ({ ...prev, [key]: value }));
  };
  return [state, setTweak];
}

function TweaksPanel({ children }) {
  const [open, setOpen] = useState(false);

  const panelStyle = {
    position: 'fixed',
    top: 76,
    right: 20,
    zIndex: 150,
    width: 250,
    background: 'rgba(18, 18, 42, 0.92)',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: 16,
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
    overflow: 'hidden',
    fontFamily: "'Noto Sans SC', sans-serif",
  };

  const btnStyle = {
    position: 'fixed',
    top: 76,
    right: 20,
    zIndex: 150,
    padding: '8px 16px',
    borderRadius: 999,
    border: '1px solid rgba(255,255,255,0.18)',
    background: 'rgba(18, 18, 42, 0.85)',
    color: '#fff',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '0.12em',
    cursor: 'pointer',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.4)',
    transition: 'all .25s ease',
  };

  if (!open) {
    return (
      <button style={btnStyle} onClick={() => setOpen(true)}>
        TWEAKS
      </button>
    );
  }

  return (
    <div style={panelStyle}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.08em' }}>
          风格调节
        </span>
        <button
          onClick={() => setOpen(false)}
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: 'none',
            color: '#fff',
            width: 26,
            height: 26,
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: 14,
            lineHeight: 1,
          }}
          aria-label="收起面板"
        >
          ✕
        </button>
      </div>
      <div style={{ padding: '8px 16px 16px' }}>{children}</div>
    </div>
  );
}

function TweakSection({ label }) {
  return (
    <div
      style={{
        margin: '14px 0 8px',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.18em',
        color: 'rgba(255,255,255,0.45)',
        textTransform: 'uppercase',
      }}
    >
      {label}
    </div>
  );
}

function TweakColor({ label, value, options, onChange }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginBottom: 8 }}>
        {label}
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {options.map((c) => {
          const active = c.toLowerCase() === String(value).toLowerCase();
          return (
            <button
              key={c}
              onClick={() => onChange(c)}
              aria-label={`${label} ${c}`}
              style={{
                width: 26,
                height: 26,
                borderRadius: '50%',
                background: c,
                border: active
                  ? '2px solid #fff'
                  : '2px solid rgba(255,255,255,0.25)',
                cursor: 'pointer',
                padding: 0,
                boxShadow: active ? '0 0 12px ' + c : 'none',
                transition: 'all .2s ease',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

function TweakSlider({ label, value, min, max, step, unit, onChange }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 12,
          color: 'rgba(255,255,255,0.7)',
          marginBottom: 6,
        }}
      >
        <span>{label}</span>
        <span style={{ color: '#fff', fontWeight: 700 }}>
          {Number(value).toFixed(1)}
          {unit || ''}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{ width: '100%', accentColor: '#ff2d95', cursor: 'pointer' }}
      />
    </div>
  );
}

function TweakToggle({ label, value, onChange }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 6,
      }}
    >
      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>{label}</span>
      <button
        onClick={() => onChange(!value)}
        role="switch"
        aria-checked={!!value}
        style={{
          width: 42,
          height: 24,
          borderRadius: 999,
          border: 'none',
          cursor: 'pointer',
          position: 'relative',
          background: value
            ? 'linear-gradient(90deg, #ff2d95, #a855f7)'
            : 'rgba(255,255,255,0.18)',
          transition: 'background .25s ease',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 3,
            left: value ? 21 : 3,
            width: 18,
            height: 18,
            borderRadius: '50%',
            background: '#fff',
            transition: 'left .25s ease',
          }}
        />
      </button>
    </div>
  );
}

Object.assign(window, { useTweaks, TweaksPanel, TweakSection, TweakColor, TweakSlider, TweakToggle });
