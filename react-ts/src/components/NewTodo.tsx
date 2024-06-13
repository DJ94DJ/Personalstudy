import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "../css/NewTodo.module.css"

const NewTodo: React.FC = () => {
    const todoCtx = useContext(TodosContext);

    //- 🔸 반환하는 값이 void라 해도 입력받는 값이 무엇인지 파악해야해한다. 🔸
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        //- 🔸 자동완성 막기. 🔸

        const enteredText = todoTextInputRef.current!.value;

        // const enteredText = todoTextInputRef.current?.value;
        // 💫 Misson! : 왜 ? 표가 붙을 까요? 
        // 이는 레퍼런스에 아직 값이 설정되지 않았을 수도 있기 때문에 붙여지는 것
        // 일단 값에 접근시도하고 가능하면 가지고오고 아니면 null을 반환하라는 것. 
        // 만약 확실하면 !을 붙이면 된다. 확실히 연결이 되었단 뜻.

        if (enteredText.trim().length === 0) {
            // 에러 전달하기
            return;
        }

        todoCtx.addTodo(enteredText);
        // props.onAddTodo(enteredText);
    };

    return (
    <form onSubmit={submitHandler} className={classes.form}>
        <label htmlFor='text'>Todo text</label>
        <input type='text' id='text' ref={todoTextInputRef}/>
        {/*- 🚫 ref={todoTextInputRef} 에러코드_why? : ref에 반영되는 데이터가 어떤 타입인지 정의해야한다.
        // ✨_Solution is: 위에서 useRef()을 정의할때 <>냐에 input 요소의 DOM타입인 HTMLInputElement을 입력한다. 만약 입력되는 요소가 Paragraph라면 타입은 HTMLParagraphElement인 셈. MDN 페이지에서 각 요소별의 타입을 확인 할 수 있다.

        하지만 이를 입력해도 기본값이 설정되야 오류가 사라진다! 그러니 괄호에 null을 넣어준다.
        
        //- 🔸 이게 바로 타입스크립트를 이용해 레퍼런스를 생성하고 요소와 연결하는 법이다!! 
        */}  
        <button>Add Todo</button>
    </form>
        );
};

export default NewTodo;