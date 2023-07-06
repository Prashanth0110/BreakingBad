import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import DataFetching from './DataFetching'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    // const fetchItems = async () => {
    //   setIsLoading(true)
    //   const result = await axios(
    //     `https://www.breakingbadapi.com/api/characters?name=${query}`
    //   )

    //   console.log(result.data)

    //   setItems(result.data)
    //   setIsLoading(false)
    // }

    // fetchItems
    axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`).then(res=>{
      setIsLoading(true)
      console.log(res.data)
      setItems(res.data)
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err)
      setIsLoading(true)
  })
  }, [query])

  return (
    <div className='container'>
      {/* <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
      <Footer /> */}
      {/* for learning data fetching */}
      <DataFetching/>
    </div>
  )
}

export default App
