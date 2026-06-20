

function WhyUs() {
  const whyItems = [
  { num: '01', title: 'Results over deliverables', desc: 'We measure success by the impact on your business — traffic, conversions, revenue — not just shipping a website.' },
  { num: '02', title: 'Radical transparency', desc: 'You always know where your project stands. Weekly updates, open communication, no surprises.' },
  { num: '03', title: 'Built for the Nigerian market', desc: 'We understand local payment systems, network conditions, and user behavior that global agencies often miss.' },
  { num: '04', title: 'Speed without cutting corners', desc: 'We move fast — most projects launch in 4–8 weeks — but never at the expense of quality or security.' },
  { num: '05', title: 'Dedicated project manager', desc: 'Every client gets a single point of contact who keeps everything on track and on budget.' },
  { num: '06', title: 'Flexible engagements', desc: 'Fixed-price projects, monthly retainers, or hourly consulting — we work the way that fits your business.' },
]
  return (
    <section id="why">
      <div className="section-wrap">
        <p className="section-label">Why Project Guru</p>
        <h2 className="section-title">What makes us<br />different</h2>
        <div className="why-grid">
          {whyItems.map((item) => (
            <div className="why-item reveal" key={item.num}>
              <div className="why-num">{item.num}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default WhyUs