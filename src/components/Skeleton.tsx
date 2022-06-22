import React, { useContext } from 'react';
import ContentLoader from 'react-content-loader';
import { ThemeContext } from '../context/ThemeContext';

const Skeleton = () => {
    const theme = useContext(ThemeContext);

    if (window.innerWidth <= 768) {
        return (
            <ContentLoader
                speed={1.7}
                width={315}
                height={397}
                viewBox="0 0 315 397"
                backgroundColor={theme?.isDarkTheme ? '#6b6b6b' : '#f3f3f3'}
                foregroundColor={theme?.isDarkTheme ? '#555555' : '#e4e4e4'}
            >
                <rect x="-2" y="1" rx="10" ry="10" width="315" height="200" />
                <rect x="23" y="227" rx="10" ry="10" width="267" height="46" />
                <rect x="23" y="315" rx="10" ry="10" width="61" height="26" />
                <rect x="173" y="311" rx="20" ry="20" width="119" height="36" />
            </ContentLoader>
        );
    }

    return (
        <ContentLoader
            speed={1.7}
            width={490}
            height={372}
            viewBox="0 0 490 372"
            backgroundColor={theme?.isDarkTheme ? '#6b6b6b' : '#f3f3f3'}
            foregroundColor={theme?.isDarkTheme ? '#555555' : '#e4e4e4'}
        >
            <rect x="0" y="2" rx="10" ry="10" width="490" height="207" />
            <rect x="24" y="238" rx="10" ry="10" width="442" height="28" />
            <rect x="25" y="310" rx="10" ry="10" width="61" height="26" />
            <rect x="347" y="305" rx="20" ry="20" width="119" height="36" />
        </ContentLoader>
    );
};

export default Skeleton;
