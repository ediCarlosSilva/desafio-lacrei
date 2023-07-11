import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};

    padding: 0.5rem 4rem;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-color: rgb(238, 238, 238);
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
`

export const Nav = styled.nav`
    display: flex;
    gap: 2.5rem;
    -webkit-box-pack: justify;
    justify-content: space-between;

    & > a {
        text-decoration: none;
        color: rgb(31, 31, 31);
        font-size: 1rem;
        transition: all 0.2s ease 0s;
    }

    & a.active {
        color: rgb(1, 135, 98);
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