import React from 'react';

export default function Footer({ logo }) {
  return (
    <div className="Footer">
      <div className="Footer__main">
        <img src={logo && logo} alt="" />
      </div>
      <div className="red-stroke" />
    </div>
  );
}
