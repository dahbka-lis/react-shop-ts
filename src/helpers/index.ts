export const capitalize = (str: string): string => str[0].toUpperCase() + str.slice(1);

export const getSkeletonWidth = (): number => {
    if (window.innerWidth >= 944) {
        const maxWidth = 352;
        const minWidth = 280;
        const currentWidth = window.innerWidth / 3 - 64;

        if (maxWidth < currentWidth) return maxWidth;
        if (minWidth > currentWidth) return minWidth;
        return currentWidth;
    }
    if (window.innerWidth >= 632) {
        const maxWidth = 435.5;
        const minWidth = 280;
        const currentWidth = window.innerWidth / 2 - 10 - 32;

        if (maxWidth < currentWidth) return maxWidth;
        if (minWidth > currentWidth) return minWidth;
        return currentWidth;
    }
    return window.innerWidth - 40;
};
