import './App.css';
import { useCallback, useState } from 'react';
import TodoContainer from './components/TodoContainer'
import TodoTitleArea from './components/TodoTitleArea'
import { setItem,getItem } from './lib/storage';
import debounce from 'lodash.debounce';

const debounceSetItem = debounce(setItem,6000)

function App() {
  const [todos,setTodos] = useState(getItem('todo')||[])
  const [selectedTodoIndex,setSelectedTodoIndex] = useState(0);
   
  const setTodo = useCallback((newTodo) => { //새로적은 값으로 todos 를 교체 
    const newTodos  = [...todos]; // todos가 훼손되지 않도록 복사 새로운 newTodos 배열이 생긴것  
    newTodos[selectedTodoIndex] = newTodo  ;
    setTodos(newTodos);  
   debounceSetItem('todo',newTodos)
  //localStorage.setItem('todo',JSON.stringify(newTodos))
  },[selectedTodoIndex, todos])

  const addTodo = useCallback(() => {
    const newTodos = [
      ...todos,
      {
        title:'😊Untitled',
        content:''
      }
    ]
    setTodos(newTodos)
    setSelectedTodoIndex(todos.length);
    debounceSetItem('todo',newTodos)
    //localStorage.setItem('todo',JSON.stringify(newTodos))
  },[todos])

  const deleteTodo= useCallback((index) => {
      const newTodos = [...todos];
      newTodos.splice(index,1) // 인덱스부터 한 개 까지 삭제된 값
      setTodos(newTodos)
      if(index===selectedTodoIndex){
        setSelectedTodoIndex(0)
      }
      debounceSetItem('todo',newTodos)

    //localStorage.setItem('todo',JSON.stringify(newTodos))
  },[selectedTodoIndex, todos])

  return (
    <div className="App">
      <TodoTitleArea 
      todos={todos} 
      setSelectedTodoIndex={setSelectedTodoIndex}
      selectedTodoIndex={selectedTodoIndex}
      addTodo={addTodo} 
      deleteTodo = {deleteTodo}
      />
      <TodoContainer 
      todo={todos[selectedTodoIndex]} 
      setTodo={setTodo} 
      />
    </div>
  );
}

export default App;
