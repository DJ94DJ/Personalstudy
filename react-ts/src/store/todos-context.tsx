import React, { useState } from "react"
import Todo from "../models/todo";

type TodoContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

type TodosContextProviderProps = {
    children?: React.ReactNode; // `children`을 optional로 처리하거나,
    // children: React.ReactNode; // 필수로 처리할 수 있습니다.
};

export const TodosContext = React.createContext<TodoContextObj>({
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {}
});

const TodosContextProvider: React.FC<TodosContextProviderProps> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);
    /*- 🚫 에러코드_why? : never 타입은 아무것도 들어갈 수 없다. never 타입은 아무것도 정해지지 않았을 때 설정된다.
    // ✨_Solution is: 그래서 useState에 꺽쇠로 Todo 타입만 들어갈 수 있다고 정한다!
     const [todos, setTodos] = useState([]); */
    
    /* 보관코드 : 
      // const todos = [
      //   new Todo('Learn React'),
      //   new Todo('Learn TypeScript')
      // ]; */
    
      const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);
    
        setTodos((prevTodos) => {
          return prevTodos.concat(newTodo);
        });
        //- 🔸 스테이트를 업데이트 하려면 함수형으로 작성해야한다. 여기서 Concat 메서드를 이용하면 기존 배열은 그대로 두고 새로운 배열에 기존 배열을 추가해서 새로운 배열을 반환한다. 따라서 여기선 이전의 prevtodo를 받아서 거기에 concat으로 추가하는 것을 볼수 있다. 
      };
    
      const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
          return prevTodos.filter(todo => todo.id !== todoId);
        });
      };

      const contextValue: TodoContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
      }


    return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}

export default TodosContextProvider;