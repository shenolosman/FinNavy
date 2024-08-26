import React, { SyntheticEvent } from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company'
import { v4 as uuidv4 } from 'uuid';

interface Props {
    searchResult: CompanySearch[];
    onPortfolioCreate: (e: SyntheticEvent) => void
}

const CardList: React.FC<Props> = ({ searchResult, onPortfolioCreate }: Props): JSX.Element => {
    return (
        <div>
            {searchResult.length > 0 ?
                (searchResult.map((result) => {
                    return <Card key={uuidv4()} searchResult={result} onPortfolioCreate={onPortfolioCreate} />
                }))
                : (<h4 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">No Results</h4>)}
        </div>
    )
}

export default CardList