import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function ShelfPage() {
  const dispatch = useDispatch();

  const shelfItem = useSelector(store => store.ShelfReducer);
  useEffect(() => {
    dispatch({
      type: 'GET_SHELF'
    })
  }, []);
  
  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {shelfItem.map(item => {
        return (
          <ul key= {item.id}>
            <li> {item.description} </li>
            <img src={item.image_url} height= '100px' width= '100px' />
          </ul>
        );
      })}
    </div>
  );
} 

export default ShelfPage;
