/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import links from '../../constants/link';

const Navbar = ({ Logo }) => {
  const [isOpen, setNav] = useState(false);

  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };
  return (
    <NavStyles>
      <div className="masthead">
        <Link to="/">
          <img src={Logo} alt="Analogica Logo" />
        </Link>
        <button
          className={isOpen ? 'toggle-btn toggle-btn-active' : 'toggle-btn'}
          type="button"
          onClick={toggleNav}
          aria-label="Menu Button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
        {links.map((item, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index}>
              <Link onClick={toggleNav} to={item.path} className={item.class}>
                {item.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </NavStyles>
  );
};

export const NavStyles = styled.nav`
  position: fixed;
  z-index: 999;
  top: 0;
  display: flex;
  width: 100%;
  left: 0;
  right: 0;
  padding-top: 0px;
  /* padding-left: 7rem;
    padding-right: 7rem; */
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  /* grid-template-rows: 70px; */
  grid-column-gap: 5px;
  box-sizing: border-box;
  background-color: transparent;
  @media (max-width: 991px) {
    /* padding-left: 2px; */
  }
  .masthead {
    grid-area: 1/2/2/6;
    z-index: 3;
    width: 100%;
    height: 80px;
    display: flex;
    @media (max-width: 991px) {
      align-items: center;
    }
    img {
      margin-left: 0px;
      width: 200px !important;
      margin-top: 0px;
      @media (min-width: 768px) {
        width: 100px;
      }
      @media (max-width: 991px) {
        /* margin-left:30px; */
      }
      @media (min-width: 1200px) {
        width: 120px;
      }
    }
  }
  .nav-links {
    grid-area: 1/5/2/11;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    position: fixed;
    text-align: center;
    background: transparent;
    margin: 0;
    height: 70%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    list-style: none;
    padding-left: 0;
    place-items: center;
    width: 100%;
    li {
      list-style: none;
      font-size: 18px;
      font-weight: 500;
      margin-left: 0;
      padding: 0px;

      @media (max-width: 991px) {
        margin-top: 2rem;
      }
      a {
        text-decoration: none;
        text-transform: uppercase;
        color: #fff;
        transition: 0.3s;

        &.active {
          color: var(--thirdColor);
        }
      }
      &:hover {
        cursor: pointer;
        a {
          color: #2cde80;
        }
      }
    }
    &.show-nav {
      transform: translateX(0%);
    }
  }
  .toggle-btn {
    position: absolute;
    right: 30px;
    width: 40px;
    height: 40px;
    padding: 5px;
    background-color: #fff;
    border: none;
    cursor: pointer;
    @media (max-width: 479px) {
      top: 20px;
    }
    span {
      display: block;
      width: 30px;
      height: 2px;
      background-color: #fff;
      transition: 0.2s ease-in;
      &:nth-child(1) {
        transform: translateY(-5px);
      }
      &:nth-child(3) {
        transform: translateY(5px);
      }
    }
    &.toggle-btn-active {
      span {
        &:nth-child(1) {
          transform: translateY(2px) rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
          transform: translateX(-100%);
        }
        &:nth-child(3) {
          transform: translateY(-2px) rotate(-45deg);
        }
      }
    }
  }

  @media (min-width: 992px) {
    .masthead {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
    .toggle-btn {
      display: none;
    }
    .nav-links {
      background: transparent;
      flex-direction: row;
      margin-left: auto;
      position: relative;
      transform: translateX(0);
      transition: none;
      li {
        margin-left: 2rem;
      }
    }
  }
  /* .courses {
    transition: 0.1s ease-in-out;
    border: 1px solid #fff;
    padding: 10px 10px;
    border-radius: 5px;
  }
  .courses:hover {
    background: #fff;
    color: var(--secondaryColor) !important;
  } */
`;

export default Navbar;
