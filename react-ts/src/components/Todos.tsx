/* 💝 본 섹션의 개요 :
객체인 props에 아이템이나 투두의 프로퍼티를 받아 각 항목을 매핑하여 
목록 항목으로 넣어 작성하자
*/

//function Todos(props: { items: string[], children }) {
    //- 🔸 {} : props에 객체=(object) 타입을 지정한다.
    // (props: { items: string[], children })
    // 💫 Misson! : 하지만 이렇게 하면 후에 children 요소의 속성을 추측하기가 어려운데..
    // ✨_Solution is: 여기서 제네릭 타입을 쓰면 된다!
    /* 코드작성 예
    ▻──────────────────────────────────────◄⫷
    return <ul>
        <li>Learn React</li>
        <li>Learn TypeScript</li>
    </ul>
    ▻──────────────────────────────────────◄⫷ */

// 이번에는 화살표 방식의 함수 작성법으로 진행한다.
import React, {useContext} from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from "../css/Todos.module.css"

const Todos: React.FC = () => {
        const todosCtx = useContext(TodosContext);

        //<{items: /*string*/ Todo[]; onRemoveTodo: (id: string) => void }>
//- 🔸 Todo의 타입 = React.FC 이다! (공식문서피셜) command나 컨트롤 키를 누르고 FC 부분을 누르면 타입의 정보 확인이 가능하다. (다시 누르면 원래 자리로 돌아감.) * 참고로 FC는 이미 제너릭 타입으로 정의된 상태다. 그러나 '<{}>'를 입력하면 안에 있던 기능을 꺼내서 프로퍼티 재정의가 가능하다. 
//- 🔸 여기서 초반에 items는 문자열 배열([])로 정의되었음을 미리 알려주고 있다. 그러나 model에서 받아오면 todo는 문자열이 아닌 Todo라는 배열이라는 것으로 알려줘야 한다. 
    return(
    <ul className={classes.todos}>
        {todosCtx.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        //- 🔸  Todo의 배열 값(id, text)을 선택해서 받아올 수 있다.
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
        ))}
    </ul>
    );
};

export default Todos;