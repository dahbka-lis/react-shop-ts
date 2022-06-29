import { FC, useContext, useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import { ThemeContextType } from '../../@types/theme';
import { ThemeContext } from '../../context/ThemeContext';
import { getSkeletonWidth } from '../../helpers/helpers';

const SkeletonList: FC = () => {
    const { theme } = useContext(ThemeContext) as ThemeContextType;
    const [contentWidth, setContentWidth] = useState(getSkeletonWidth());

    const bgColor = theme === 'dark' ? '#6b6b6b' : '#d8d8d8';
    const fgColor = theme === 'dark' ? '#555555' : '#bbbbbb';

    useEffect(() => {
        const resizeWindowHandler = () => {
            setContentWidth(getSkeletonWidth());
        };

        window.addEventListener('resize', resizeWindowHandler);

        return () => {
            window.removeEventListener('resize', resizeWindowHandler);
        };
    }, []);

    return (
        <>
            {[...new Array(6)].map((_, i) => (
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
                    <rect x="20" y="270" rx="15" ry="15" width={`${contentWidth - 150}`} height="26" />
                    <rect x={`${contentWidth - 80}`} y="270" rx="15" ry="15" width="60" height="26" />
                </ContentLoader>
            ))}
        </>
    );
};

export default SkeletonList;
