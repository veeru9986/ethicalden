import React from 'react';
import styled from 'styled-components';

function RecentWorks() {
  return (
    <Wrapper>
      <div className="clients_heading">
        <h2>Clients</h2>
      </div>
      <div className="client_section_flex">
        <div className="clients_showcase_logos">
          <img src="" alt="" />
        </div>
        <div className="clients_showcase_logos">
          <img src="" alt="" />
        </div>
        <div className="clients_showcase_logos">
          <img src="" alt="" />
        </div>
        <div className="clients_showcase_logos">
          <img src="" alt="" />
        </div>
        <div className="clients_showcase_logos">
          <img src="" alt="" />
        </div>
        <div className="clients_showcase_logos">
          <img src="" alt="" />
        </div>
        <div className="clients_showcase_logos">
          <img src="" alt="" />
        </div>
        <div className="clients_showcase_logos">
          <img src="" alt="" />
        </div>
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
  .client_section_flex {
    grid-area: 2/2/3/11;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  .clients_showcase_logos {
    width: 300px;
    height: 300px;
    background-color: #c4c4c4;
    margin: 30px 0;
  }
  h2 {
    color: #fff;
    font-size: 96px;
    font-weight: 500;
    font-family: 'Teko', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-align: left;
  }
  .clients_heading {
    grid-area: 1/2/2/11;
    display: flex;
    justify-content: center;
  }
`;
