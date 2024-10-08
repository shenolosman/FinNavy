import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import CompanyPage from "../Pages/CompanyPage/CompanyPage"
import HomePage from "../Pages/HomePage/HomePage"
import SearchPage from "../Pages/SearchPage/SearchPage"
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile"
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement"
import DesignPage from "../Pages/DesignPage/DesignPage"
import BalanceSheet from "../Components/BalanceSheet/BalanceSheet"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <HomePage /> },
            {
                path: "company/:ticker", element: <CompanyPage />,
                children: [
                    { path: "company-profile", element: <CompanyProfile /> },
                    { path: "income-state", element: <IncomeStatement /> },
                    { path: "balance-sheet", element: <BalanceSheet /> },
                ]
            },
            { path: "search", element: <SearchPage /> },
            { path: "design", element: <DesignPage /> }
        ]
    }
]);