import styled from "styled-components";

export const HeaderS = styled.header`
  background-color: #011830;
  padding: 0.5rem 1rem;
  a {
    text-decoration: none;
    color: inherit;
  }
  h1 {
    color: white;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-around;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: 0;
`;
export const Menu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  list-style: none;
  font: 400 1.125rem/1.35 "Poppins", sans-serif;
  color: white;

  a::after {
    content: "";
    display: block;
    height: 2px;
    width: 0px;
    background: #ffffff;
    margin-top: 4px;
    transition: 0.3s;
    position: absolute;
  }
`;
