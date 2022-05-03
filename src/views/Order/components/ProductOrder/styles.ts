import styled, { css } from "styled-components";

type ItemProps = {
  flexGrow: number;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Item = styled.div<ItemProps>`
  ${({ flexGrow }) => css`
    flex: ${flexGrow};
    margin: 0.3rem 0;
  `}
`
export const Wrapper = styled.div`
  margin: 1.5rem;
  display: flex;
`
export const Button = styled.button`
  cursor: pointer;
  color: #0dcaf0;
  border-color: #0dcaf0;
  display: inline-block;
  margin: 0 0.3rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  border: 1px solid;
  padding: 0.2rem 0.4rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: filter 0.2s;
  span{
    color: black;
  }
  svg {
    text-align: center;
  }
  &:hover {
    filter: brightness(0.9);
    background-color: #0bb5d8;
  }
`

export const Span = styled.span`
  padding: 2.5rem;
`
