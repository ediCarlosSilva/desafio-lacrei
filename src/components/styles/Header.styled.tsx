import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 0.5rem 4rem;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    font-weight: bold;
    /* offset-x | offset-y | blur-radius | spread-radius | color */
    box-shadow: 0 4px 4px 0px rgba(0, 0, 0, 0.25);


    @media (max-width: ${({theme}) => theme.laptop}) {
        padding: 0.5rem 2rem;
    }

    @media (max-width: ${({ theme}) => theme.mobile}) {
        padding: 0.5rem 1rem;
        flex-direction: column;
    }
`

export const Logo = styled.a`
    color: #018762;
    font-weight: 700;
    font-size: 2rem;
    /* offset-x | offset-y | blur-radius | color */
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

    text-decoration: none;
    transition: all 0.2s ease 0s;

    &:hover {
        opacity: .7;
    }
`

export const Nav = styled.nav`
    display: flex;
    gap: 2.5rem;
    -webkit-box-pack: justify;
    justify-content: space-between;

    & > a {
        text-decoration: none;
        color: #1F1F1F;
        font-size: 1rem;
        transition: all 0.2s ease 0s;
    }

    & a.active {
        color: #018762;
    }

    & > a:hover {
        opacity: 0.7;
    }

    // ajuste reponsivo para desktop/mobile
    @media (max-width: ${({theme}) => theme.laptop}) {
        gap: 2rem;
    }

    // ajuste responsivo para mobile 
    @media (max-width: ${({ theme}) => theme.mobile}) {
        gap: 1rem;

        & a {
            font-size: 0.875rem;
        }
    }
`