import { FC, useContext } from 'react';
import styled from 'styled-components';
import { ThemeContextType } from '../@types/theme';
import { ThemeContext } from '../context/ThemeContext';
import { capitalize } from '../helpers';

// - - - - - - STYLED-COMPONENTS
const SwitchStyled = styled.label`
    display: inline-block;
    position: relative;

    border-radius: 50px;
    width: 48px;
    height: 24px;

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
// - - - - - - - - - - - - - - -

const SwitchButton: FC = () => {
    const { theme, switchTheme } = useContext(ThemeContext) as ThemeContextType;

    return (
        <>
            <SwitchStyled className={theme === 'dark' ? 'checked' : ''}>
                <input onChange={switchTheme} type="checkbox" />
                <div></div>
            </SwitchStyled>
            <span>{capitalize(theme)}</span>
        </>
    );
};

export default SwitchButton;
