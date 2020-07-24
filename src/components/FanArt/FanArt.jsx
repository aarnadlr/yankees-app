import React from 'react';
import PropTypes from 'prop-types';

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
};


FanArt.propTypes = {
  img1: PropTypes.string,
  img2: PropTypes.string,
  img3: PropTypes.string,
  img4: PropTypes.string
};

