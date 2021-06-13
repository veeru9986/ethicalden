/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import ReactTypingEffect from 'react-typing-effect';
import backgroundimage from '../../images/Rectangle 38.png';

function HeroBackground() {
  return (
    <Wrapper>
      <div className="banner_section">
        {/* <video className="bg__header" preload="auto" loop autoPlay muted>
          <source className="desktop" src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video> */}
        <div className="banner_heading">
          <h2>innovative</h2>
          <h1 style={{ fontSize: '92px' }}>Cyber AGENCY</h1>
          <div className="blue_line" />
          <div style={{ display: 'flex', height: '50px', marginTop: '10px' }}>
            <ReactTypingEffect
              text={[
                'Mobile App Development',
                'Web development',
                'Email Marketing',
                'Search Engine Optimization',
                'UI/UX Development',
                'Cyber Security',
              ]}
              cursorRenderer={(cursor) => <h3>{cursor}</h3>}
              //   speed="700ms"
              eraseSpeed="700ms"
              eraseDelay="2000ms"
              typingDelay="1500ms"
              // eslint-disable-next-line no-unused-vars
              displayTextRenderer={(text) => {
                return (
                  <h3>
                    {text.split('').map((char, i) => {
                      const key = `${i}`;
                      return (
                        <span key={key} style={i % 2 === 0 ? { color: '#fff' } : {}}>
                          {char}
                        </span>
                      );
                    })}
                  </h3>
                );
              }}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default HeroBackground;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  position: relative;
  background: url('${backgroundimage}');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @media (max-width: 479px) {
    background-size: contain;
  }
  .banner_section {
    grid-area: 1/1/2/12;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
  }
  .bg__header {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
  .banner_heading {
    grid-area: 1/2/2/11;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 9;
    flex-direction: column;

 
  
    @media (max-width: 325px) {
      display: flex;
      align-items: center;
    }
    @media (max-width: 991px) {
      h1 {
        font-size: 64px !important;
      }
    }
    @media (max-width: 767px) {
      h1 {
        font-size: 43px !important;
      }
    }
    @media (max-width: 479px) {
      h1 {
        font-size: 30px !important;
      }
    }
  }

  h2 {
    font-size: 52px;
    color: #fff;
    text-transform: uppercase;
    font-family: 'Teko', sans-serif;
    letter-spacing: 0.09em;
    @media (max-width: 479px) {
      font-size: 22px !important;
    }
    @media (max-width: 767px) {
      font-size: 33px !important;
    }
  }
  h1 {
    color: #7ed957;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    @media (max-width: 479px) {
      font-size: 20px;
    }
  }

  h3 {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    font-family: 'Teko', sans-serif;
    font-size: 30px;
    @media (max-width: 479px) {
      font-size: 22px !important;
    }
  }

  .blue_line {
    width: 115px;
    height: 10px;
    background-color: #0a58ff;
    @media (max-width: 479px) {
      height: 5px;
    }
  }
`;
