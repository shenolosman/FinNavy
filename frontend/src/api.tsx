import axios from "axios"
import { CompanySearch } from "./company";
const baseUrl = "https://financial-modeling-prep.p.rapidapi.com/";

interface SearchResponse {
    data: CompanySearch[]
}

export const searchCompanies = async (query: string) => {
    try {
        const options = {
            method: 'GET',
            url: baseUrl + 'v3/search-name/',
            params: { query: query, limit: 10, exchange: "NASDAQ" },
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_APP_API_KEY,
                'x-rapidapi-host': import.meta.env.VITE_APP_API_KEY_URL
            }
        };

        const response = await axios.request<SearchResponse>(options);
        return response;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error(`There is error: ${error.message}`)
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An expected error has occurred!";
        }
    }
}

