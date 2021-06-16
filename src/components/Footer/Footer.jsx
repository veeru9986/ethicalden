import React from 'react';
import styled from 'styled-components';
import img1 from '../../images/Vectors.svg';
import img2 from '../../images/Vector.svg';

import img3 from '../../images/Vector(1).svg';
import img4 from '../../images/Vector(2).svg';

function Footer() {
  return (
    <Wrapper>
      <div className="footer_section">
        <div className="footer_section_inside_flex">
          <div className="footer_details">
            <div>
              <h2>Say hi</h2>
            </div>
            <div>
              <h3>hello@ethicalden.com</h3>
            </div>
          </div>
          <div className="footer_blue_line" />
          <div className="footer_details_section_section">
            <span>design</span>
            <span>ui ux</span>
            <span>digital marketing</span>
            <span>cyber security</span>
          </div>
          <div className="footer_social_icons">
            <img src={img1} alt="" />
            <img src={img2} alt="" />

            <img src={img3} alt="" />

            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  background-color: #1a1a1a;
  padding-bottom: 100px;
  padding-top: 100px;
  .footer_section {
    grid-area: 1/2/2/11;
  }
  .footer_section_inside_flex {
    display: flex;
    flex-direction: column;
  }
  .footer_details {
    padding-bottom: 50px;
  }
  h2 {
    color: #fff;
    font-size: 56px;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    text-transform: capitalize;
    letter-spacing: 0.05em;
    text-align: left;
  }
  h3 {
    color: #fff;
    font-size: 56px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    text-transform: lowercase;
    letter-spacing: 0.05em;
    text-align: left;
  }
  .footer_blue_line {
    width: 115px;
    height: 6px;
    background-color: #0a58ff;
  }
  .footer_details_section_section {
    display: flex;
    flex-direction: column;
  }
  span {
    font-size: 36px;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    font-weight: 500;
    display: flex;
  }
  .footer_social_icons {
    display: flex;
  }
  img {
    width: 30px;
    height: 30px;
    padding-right: 10px;
  }
`;
