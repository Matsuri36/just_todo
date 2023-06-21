import React from 'react';
import { useState } from 'react';
import TodoItem from './TodoItem';

const TodoContent = () => {
    const [isEditing, setIsEditing] = useState(true);
    const [text, setText] = useState([]);

    return (
        <div className='todo_content'>
            {text && 
                text.map((txt, index) => {
                    return (
                        <TodoItem editing={setIsEditing} setText={setText} text={text} />
                    )
                })
            }
        </div>
    );
};

export default TodoContent;