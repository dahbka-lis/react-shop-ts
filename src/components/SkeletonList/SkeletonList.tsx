import { useContext, useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import { ThemeContextType } from '../../@types/theme';
import { ThemeContext } from '../../context/ThemeContext';

const SkeletonList = () => {
    const { theme } = useContext(ThemeContext) as ThemeContextType;
    const [contentWidth, setContentWidth] = useState((window.innerWidth >= 540 ? 540 : window.innerWidth) - 50);

    const bgColor = theme === 'dark' ? '#6b6b6b' : '#d8d8d8';
    const fgColor = theme === 'dark' ? '#555555' : '#bbbbbb';

    useEffect(() => {
        const resizeWindowHandler = () => {
            setContentWidth((window.innerWidth >= 540 ? 540 : window.innerWidth) - 50);
        };

        window.addEventListener('resize', resizeWindowHandler);

        return () => {
            window.removeEventListener('resize', resizeWindowHandler);
        };
    }, []);

    return (
        <>
            {[...new Array(4)].map((_, i) => (
                <ContentLoader
                    key={i}
                    speed={1}
                    width={contentWidth}
                    height={390}
                    viewBox={`0 0 ${contentWidth} 390`}
                    backgroundColor={bgColor}
                    foregroundColor={fgColor}
                >
                    <rect x="0" y="0" rx="10" ry="10" width="100%" height="250" />
                    <rect x="20" y="270" rx="20" ry="20" width={`${contentWidth - 170}`} height="36" />
                    <rect x={`${contentWidth - 100}`} y="270" rx="20" ry="20" width="80" height="36" />
                </ContentLoader>
            ))}
        </>
    );
};

export default SkeletonList;
