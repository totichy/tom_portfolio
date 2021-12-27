import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div classNme='row'>
      <div className='header-wrapper'>
        <div className='main-info'>
          <h1>Web development and websites promotions</h1>
          <Typed
            className='typed-text'
            strings={[
              "Web Design",
              "Web Development",
              "Facebook ADDS",
              "Google Ads",
            ]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <a href='' className='btn-main-offer'>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
