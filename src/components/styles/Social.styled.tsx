import styled from "styled-components";

export const StyledSocialIcons = styled.div`
    display: flex;
    gap: 2rem;

    li {
        list-style: none;
    }

    a {
        border: 1px solid #fff;
        border-radius: 50%;
        color: #018762;
        display: inline-flex;
        align-items: center;
        height: 40px;
        width: 40px;
        text-decoration: none;
    }

    a:hover {
        opacity: 0.7;
    }
`