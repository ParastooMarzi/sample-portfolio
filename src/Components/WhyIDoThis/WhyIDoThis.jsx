import React from 'react';
import './WhyIDoThis.css';
import checkIcon from '../../Assets/check-icon.png';

const benefits = [
  { label: 'Cost Efficient', value: 9 },
  { label: 'Time-Saving', value: 8 },
  { label: 'Flexible & Scalable', value: 8 },
  { label: 'Executive Impact', value: 9 },
  { label: 'Objectivity', value: 7 },
];

const WhyIDoThis = () => {
  return (
    <section className="why-section">
      <div className="why-inner">
        <div className="why-left">
          <span className="tag">My aim</span>
          <h1>Why I Do This</h1>
          <p className="description">
            I'm not just here to fill gaps—I'm here to create momentum. As a fractional executive, I lead with purpose:
          </p>
          <ul className="checklist">
            <li><img src={checkIcon} alt="check" /> Driving culture, ethics, and strategic clarity</li>
            <li><img src={checkIcon} alt="check" /> I bring fresh perspective, fast impact, and a deep commitment to knowledge transfer</li>
            <li><img src={checkIcon} alt="check" /> I am shaped by years of navigating diverse corporate landscapes.</li>
          </ul>
          <button className="more-btn">More <span>→</span></button>
        </div>

        <div className="why-right">
          <div className="chart-card">
            <h4>Key Benefits of Hiring a Fractional CMO/CBO</h4>
            <ul className="bar-list">
              {benefits.map((item, index) => (
                <li key={index}>
                  <div className="bar-item">
                    <span className="bar-label">{item.label}</span>
                    <div className="bar-wrapper">
                      <div className="bar-fill" style={{ width: `${(item.value / 10) * 100}%` }}></div>
                      <span className="bar-score">{item.value}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <p className="score-note">Benefit Impact (simulated Score)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIDoThis;
