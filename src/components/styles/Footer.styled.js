import styled from "styled-components";

export const StyledFooter = styled.footer`
    margin: 0px 4rem;
    border-top: 1px solid rgb(176, 224, 211);
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 2rem 0px 0.5rem;
    height: 10rem;

    & nav {
        display: flex;
        gap: 2.5rem;
    }

    & nav a {
        color: rgb(31, 31, 31);
        text-decoration: none;
        transition: all 0.2s ease 0s;
    }

    & nav a.active {
        color: rgb(1, 135, 98);
        font-weight: 700;
    }

    & p {
        font-size: 0.75rem;
        color: rgb(81, 81, 81);
    }

    @media (max-width: ${({theme}) => theme.laptop}) {
        margin: 0px 2rem;
    }
`