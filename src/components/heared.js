import React from 'react';

const Header = (props) => {

  const { list, value, setValue } = props


  return (
    <div className='header'>
      <h1 >Пост лист:{list.length}</h1>
      <h3>число листов</h3>
      <select value={value} onChange={(e) => setValue(e.target.value)} name="" id="select">
        <option value="all">По умолчанию</option>
        <option value="done">Выполнено</option>
        <option value="not-done">Не выполнено</option>
      </select>
    </div>
  );
};

export default Header;