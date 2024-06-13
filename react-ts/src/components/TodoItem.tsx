import React from 'react';
import classes from '../css/TodoItem.module.css';

// 💫 Misson! : 앞서 작성한 Todo 코드를 다시 컴포넌트화 하여 쪼개보자
const TodoItem: React.FC<{text: string; onRemoveTodo:() => void }> = (
    props
    ) => {
    return (
        <li className={classes.item} 
        onClick={props.onRemoveTodo}>
            {props.text}
        </li>
    );
};

export default TodoItem