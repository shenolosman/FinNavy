import React from "react";
import "./Card.css"

interface Props {
    imgUrl: string;
    companyName: string;
    ticker: string;
    price: number;
};

const Card: React.FC<Props> = ({ imgUrl, companyName, ticker, price }: Props) :JSX.Element => {
    return (
        <div className="card">
            <img src={imgUrl} alt={companyName} />
            <div className="details">
                <h2>{companyName}</h2>
                <p>${price}</p>
            </div>
            <p className="info">
                {ticker}
            </p>
        </div>
    );
};
export default Card;
