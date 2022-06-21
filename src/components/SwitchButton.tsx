import { FC, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

const SwitchStyled = styled.label`
    display: inline-block;
    position: relative;

    border-radius: 50px;
    height: 24px;
    width: 48px;

    background-color: rgb(73, 73, 73);
    border: 1px solid rgb(73, 73, 73);

    transition: background-color 0.2s ease;
    user-select: none;

    input {
        display: none;
    }

    div {
        border-radius: 9999px;
        width: 22px;
        height: 22px;

        position: absolute;
        left: 1px;
        top: calc(50% - 11px);

        background-color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.3);

        transition: left 0.2s ease;
    }

    &.checked {
        background-color: var(--secondary);
        border: 1px solid var(--secondary);

        div {
            left: 23px;
        }
    }
`;

interface ISwitchButtonProps {}

const SwitchButton: FC<ISwitchButtonProps> = () => {
    const theme = useContext(ThemeContext);

    const changeTheme = () => theme?.setIsDarkTheme(!theme.isDarkTheme);

    return (
        <SwitchStyled className={theme?.isDarkTheme ? 'checked' : ''}>
            <input onChange={changeTheme} type="checkbox" />
            <div></div>
        </SwitchStyled>
    );
};

export default SwitchButton;
