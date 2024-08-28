/* eslint-disable react/prop-types */
import React from 'react';

const Container = ({children}) => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            {children}
        </div>
    );
};

export default Container;