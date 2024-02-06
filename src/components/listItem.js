import React from 'react';

const ListItem = (props) => {
  const { index, listName, deleteListItem, id, changeCompleted, completed} = props


  return (
    <div className='list-item'>
      <div 
      className="list-item__name"
      id={completed ? 'opacity' : ''}
      style={{textDecoration: completed ? 'line-through' : 'none'}}>
        <span>{index + 1}) </span>
        <span>{listName}</span>
      </div>
      <div className="list-item__btn">
        <input onClick={()=>changeCompleted(id)} type="checkbox" checked={completed}/>
        <button onClick={()=>deleteListItem(id)} disabled={!completed}>Delete</button>
      </div>
    </div>
  );
};

export default ListItem;