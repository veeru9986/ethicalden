import React from 'react';
import styled from 'styled-components';
import img1 from '../../images/Rectangle 81.png';
import heroBackground from '../HeroBackground/backgroundVideo.mp4';

function RecentWorks() {
  return (
    <Wrapper>
      <div className="banner_section">
        <video className="bg__header" preload="auto" loop autoPlay muted>
          <source className="desktop" src={heroBackground} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
      <div className="software_company_left_section">
        <div className="software_company_left_section_heading">
          <h2>
            <span>RENOWNED</span> SOFTWARE <span>COMPANY From</span> North Bengal
          </h2>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum quLorem ipsum dolor sit
          amet, consectetur adipiscing elit. In rutrum quis urna a ullamcorper. Integer enim felis,
          pellentesque ac felis et, varius ornare nisl. Nunc mauris turpis, porttitor sit amet
          mattis ac, ultricies sit amet diam. Nunc aliquet tincidunt lobortis. Ut quis felis
          tincidunt, tincidunt ex quis, ultricies nisi. Duis in tortor porta, laoreet erat
          tristique, ornare augue.is urna a ullamcorper. Integer enim felis, pellentesque ac felis
          et, varius ornare nisl. Nunc mauris turpis, porttitor sit amet mattis ac, ultricies sit
          amet diam. Nunc aliquet tincidunt lobortis. Ut quis felis tincidunt, tincidunt ex quis,
          ultricies nisi. Duis in tortor porta, laoreet erat tristique, ornare augue.
        </p>
      </div>
      <div className="software_company_right_section">
        <img src={img1} alt="" />
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
  /* padding-bottom: 100px; */
  /* background: url('${heroBackground}'); */
  .software_company_left_section {
    grid-area: 1/2/2/6;
    display: flex;
    flex-direction: column;
    padding: 100px 0;
  }
  .software_company_right_section {
    grid-area: 1/7/2/11;
    padding: 100px 0;
  }
  .banner_section {
    grid-area: 1/1/2/12;
    position: relative;
    z-index: -1;
    display: flex;
  }
  .bg__header {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
  .software_company_left_section_heading {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }
  h2 {
    color: #0a58ff;
    font-size: 50px;
    font-weight: 500;
    font-family: 'Teko', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-align: left;
  }
  span {
    color: #fff;
    font-size: 40px;
    font-family: 'Teko', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  img {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  p {
    color: #fff;
    text-align: left;
  }
  @media (max-width: 767px) {
    .software_company_left_section {
      grid-area: 2/1/3/12;
      padding: 0 10px;
      padding-bottom: 100px;
    }
    .software_company_right_section {
      grid-area: 1/1/2/12;
      padding-left: 10px;
      padding-right: 10px;

      padding-bottom: 0px;
    }
    .banner_section {
      grid-area: 1/1/4/12;
    }
  }
`;
