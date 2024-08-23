/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'

type Props = {}

const Search: React.FC<Props> = (props: Props): JSX.Element => {
    const [search, SetSearch] = useState<string>("");

    const onClick = (e: any) => {
        e.preventDefault()
        SetSearch(e.target.value)
        console.log(e)
    }
    return (
        <div>
            <input value={search} onChange={(e) => onClick(e)} />
        </div>
    )
}

export default Search