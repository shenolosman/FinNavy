/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { CompanySearch } from '../../company';
import { searchCompanies } from '../../api';
import Search from '../../Components/Search/Search';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';

const SearchPage = () => {
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
    return (
        <>
            <Search
                onSearchSubmit={onSearchSubmit}
                search={search}
                handleSearchChange={handleSearchChange}
            />
            <ListPortfolio
                portfolioValues={portfolioValues!}
                onPortfolioDelete={onPortfolioDelete}
            />
            <CardList
                searchResult={searchResult}
                onPortfolioCreate={onPortfolioCreate}
            />
            {serverError && <div>Unable to connect to API</div>}
        </>
    )
}

export default SearchPage