import { Link } from "react-router-dom";
import styled from "styled-components";

export default function AuthPageLink({text, path}){
    return(
        <Link to={path}>
            <StyledLink>{text}</StyledLink>
        </Link>
    )
}

const StyledLink = styled.button`
    background-color: transparent;
    border-style: none;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 15px;
    color: #293B5F;
    line-height: 17px;
    text-align: center;
`;