import React from 'react';
import ListItem from './listItem';

const List = ({ list, deleteListItem, changeCompleted, value}) => {
  
  //const notDoneTodos = list.filter(item => item.completed === false);
  //const doneTodos = list.filter(item => item.completed === true);
  //const newTodos = [...notDoneTodos, ...doneTodos]

  return (
    <div className='list-column'>
      {
        list && list.filter(item => {
          if(value === 'all') {
            return true
          } else if(value ==='done') {
            return item.completed
          } else if(value ==='not-done') {
            return !item.completed
          }
        }).map((item, index) => (
          <ListItem index={index} {...item} key={item.id} 
            deleteListItem={deleteListItem}
            changeCompleted={changeCompleted}/>
        ))
      }
    </div>
  );
};

export default List;