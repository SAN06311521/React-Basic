import React, { useEffect, useState } from 'react';
import './App.css';
import Header from '../src/component/UI/Header';
import CharGrid from '../src/component/Characters/CharGrid';
import Search from '../src/component/UI/Search';
import axios from 'axios';

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios (
          `https://www.breakingbadapi.com/api/characters?name=${query}`
        )

        console.log(result.data)
        setItems(result.data)
        setIsLoading(false)

    }

    fetchItems()

  }, [query])

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q) } />
      <CharGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
