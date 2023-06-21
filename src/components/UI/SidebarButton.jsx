import React from 'react';

const SidebarButton = (props) => {
    return (
        <button className='sidebarBtn' onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default SidebarButton;