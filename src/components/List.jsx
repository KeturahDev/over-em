import React from 'react';

const List = (props) => {
  const [listItems, setListItems] = React.useState([])


  return (
    <div>
      <h2>{props.titleName} List</h2>
      <input type="text" name={props.titleName}/>
      <ul>
        {listItems.map((item, key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default List;