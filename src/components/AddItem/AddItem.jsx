import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function AddItem () {

    const dispatch = useDispatch();
    const [newItem, setNewItem] = useState('');
    

    //Need dispatch to POST saga

    const addMovieData = () => {
        event.preventDefault();
        const newItem =
        {
            description: description
            image_url
        }
        dispatch({ type: 'ADD_MOVIE', payload: newMovie })
        setDescription('')
        setTitle('')
        setURL('')
        history.push('/')
    }
    //Form to add items to itemsDB
    return (
      <section>
        <form>
          <input
            type="text"
            value={newItem}
            placeholder="Add Item"
            onChange={(evt) => setNewItem(evt.target.value)}
            required
          />
        </form>
      </section>
    );
}