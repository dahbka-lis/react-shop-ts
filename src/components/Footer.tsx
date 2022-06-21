import { FC } from 'react';
import styled from 'styled-components';
import { Container, FooterToBottom } from './globalStyled';
import SwitchButton from './SwitchButton';

// - - - - - - STYLED-COMPONENTS

const FooterOuter = styled.div`
    background-color: var(--primary);
    padding: 1.75em 0;
    font-size: 12px;
    color: var(--alt);

    @media (max-width: 768px) {
        padding: 1em 0;
    }
`;

const FooterInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RightsBlock = styled.div`
    opacity: 1;
    margin-right: 1em;

    a {
        color: var(--secondary);
        text-decoration: none;

        &:hover {
            color: var(--secondary-light);
            text-decoration: underline;
        }
    }
`;

const SwitchBlock = styled.div`
    display: flex;
    align-items: center;

    gap: 1em;

    @media (max-width: 786px) {
        flex-direction: column;
        justify-content: center;
        gap: 0.25em;
    }
`;

// - - - - - - - - - - - - - - -

interface IFooterProps {}

const Footer: FC<IFooterProps> = () => {
    return (
        <FooterToBottom>
            <FooterOuter>
                <Container>
                    <FooterInner>
                        <RightsBlock>
                            <span>
                                Copyright © {new Date().getFullYear()} Test project by{' '}
                                <a
                                    href="https://github.com/DaXBka"
                                    title="GitHub profile"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    DaXBka
                                </a>
                                .
                            </span>
                        </RightsBlock>
                        <SwitchBlock>
                            Theme: <SwitchButton />
                        </SwitchBlock>
                    </FooterInner>
                </Container>
            </FooterOuter>
        </FooterToBottom>
    );
};

export default Footer;
