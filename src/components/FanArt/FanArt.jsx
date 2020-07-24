import React from 'react';

export default function FanArt({ img1, img2, img3, img4 }) {
  return (
    <>
      <section className="FanArt">
        <h3>Fan Art</h3>

        <div className="FanArt__img-wrapper">

          <div className="FanArt__img">
            <img src={img1} alt="" />
          </div>

          <div className="FanArt__img">
            <img src={img2} alt="" />
          </div>

          <div className="FanArt__img">
            <img src={img3} alt="" />
          </div>

          <div className="FanArt__img">
            <img src={img4} alt="" />
          </div>
          
        </div>
      </section>
    </>
  );
}
