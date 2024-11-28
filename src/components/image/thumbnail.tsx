import React from 'react';

interface ThumbnailProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ src, alt, width = 100, height = 100 }) => {
    return (
        <img src={src} alt={alt} width={width} height={height} style={{ objectFit: 'cover' }} />
    );
};

export default Thumbnail;