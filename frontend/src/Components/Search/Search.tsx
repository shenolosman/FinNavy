/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, SyntheticEvent } from 'react'

interface Props {
    search: string | undefined,
    onSearchSubmit: (e: SyntheticEvent) => void
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<Props> = ({ search, onSearchSubmit, handleSearchChange }: Props): JSX.Element => {
    return (
        <form onSubmit={onSearchSubmit}>
            <input value={search} onChange={handleSearchChange} />
            {/* <button onClick={(e) => onSearchSubmit(e)}>Search</button> */}
        </form>
    )
}

export default Search