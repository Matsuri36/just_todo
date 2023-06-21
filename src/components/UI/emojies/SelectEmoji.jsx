import React from 'react';
import GetEmojies from '../../../img/emojies/GetEmojies';
import cl from './SelectEmoji.module.css';

const SelectEmoji = ({visible, setVisible}) => {
    const modalCl = [cl.outOfModal];

    if (visible == true) {
        modalCl.push(cl.active);
    } else {
        modalCl.splice(1, 1);
    }
    

    return (
        <div className={modalCl.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.modal} >
                <GetEmojies visible={setVisible} />
            </div>
        </div>
    );
};

export default SelectEmoji;