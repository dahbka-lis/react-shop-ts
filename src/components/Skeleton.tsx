import { useContext } from 'react';
import ContentLoader from 'react-content-loader';
import { ThemeContextType } from '../@types/theme';
import { ThemeContext } from '../context/ThemeContext';

const Skeleton = () => {
    const { theme } = useContext(ThemeContext) as ThemeContextType;
    const isDarkTheme = theme === 'dark';

    if (window.innerWidth <= 540) {
        return (
            <ContentLoader
                speed={1.7}
                width={280}
                height={340}
                viewBox="0 0 280 340"
                backgroundColor={isDarkTheme ? '#6b6b6b' : '#f3f3f3'}
                foregroundColor={isDarkTheme ? '#555555' : '#e4e4e4'}
            >
                <rect x="0" y="0" rx="10" ry="10" width="270" height="200" />
                <rect x="20" y="225" rx="10" ry="10" width="71" height="26" />
                <rect x="145" y="220" rx="20" ry="20" width="115" height="36" />
            </ContentLoader>
        );
    }

    return (
        <ContentLoader
            speed={1.7}
            width={490}
            height={340}
            viewBox="0 0 490 340"
            backgroundColor={isDarkTheme ? '#6b6b6b' : '#f3f3f3'}
            foregroundColor={isDarkTheme ? '#555555' : '#e4e4e4'}
        >
            <rect x="0" y="0" rx="10" ry="10" width="490" height="200" />
            <rect x="20" y="225" rx="10" ry="10" width="71" height="26" />
            <rect x="355" y="220" rx="20" ry="20" width="115" height="36" />
        </ContentLoader>
    );
};

export default Skeleton;
