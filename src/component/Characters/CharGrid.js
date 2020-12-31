import React from 'react';
import CharItems from './CharItems';
import Spinner from '../UI/Spinner';

const CharGrid = ({ items, isLoading }) => {
    return (
        isLoading ? (<Spinner />) : (
            <section className='cards'>
                {items.map((item) => (
                    <CharItems key={item.char_id} item={item}></CharItems>
                ))}
            </section>
        )
    );
}

export default CharGrid;