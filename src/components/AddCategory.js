import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const  AddCategory = ( {setCategories} ) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = ( event ) => {
        setinputValue( event.target.value );
    }
    const handleSubmit= ( event ) => {
        event.preventDefault();

        if (inputValue.trim().length > 2){
            setCategories( categories => [ inputValue,...categories, ] );
            setinputValue('');
        }
    }

    return (
        <form onSubmit= { handleSubmit }>
            <input 
                type="text"
                value= { inputValue }
                placeholder="Search Gifs"
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
