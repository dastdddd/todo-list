import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/heared';
import List from './components/list';
import Submit from './components/submit';

const App = () => {
  let getList = JSON.parse(localStorage.getItem('todoListReact'))
  const [value, setValue] = useState('all');
  const [list, setList] = useState(getList || []);

  const addList = (form) => {
    const newForm = { ...form, id: Date.now(), completed: false }
    //newForm как обьект из-за form тип танных обьект
    const newList = [...list, newForm]
    setList(newList)
  }


  useEffect(() => {
    localStorage.setItem('todoListReact', JSON.stringify(list))
  }, [list])

  const changeCompleted = (id) => {
    const newList = list.map(item => item.id === id ? { ...item, completed: !item.completed, } : item);
    setList(newList)
  }

  const deleteListItem = (id) => {
    const newList = list.filter((item) => item.id !== id)
    setList(newList)
  }

  const notDoneTodos = list.filter(item => item.completed === false);
  const doneTodos = list.filter(item => item.completed === true);
  const newTodos = [...notDoneTodos, ...doneTodos]
  //list={newTodos} - даем через пропс так


  return (
    <div className='app-block'>
      <Header
        list={newTodos}
        value={value}
        setValue={setValue} />
      <Submit addList={addList} />
      <List
        value={value}
        list={newTodos}
        deleteListItem={deleteListItem}
        changeCompleted={changeCompleted}
      />
    </div>
  );
};

export default App;