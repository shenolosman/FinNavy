import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import './App.css'
import CardList from './Components/CardList/CardList'
import Search from './Components/Search/Search'
import { searchCompanies } from './api'
import { CompanySearch } from './company'

function App() {

  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  const onSearchSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError(result)
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data)
    }
  }

  const onPortfolioCreate = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(e)
  }

  return <React.Fragment>
    <Search onSearchSubmit={onSearchSubmit} handleSearchChange={handleSearchChange} search={search} />
    {serverError && <h1>{serverError}</h1>}
    <CardList searchResult={searchResult} onPortfolioCreate={onPortfolioCreate} />
  </React.Fragment>

}

export default App
