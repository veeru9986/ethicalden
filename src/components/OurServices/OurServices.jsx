/* eslint-disable react/prop-types */

import React from 'react';
import styled from 'styled-components';

function OurServices(props) {
  // eslint-disable-next-line react/prop-types
  const { data } = props;
  return (
    <Wrapper>
      <div className="our_services_heading">
        <h2 className="our_services_h2">
          <span style={{ color: '#fff' }}>OUR</span> SERVICES
        </h2>
      </div>
      <div className="our_services_section">
        {data.map((d) => {
          return (
            <>
              <div className="our_services_section_flex">
                <span className="our_services_number" style={{ color: 'white' }}>
                  {d.num}
                </span>
                <h3>{d.title}</h3>
                <div className="blue_line" />
                <p>{d.info}</p>
              </div>
            </>
          );
        })}
      </div>
    </Wrapper>
  );
}

export default OurServices;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  background-color: #1a1a1a;
  padding: 100px 0;
  .our_services_heading {
    grid-area: 1/2/2/11;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .our_services_section {
    grid-area: 2/1/3/12;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    flex-wrap: wrap;
  }
  .our_services_h2 {
  }
  .our_services_section_flex {
    width: 320px;
    padding: 0 15px;
    transition: all 0.2s ease 0s;
  }
  .our_services_section_flex:hover {
    background-color: #1a1a1a;
    box-shadow: rgba(4, 229, 229, 0.1) 0px 28px 60px;
    transform: translateY(-10px);
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
  .our_services_number {
    display: flex;
    font-family: 'Teko', sans-serif;
    font-weight: 600;
    font-size: 58px;
    color: #fbfbfb;
    opacity: 0.35;
    letter-spacing: 0.09em;
  }
  h3 {
    color: #fff;
    text-align: left;
    font-size: 32px;
    font-family: 'Teko', sans-serif;
    margin-top: -30px;
  }
  p {
    color: #fff;
    text-align: left;
    margin-top: 20px;
  }
  .blue_line {
    width: 115px;
    height: 6px;
    background-color: #0a58ff;
  }
`;
