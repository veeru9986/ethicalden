/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';
import check3d from '../../images/check3d.jpg';

function RecentWorks() {
  return (
    <Wrapper>
      <div className="recent_works_heading">
        <h2>
          <span style={{ color: '#fff' }}>RECENT</span> WORKS
        </h2>
      </div>
      <div className="recent_works_section">
        <Tilt>
          <div className="blueShadow">
            <div className="recent_works_flex">
              <img src={check3d} alt="" />
            </div>
            <div className="recent_works_flex_text">
              <h1>recent works</h1>
            </div>
          </div>
        </Tilt>
        <Tilt>
          <div className="blueShadow">
            <div className="recent_works_flex">
              <img src={check3d} alt="" />
            </div>
            <div className="recent_works_flex_text">
              <h1>recent works</h1>
            </div>
          </div>
        </Tilt>
        <Tilt>
          <div className="blueShadow">
            <div className="recent_works_flex">
              <img src={check3d} alt="" />
            </div>
            <div className="recent_works_flex_text">
              <h1>recent works</h1>
            </div>
          </div>
        </Tilt>
      </div>
    </Wrapper>
  );
}

export default RecentWorks;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  padding: 100px 0;
  .recent_works_heading {
    grid-area: 1/2/2/11;
    display: flex;
    justify-content: center;
  }
  h2 {
    font-size: 96px;
    font-family: 'Teko', sans-serif;
    font-weight: 500;
    color: #0a58ff;
    @media (max-width: 479px) {
      font-size: 60px;
    }
  }
  .recent_works_section {
    grid-area: 2/2/3/11;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .blueShadow {
    width: auto;
    height: auto;
    box-shadow: rgba(4, 0, 0, 0.2) 0px 28px 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .recent_works_flex {
    width: 400px;
    height: auto;
    box-shadow: rgba(4, 229, 229, 0.2) 0px 28px 60px;
    position: relative;
    padding: 20px;
  }
  img:hover {
    transform: scale(1.1);
  }

  img {
    width: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
    border-radius: 6px;
    box-shadow: rgba(4, 229, 229, 0.2) 0px 28px 60px;
  }
  .recent_works_flex_text {
    opacity: 0;
    position: absolute;
    bottom: -40px;
    transition: all 0.5s ease 0.5s;
  }
  .blueShadow:hover {
    .recent_works_flex_text {
      opacity: 1;
      bottom: 22px;
    }
  }
`;
