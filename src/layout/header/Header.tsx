import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #156bff;
    display: flex;
    justify-content: space-between;
`