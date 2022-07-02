import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { Main } from '../components/globalStyled';

// - - - - - - STYLED-COMPONENTS
const LoaderInner = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const loaderAnimation = keyframes`
    0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;

const LoaderIcon = styled.div`
    display: inline-block;
    width: 4rem;
    height: 4rem;
    color: var(--alt);
    vertical-align: middle;
    pointer-events: none;

    border: 0.4em solid transparent;
    border-top-color: currentcolor;
    border-radius: 50%;
    animation: 0.7s ${loaderAnimation} ease-in-out infinite;
    position: relative;
    opacity: 0.5;

    &:before {
        content: '';
        display: block;
        width: inherit;
        height: inherit;
        position: absolute;
        top: -0.4em;
        left: -0.4em;
        border: 0.4em solid currentcolor;
        border-radius: 50%;
        opacity: 0.3;
    }
`;
// - - - - - - - - - - - - - - -

const LoaderPage: FC = () => {
    return (
        <Main>
            <LoaderInner>
                <LoaderIcon />
            </LoaderInner>
        </Main>
    );
};

export default LoaderPage;
