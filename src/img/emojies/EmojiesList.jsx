import React from 'react';
import { TodoContext } from '../../components/TodoContext';
import EmojiModalBtn from '../../components/UI/emojies/EmojiModalBtn';
import SvgBracesAsterisk from './SvgBracesAsterisk';
import SvgBriefcaseFill from './SvgBriefcaseFill';
import SvgBugFill from './SvgBugFill';
import SvgCalendarCheckFill from './SvgCalendarCheckFill';
import SvgChatLeftTextFill from './SvgChatLeftTextFill'
import SvgDatabaseFillGear from './SvgDatabaseFillGear';

function EmojiList() {
    const addTodo = React.useContext(TodoContext);

    const emojies = [
        <SvgBracesAsterisk key={1} />, 
        <SvgBriefcaseFill key={2} />, 
        <SvgBugFill key={3} />, 
        <SvgCalendarCheckFill key={4} />, 
        <SvgChatLeftTextFill key={5} />, 
        <SvgDatabaseFillGear key={6} />
    ];

    const buttonEmojies = emojies.map(emoji => {
        return(
            <EmojiModalBtn onClick={() => addTodo(emoji)}>
                {emoji}
            </EmojiModalBtn>
        )
    })

    return buttonEmojies;
}

export default EmojiList;