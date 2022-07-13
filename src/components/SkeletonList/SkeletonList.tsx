import { FC, useEffect, useState } from 'react';

import ContentLoader from 'react-content-loader';

import { getSkeletonWidth } from '../../helpers/helpers';
import { useAppTheme } from '../../hooks/useAppTheme';

const SkeletonList: FC = () => {
    const [theme] = useAppTheme();
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
                    <rect x="20" y="272" rx="15" ry="15" width={`${contentWidth - 160}`} height="26" />
                    <rect x={`${contentWidth - 110}`} y="265" rx="22" ry="22" width="90" height="40" />
                </ContentLoader>
            ))}
        </>
    );
};

export default SkeletonList;
