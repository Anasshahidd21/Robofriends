import React, { Component } from 'react'

const SearchBox = ({SearchField, searchChange})=>{
    return (
        <div>
            <input 
             className="f6 b  mb2 pa3 ba b--green bg-lightest-blue"
              type="search" 
              placeholder="SEARCH ROBOS" 
              onChange = {searchChange}
              /> 
        </div>
    )
}

export default SearchBox
