/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function HeroTopics(props) {
  const { data } = props;
  return (
    <Wrapper>
      <div className="hero_topic_section">
        <div className="hero_topic_grid">
          {data.map((d) => {
            return (
              <div className="hero_topics">
                <div className="hero_topics_icon">
                  <img src={d.icon} alt={d.title} />
                </div>
                <div className="hero_topics_heading">
                  <h4>{d.title}</h4>
                </div>
                <div className="blue_line" />

                <div className="hero_topics_desc">
                  <p>{d.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default HeroTopics;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: auto;
  width: 100%;
  height: auto;
  margin-bottom: 200px;

  .hero_topic_section {
    grid-area: 1 / 2/2 / 11;
    display: flex;
  }
  .hero_topics_icon {
    display: flex;
  }
  img {
    width: 90px;
    height: 90px;
  }
  .hero_topic_grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 479px) {
      grid-template-columns: auto;
    }
    @media (max-width: 767px) {
      grid-template-columns: auto;
    }
  }

  .hero_topics {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: #1a1a1a;
    padding-top: 80px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    border-right: 1px solid gray;
    transition: all 0.2s ease 0s;
    @media (max-width: 479px) {
      border-right: none;

      border-bottom: 1px solid gray;
    }
    @media (max-width: 767px) {
      border-right: none;

      border-bottom: 1px solid gray;
    }
  }
  .hero_topics :last-of-type {
    border: none;
  }
  .hero_topics:hover {
    background-color: rgb(34, 34, 34);
  }
  .blue_line {
    width: 115px;
    height: 6px;
    background-color: #0a58ff;
  }
  .hero_topics_heading {
    display: flex;
    justify-content: flex-start;
  }
  .hero_topics_desc {
    display: flex;
    justify-content: flex-start;
    margin-top: 38px;
  }
  p {
    text-align: left;
    color: #fff;
    @media (max-width: 479px) {
      text-align: left;
    }
    @media (max-width: 325px) {
      font-size: 10px;
    }
    @media (max-width: 991px) {
      font-size: 10px;
    }
    @media (max-width: 767px) {
      font-size: 16px;
    }
  }
  h4 {
    font-size: 40px;
    color: #fff;
    font-family: 'Teko', sans-serif;
    text-transform: uppercase;
    @media (max-width: 479px) {
      font-size: 25px;
    }
    @media (max-width: 325px) {
      font-size: 22px;
    }
    @media (max-width: 991px) {
      font-size: 23px;
    }
    @media (max-width: 767px) {
      font-size: 30px;
    }
  }
`;
