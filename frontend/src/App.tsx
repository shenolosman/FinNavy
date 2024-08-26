/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import './App.css'
import CardList from './Components/CardList/CardList'
import Search from './Components/Search/Search'
import { searchCompanies } from './api'
import { CompanySearch } from './company'
import ListPortfolio from './Components/Portfolio/ListPortfolio/ListPortfolio'
import Navbar from './Components/Navbar/Navbar'
// import Hero from './Components/Hero/Hero'

function App() {

  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string | null>(null);
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

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

  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const ifExist = portfolioValues.find(x => x === e.target[0].value);
    if (ifExist) return
    const updatedPortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatedPortfolio);
  }

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const removed = portfolioValues.filter((value) => {
      return value !== e.target[0].value
    })
    setPortfolioValues(removed)
  }

  return <React.Fragment>
    <Navbar/>
    {/* <Hero/> */}
    <Search onSearchSubmit={onSearchSubmit} handleSearchChange={handleSearchChange} search={search} />
    {serverError && <h1>{serverError}</h1>}
    <ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete} />
    <CardList searchResult={searchResult} onPortfolioCreate={onPortfolioCreate} />
  </React.Fragment>

}

export default App
