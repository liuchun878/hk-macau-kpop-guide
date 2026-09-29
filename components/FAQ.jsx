const { useState } = React;

const faqs = [
  {
    q: '证件需要提前多久办？签注怎么办？',
    a: '港澳通行证建议提前2-4周办理，首次办理需10个工作日左右。签注可以在出入境大厅自助机上办理，立等可取（部分城市）。注意香港和澳门签注是分开的，各自需要一次有效签注。出行前务必核对签注有效期和剩余次数。',
  },
  {
    q: '门票没抢到怎么办？有靠谱的二手渠道吗？',
    a: '最安全的方式是关注官方加场和退票重售。如果走二手，优先选择有平台担保的渠道，切勿直接微信/支付宝转账。验票要到现场官方取票点验证。价格超出原价太多的要警惕诈骗，尤其警惕所谓「内部票」「工作证」。',
  },
  {
    q: '应援棒可以进场再买吗？还是必须线上预订？',
    a: '视场次而定。部分场次会在场外设官方周边售卖点，但热门团可能一开门就售罄。建议尽量在官方线上渠道提前预订，或到现场早点排队购买。二手应援棒要注意验证正品，假货容易在场内不联动。',
  },
  {
    q: '可以带相机和灯牌进去吗？',
    a: '绝大多数 Kpop 演唱会禁止专业相机（单反/微单/长焦）和录音录像设备。手机通常可以带，但拍照录像限制以现场公告为准。灯牌尺寸各场馆规定不同，一般限制在 40x40cm 以内，部分场馆完全禁止。建议提前查场馆和主办方的观演须知。',
  },
  {
    q: '语言不通怎么办？港澳说普通话行吗？',
    a: '香港和澳门的服务行业（酒店、餐厅、商场、地铁）基本都能用普通话沟通，年轻一代大多也会说。景点、地铁都有中英双语标识。如果遇到沟通困难，用手机翻译软件也完全没问题。追星现场大家有共同话题，语言根本不是障碍～',
  },
  {
    q: '看完演唱会怎么回酒店？地铁还有吗？',
    a: '香港演唱会散场时港铁会加开班次，通常运营到凌晨12点-1点左右。红馆散场后步行回尖沙咀/油麻地的酒店也很方便。亚博场可以坐机场快线回市区（最后一班约凌晨12:30）。澳门的场馆大多在度假村内，住同一家酒店步行即可。深夜打车建议用叫车平台或酒店帮忙叫车。',
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={onToggle}>
        <span>{faq.q}</span>
        <span className="faq-icon">+</span>
      </div>
      <div className="faq-answer">
        <p>{faq.a}</p>
      </div>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" id="faq">
      <div className="section-head">
        <span className="section-eyebrow">FREQUENTLY ASKED</span>
        <h2 className="section-title">新手快问快答</h2>
        <p className="section-desc">
          第一次追星旅行最关心的问题，一次性给你讲明白
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            faq={faq}
            isOpen={openIndex === i}
            onToggle={() => toggleFAQ(i)}
          />
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { FAQ });
