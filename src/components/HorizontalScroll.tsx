import React from 'react';
import IMG1 from '../assets/images/current-events/CE1.jpg';
import IMG2 from '../assets/images/current-events/CE2.jpg';
import IMG3 from '../assets/images/current-events/CE3.jpg';
import IMG4 from '../assets/images/current-events/CE4.jpg';
import './horizontal.scss';
function HorizontalScroll() {
  const imgs = [IMG1, IMG2, IMG3, IMG4];
  return (
    <section className="section">
      <div>
        <div>
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i}>
              <img src={imgs[Math.floor(Math.random() * 3)]} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HorizontalScroll;
