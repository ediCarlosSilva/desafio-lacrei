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
        font-weight: bold;
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