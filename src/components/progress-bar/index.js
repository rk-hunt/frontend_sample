import React from 'react';
const ProgressBar = (props) => {
    return (
        <div
            style={{
                position: 'fixed',
                top: '0',
                height: '5px',
                width: '100%',
                background:
                    'linear-gradient(90deg, rgba(13, 1, 205, 1) 0%, rgba(32, 100, 245, 1) 35%, rgba(0, 212, 255, 1) 100%)'
            }}
        />
    );
};
export default ProgressBar;
