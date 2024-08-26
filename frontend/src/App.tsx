import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import './App.css'
import CardList from './Components/CardList/CardList'
import Search from './Components/Search/Search'
import { searchCompanies } from './api'

function App() {

  const [search, SetSearch] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    SetSearch(e.target.value)
    console.log(e)
  }

  const onClickHandle = (e: SyntheticEvent) => {
    console.log(e)

  }
  console.log(searchCompanies('v3/search-name/', 'tsla', 10))
  return <React.Fragment>
    <Search onClick={onClickHandle} handleChange={handleChange} search={search} />
    <CardList />
  </React.Fragment>

}

export default App
