import React, { SyntheticEvent } from "react";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
import { Link } from "react-router-dom";

interface Props {
    searchResult: CompanySearch;
    onPortfolioCreate: (e: SyntheticEvent) => void;
};

const Card: React.FC<Props> = ({ searchResult, onPortfolioCreate }: Props): JSX.Element => {
    return (
        <div className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row">
            <Link to={`/company/${searchResult.symbol}`} className="text-black"> <h2 className="font-bold text-center text-black md:text-left">{searchResult.name} ({searchResult.symbol})</h2>
                <p>  {searchResult.currency}</p>
                <p className="font-bold text-black">
                    {searchResult.exchangeShortName} - {searchResult.stockExchange}
                </p>
            </Link>
            <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
        </div>
    );
};
export default Card;
