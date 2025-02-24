import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div class="searchbox d-flex justify-content-center">
            <input class="text-center form-control w-50 m-3 p-2 rounded-pill shadow-sm"
            type="text"
            onChange={searchChange}>
            </input>
        </div>
    )
}

export default SearchBox;