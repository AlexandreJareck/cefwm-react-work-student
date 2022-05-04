import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
`;

type WrapperProps = {
  color?: "white" | "lightcyan";
  maxWidth?: "40%" | "60%";
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ color, maxWidth }) => css`
    flex: 1;
    max-width: ${maxWidth};
    background-color: ${color};
  `}
`

export const Heading = styled.div`
  margin: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
`
export const BreakLine = styled.hr`
  margin: 1.5rem;
  border: 0.1px solid;
  border-color: lightgray;
`
export const Button = styled.button`
  margin: 1.5rem;
  color: #0dcaf0;
  border-color: #0dcaf0;
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid ;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  width: 42%;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  :hover {
    color: #000;
    background-color: #0dcaf0;
    border-color: #0dcaf0;
  }
`
export const GroupItem = styled.div`
  margin: 0 1.5rem;
  justify-content: space-between;
  gap: 1rem;
`

type ItemProps = {
  flexGrow: number;
}

export const Item = styled.div<ItemProps>`
  ${({flexGrow}) => css`
    flex-grow: ${flexGrow};
  `}
`
