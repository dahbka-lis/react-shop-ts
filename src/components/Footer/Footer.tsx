import { FC } from 'react';
import styled from 'styled-components';

import { Container, MyLink } from '../globalStyled';
import SwitchButton from '../Buttons/SwitchThemeButton';

// - - - - - - STYLED-COMPONENTS
const FooterStyled = styled.footer`
    color: var(--alt);
    font-size: 0.75em;
    padding: 2em 0;

    position: relative;
    z-index: 10;
    flex: 0 0 auto;

    background-color: var(--primary);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

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
    margin-right: 1em;
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

const Footer: FC = () => {
    return (
        <FooterStyled>
            <Container>
                <FooterInner>
                    <RightsBlock>
                        <span>
                            Copyright © {new Date().getFullYear()} Test project by{' '}
                            <MyLink
                                href="https://github.com/DaXBka"
                                title="GitHub profile"
                                target="_blank"
                                rel="noreferrer"
                            >
                                DaXBka
                            </MyLink>
                            .
                        </span>
                    </RightsBlock>
                    <SwitchBlock>
                        <SwitchButton />
                    </SwitchBlock>
                </FooterInner>
            </Container>
        </FooterStyled>
    );
};

export default Footer;
