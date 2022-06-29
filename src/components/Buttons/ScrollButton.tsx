import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowIcon } from '../globalStyled';

const ScrollButtonStyled = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;

    position: fixed;
    bottom: 75px;
    right: 13px;
    z-index: 12;

    border: 3px solid var(--secondary);
    background-color: var(--primary-light);
    cursor: pointer;

    opacity: 0.7;
    transition: box-shadow 0.2s ease;

    &:hover {
        opacity: 0.9;
        box-shadow: 0 0 15px var(--secondary-light);
    }
`;

const ArrowIconTop = styled(ArrowIcon)`
    position: absolute;
    top: 68%;
    left: 53%;
    transform: translate(-50%, -50%) scale(1.5) rotate(90deg);

    &::after {
        border-color: var(--alt);
        border-radius: 2px;
    }

    &::before {
        background-color: var(--alt);
    }
`;

const ScrollButton: FC = () => {
    const [visible, setVisible] = useState(false);

    const changeVisible = () => {
        if (window.scrollY >= 300) setVisible(true);
        else setVisible(false);
    };

    const scrollToTop = (e: React.MouseEvent) => {
        e.stopPropagation();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', changeVisible);

        return () => {
            window.removeEventListener('scroll', changeVisible);
        };
    }, []);

    if (!visible) return <></>;

    return (
        <ScrollButtonStyled onClick={scrollToTop}>
            <ArrowIconTop />
        </ScrollButtonStyled>
    );
};

export default ScrollButton;
