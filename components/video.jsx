
import video from 'next/image';
import React from 'react';

const As = () => {
    return (
        <div>
            <video autoPlay loop muted playsInline >
                <source src="/video/3d-video.mp4" type="video/mp4"       />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default As; 
