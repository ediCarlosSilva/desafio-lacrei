import styled from "styled-components";

export const StyledFooter = styled.footer`
    margin: 0px 4rem;
    border-top: 1px solid #B0E0D3;
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
        color: #1F1F1F;
        text-decoration: none;
        transition: all 0.2s ease 0s;
    }

    & nav a.active {
        font-weight: 700;
    }

    & nav a:hover {
        opacity: 0.7;
    }

    & p {
        font-size: 0.75rem;
        color: #515151;
        margin: 0;
    }

    @media (max-width: ${({ theme }) => theme.laptop}) {
        margin: 0px 2rem;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin: 0px 1rem;
        padding-top: 1rem;

        & nav {
            flex-direction: column;
            gap: 0.25rem;
        }

        & nav a {
            font-size: 0.875rem;
        }
    }
`