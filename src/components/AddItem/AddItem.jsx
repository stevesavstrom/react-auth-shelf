import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function AddItem () {

    const dispatch = useDispatch();
    const [newDescription, setNewDescription] = useState('');
    const [newImage, setNewImage] = useState("");

    const addNewItem = () => {
      event.preventDefault();
      const newItem = {
        description: newDescription,
        image_url: newImage,
      };
      //Need dispatch to POST saga
      dispatch({ type: "ADD_ITEM", payload: newItem });
    }
    //Form to add items to itemsDB
    return (
      <section>
        <form action="submit">
          <input
            type="text"
            value={newItem}
            placeholder="Item Description"
            onChange={(evt) => setNewDescription(evt.target.value)}
            required/>
          <input
            type="text"
            value={newImage}
            placeholder="Image URL"
                    onChange={(evt) => setNewImage(evt.target.value)}
            required />
        </form>
            <button type='submit' onClick={() => addNewItem()}>Add Item</button>
      </section>
    );
}