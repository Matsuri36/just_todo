import React from 'react';
import SidebarButton from './UI/SidebarButton';
import { useState } from 'react';
import SelectEmoji from './UI/emojies/SelectEmoji';
import AddTodo from '../img/AddTodo';
import { TodoContext } from './TodoContext';
import TodoContent from './TodoContent';
import FirstScreen from './FirstScreen';

const ClosedSidebar = () => {
    const [todos, setTodos] = useState([]);
    const [modal, setModal] = useState(false);
    const [todosContent, setTodosContent] = useState({
        id: '',
        title: '',
        post1: ''
    });

    const addNewTodo = (emoji) => {
        if (todos) {
            setTodos([...todos, {id: todos.length, emoji: emoji, todoContent: {...todosContent}}]);
            setModal(false);
        } else {
            setTodos([{id: 0, emoji: emoji, todoContent: <TodoContent />}])
        }
    }

    const contentView = () => {
        return (
            <div>
                {todos ? (
                    <FirstScreen />
                ) : (
                    <div>{todos.todoContent}</div>
                )}
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='closedSidebar'>
                <TodoContext.Provider value={addNewTodo}>
                    <SidebarButton onClick={() => setModal(true)} className='sidebarIcons'>
                        <AddTodo />
                    </SidebarButton>
                    <SelectEmoji visible={modal} setVisible={setModal} />

                    {todos &&
                    todos.map(todo => {
                        return (
                            <SidebarButton onClick={() => todo.todoContent}>
                                {todo.emoji}
                            </SidebarButton>
                        )
                    })}

                </TodoContext.Provider>
            </div>
            {todos.length == 0 ? (
                <FirstScreen />
            ) : (
                <div>{todos.todoContent}</div>
            )}

        </div>
    );
};

export default ClosedSidebar;