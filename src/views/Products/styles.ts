import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        color: var(--texr-title);
        font-size: 1.5rem;
    }

    button {
        padding: 0.75rem;
        background-color: var(--blue);
        color: white;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`

export const Container = styled.div`
    max-width: 980px;
    margin: 0 auto;
    padding:  2.5rem 1rem;

    font-size: 1rem
`

