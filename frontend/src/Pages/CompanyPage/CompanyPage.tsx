
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../Components/Sidebar/Sidebar';
import CompanyDashboard from '../../Components/CompanyDashboard/CompanyDashboard';
import Tile from '../../Components/Tlle/Tile';
import Spinner from '../../Components/Spinner/Sprinner';


const CompanyPage = () => {
    const { ticker } = useParams();
    const [company, setCompany] = useState<CompanyProfile>();

    const getProfileInit = async () => {
        const result = await getCompanyProfile(ticker!);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        setCompany(result)
    }

    useEffect(() => {
        getProfileInit();
    }, [])

    return (
        <>
            {company ? (
                <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
                    <Sidebar />
                    <CompanyDashboard ticker={ticker!}>
                        <Tile title="Company Name" subTitle={company.companyName} />
                        <Tile title="Price" subTitle={"$" + company.price.toString()} />
                        <Tile title="DCF" subTitle={"$" + company.dcf.toString()} />
                        <Tile title="Sector" subTitle={company.sector} />
                        {/* <CompFinder ticker={company.symbol} />
                        <TenKFinder ticker={company.symbol} /> */}
                        <p className="bg-white shadow rounded text-medium font-medium text-gray-900 p-3 mt-1 m-4">
                            {company.description}
                        </p>
                    </CompanyDashboard>
                </div>
            ) : (
                <Spinner />
            )}
        </>
    )
}

export default CompanyPage