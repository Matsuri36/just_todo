import React from 'react';
import cl from './SelectEmoji.module.css';

const EmojiModalBtn = (props) => {
    return (
        <button className={cl.modalBtn} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default EmojiModalBtn;