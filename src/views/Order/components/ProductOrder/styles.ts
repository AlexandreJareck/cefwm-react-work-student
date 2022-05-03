import styled, { css } from "styled-components";

type ItemProps = {
  flexGrow: number;
}

export const Container = styled.div`
  display: flex;
`

export const Item = styled.div<ItemProps>`
  ${({flexGrow}) => css`
    flex: ${flexGrow};
    margin: 0.3rem 0;
  `}
`
