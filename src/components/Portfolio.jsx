import React from "react";
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={netflix}
          alt='Netflix Clone project'
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa esse
          distinctio quam magnam fugit molestiae ea corrupti blanditiis,
          repudiandae dolor.
        </p>
        <b>Link: </b>
        <a
          className='hyper-link'
          onClick={() => window.open("https://www.netflix.com")}
        >
          https://www.netflix.com
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix clone project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={cityGuide}
          alt='City Guide project'
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa esse
          distinctio quam magnam fugit molestiae ea corrupti blanditiis,
          repudiandae dolor.
        </p>
        <b>Link: </b>
        <a
          className='hyper-link'
          onClick={() => window.open("https://www.netflix.com")}
        >
          https://www.netflix.com
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "City Guide project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={portfolio}
          alt='Portfolio project'
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa esse
          distinctio quam magnam fugit molestiae ea corrupti blanditiis,
          repudiandae dolor.
        </p>
        <b>Link: </b>
        <a
          className='hyper-link'
          onClick={() => window.open("https://www.netflix.com", "_blank")}
        >
          https://www.netflix.com
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Portfolio project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src={taskManager}
          alt='Task Manager project'
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa esse
          distinctio quam magnam fugit molestiae ea corrupti blanditiis,
          repudiandae dolor.
        </p>
        <b>Link: </b>
        <a
          className='hyper-link'
          onClick={() => window.open("https://www.netflix.com", "_blank")}
        >
          https://www.netflix.com
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "Task manager project",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>Portfolio</h1>
        <div className='image-box-wrapper row justify-content-center'>
          <div className='portfolio-image-box' onClick={openPopupboxNetflix}>
            <img
              src={netflix}
              alt='Netflix clone project'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>

          <div className='portfolio-image-box' onClick={openPopupboxCityGuide}>
            <img
              src={cityGuide}
              alt='City guide project'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>

          <div className='portfolio-image-box' onClick={openPopupboxPortfolio}>
            <img
              src={portfolio}
              alt='Portfolio project'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>

          <div
            className='portfolio-image-box'
            onClick={openPopupboxTaskManager}
          >
            <img
              src={taskManager}
              alt='Task manager project'
              className='portfolio-image'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon' icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer
        {...popupboxConfigNetflix}
        {...popupboxConfigCityGuide}
        {...popupboxConfigPortfolio}
        {...popupboxConfigTaskManager}
      />
    </div>
  );
};

export default Portfolio;
