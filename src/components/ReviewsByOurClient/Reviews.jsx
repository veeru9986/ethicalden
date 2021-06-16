import React from 'react';
import styled from 'styled-components';

function RecentWorks() {
  return (
    <Wrapper>
      <div className="recent_works_left_section">
        <div>
          <h2>Reviews</h2>
        </div>
        <div style={{ display: 'flex' }}>
          <span style={{ color: '#fff', marginTop: '-64px' }}>By our </span>
        </div>
        <div style={{ display: 'flex', marginTop: '-70px' }}>
          <span style={{ color: '#fff' }}>clients </span>
        </div>
      </div>
      <div className="recent_works_right_section">
        <img src="" alt="" />
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
  .recent_works_left_section {
    grid-area: 1/2/2/6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .recent_works_right_section {
    grid-area: 1/6/2/11;
    background-color: #c4c4c4;
    height: 300px;
  }
  h2 {
    color: #0a58ff;
    font-size: 96px;
    font-weight: 500;
    font-family: 'Teko', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-align: left;
  }
  span {
    color: #fff;
    font-size: 96px;
    font-family: 'Teko', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;
