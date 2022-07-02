import { FC, useState, useEffect, useRef, BaseSyntheticEvent } from 'react';
import styled from 'styled-components';
import { ArrowIcon } from '../globalStyled';

// - - - - - - STYLED-COMPONENTS
const ScrollButtonStyled = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;

    position: fixed;
    bottom: 76px;
    right: 17px;
    z-index: 12;

    background-color: var(--secondary);
    cursor: pointer;

    opacity: 0;
    box-shadow: 0 3px 15px #00000036;
    transition: box-shadow 0.2s ease, opacity 0.15s ease-in;

    &:hover {
        box-shadow: 0 0 15px var(--secondary-light);
    }

    &.show {
        opacity: 1;
    }
`;

const ArrowIconTop = styled(ArrowIcon)`
    position: absolute;
    top: 65%;
    left: 52%;
    transform: translate(-50%, -50%) scale(1.5) rotate(90deg);

    &::after {
        border-color: #fff;
        border-radius: 2px;
    }

    &::before {
        background-color: #fff;
    }
`;
// - - - - - - - - - - - - - - -

const ScrollButton: FC = () => {
    const [visible, setVisible] = useState(false);
    const btnRef = useRef<HTMLDivElement>(null);

    const changeVisible = () => {
        setVisible(window.scrollY >= 300);
    };

    const scrollToTop = (e: BaseSyntheticEvent) => {
        e.stopPropagation();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', changeVisible);

        return () => {
            window.removeEventListener('scroll', changeVisible);
        };
    }, []);

    useEffect(() => {
        if (btnRef.current) {
            const btnClasses = btnRef.current.classList;
            visible ? btnClasses.add('show') : btnClasses.remove('show');
        }
    }, [visible]);

    return (
        <ScrollButtonStyled ref={btnRef} onClick={scrollToTop}>
            <ArrowIconTop />
        </ScrollButtonStyled>
    );
};

export default ScrollButton;
