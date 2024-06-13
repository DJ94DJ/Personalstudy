class Todo {
    id: string;
    text: string;

    //- 🔸 값 할당을 위해 constructor를 기입해야 한다! 🔸
    constructor(todoText: string) {
        this.text = todoText;
        this.id = new Date().toISOString();
        //- 🔸 날짜를 받아와서 아이디로 활용한다.
    }
}

export default Todo;
// 🟠 이걸 App.tsx에서 쓴다!