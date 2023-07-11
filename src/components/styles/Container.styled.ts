import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 4rem 4rem 0px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-items: flex-start;

    & > div {
        max-width: 540px;
    }

    & div h2 {
        font-size: 3rem;
    }

    & div p {
        line-height: 2rem;
        margin-top: 2rem;
        padding-left: 1rem;
        border-left: 5px solid rgb(1, 135, 98);
        font-size: 1.5rem;
        color: rgb(81, 81, 81);
    }

    & div .description {
        padding-left: 0px;
        border-left: none;
    }

    & div .button-container {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        padding-top: 3rem;
        max-width: 453px;
    }

    & div .button-container .user-btn {
        padding: 0.75rem 2rem;
        background-color: rgb(1, 135, 98);
        color: rgb(255, 255, 255);
    }

    & div .button-container .pro-btn {
        padding: 0.625rem 2.75rem;
        color: rgb(1, 135, 98);
        background-color: rgb(255, 255, 255);
        border: 2px solid rgb(1, 135, 98);
    }

    & div .button-container .user-btn, & div .button-container .pro-btn {
        text-decoration: none;
        font-size: 1.125rem;
        font-weight: 700;
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
        transition: all 0.2s ease 0s;
    }

    & div img {
        width: 100%;
    }

    @media (max-width: ${({ theme}) => theme.laptop}) {
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        padding: 2rem 2rem 0px;

        & div h2 {
            font-size: 2rem;
        }

        & div p {
            line-height: 1.5rem;
            margin-top: 1rem;
            font-size: 1rem;
        }
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        padding: 1rem 1rem 0px;

        & div h2 {
            font-size: 1.5rem;
        }

        & div p {
            line-height: 1.25rem;
            margin-top: 0.875rem;
            font-size: 0.875rem;
        }
    }
`