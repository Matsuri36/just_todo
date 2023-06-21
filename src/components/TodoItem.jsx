import React from 'react';

const TodoItem = (editing, setText, text) => {
    const handleClick = () => {
        editing(true);
    };

    const handleChange = (e) => {
        setText([...text, e.target.value]);
    };

    const handleBlur = () => {
        editing(false);
    };

    return (
        <div>
            { editing ? (
                <input 
                    type="text"
                    placeholder="Нажмите чтобы редактировать заголовок" 
                    onChange={(e) => handleChange(e)}
                    onBlur={() => handleBlur()}
                />
            ) : (
                <span onClick={() => handleClick()}>{text}</span>
            )}
        </div>
    );
};

export default TodoItem;