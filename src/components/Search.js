/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

const Search = ({value, onChange}) => {
  return (
    <>
      <form>
        <div className="input-field">
          <input placeholder='Search..' id="search" type="search" value={value} onChange={onChange} required />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </>
  )
}

export default Search
