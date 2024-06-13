import Todos from './components/Todos';
// import Todo from './models/todo';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';

// import './App.css';


function App() {
/*
  const [todos, setTodos] = useState<Todo[]>([]);
// - 🚫 에러코드_why? : never 타입은 아무것도 들어갈 수 없다. never 타입은 아무것도 정해지지 않았을 때 설정된다.
// ✨_Solution is: 그래서 useState에 꺽쇠로 Todo 타입만 들어갈 수 있다고 정한다!
 const [todos, setTodos] = useState([]); 

  //보관코드 : 
  // const todos = [
  //   new Todo('Learn React'),
  //   new Todo('Learn TypeScript')
  // ]; 

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

  */


  return (
    <TodosContextProvider>
      {/* <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} /> */}
      {/*{['Learn React', 'Learn TypeScript']}*/

       /* 💫 Misson! : props를 Todos 내에서 설정하고 나면 안나던 오류가 나요.
       // ✨_Solution is: 해당 컴포넌트에서 설정한 아이템의 속성을 입력해서 해결해요!
       */}
       
      <NewTodo />
      <Todos />

    </TodosContextProvider>
  );
}

export default App;
