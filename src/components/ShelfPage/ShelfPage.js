import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

function ShelfPage() {
  const dispatch = useDispatch();
  const [description, setDescription]= useState('The Description Goes Here');
  const [image, setImage]= useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [itemDetails, setItemDetails] = useState ('');
  const [editItemId, setEditItemId] = useState('');
  const shelfItem = useSelector(store => store.ShelfReducer);
  
  useEffect(() => {
    dispatch({
      type: 'GET_SHELF'
    })
  }, []);
  
  const handleDelete = (deleteItem) => {
    dispatch({ type: 'DELETE_ITEM', payload: deleteItem })
  }

  const isVisibleToggle = () => {
    setIsVisible(!isVisible);
  }

  
  const handleEdit = (itemDetails) => {
    isVisibleToggle();
    setDescription(itemDetails.description);
    setImage(itemDetails.image_url);
    setEditItemId(itemDetails.id);
     //Need a GET?
  }

  const handleSave = () => {
    setItemDetails({
      description: description,
      image_url: image,
      id: editItemId
    })
    dispatch({ type: 'EDIT_ITEM', payload: itemDetails })
    // isVisibleToggle();
  }

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      {shelfItem.map(item => {
        return (
          <ul key= {item.id}>
            <li> {item.description} </li>
            <img src={item.image_url} height= '100px' width= '100px' />
            <button onClick={ () => handleDelete(item.id)}>Delete</button>
            <button onClick={ () => handleEdit(item)}>Edit</button>

          </ul>
        );
      })}
      { isVisible && 
        <>
          <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
          <input type="text" value={image} onChange={(event) => setImage(event.target.value)} />
          <button type="button" onClick={ () => handleSave()}>Save Changes</button>
        </>}
    </div>
  );
}

export default ShelfPage;

{/* <button type='submit' onClick={() => addNewItem()}>Add Item</button> */}

//  toggle to show or hide photo description
//  const toggleDescription = () =>{
//   console.log('Displaying photo description', description);
//   set state of description
//   setDescription(!description);
// }


// /  return(
//   <div>
//   <section className='photoGallery'>
//       { !description ?
//               <p onClick={() => toggleDescription()}>{props.description}</p> :
//               <img src={`${props.path}`} onClick={() => toggleDescription()} ></img>
//           }
  
//       <br></br>
//       <button id='likeBtn' onClick= {() => likeHandler(props.id)}>Like!</button>
//       <p> Likes: {likesCount} </p>
//   </section>
//   </div>
// )
// }

