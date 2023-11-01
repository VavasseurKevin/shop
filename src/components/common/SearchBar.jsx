import React from "react";
import { SearchOutlined } from '@ant-design/icons';

const SearchBar = () => {
    return (
        <>
            <div className="searchbar">
                <SearchOutlined className="searchbar-icon" />
                <input
                    className="search-input searchbar-input"
                    placeholder="Rechercher..."
                    type="text"
                >
                </input>
            </div>
        </>

    )
}

export default SearchBar;