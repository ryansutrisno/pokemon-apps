import React from 'react'
import _ from 'lodash'

function Catch({ image, name, handleRelease }) {
  return (
    <div className="card white">
      <h5 className="black-text">{_.startCase(name)}</h5>
      <div className="card-image">
        <img
          className="detail-image"
          src={image}
          alt={name}
          width="300px"
          height="300px"
        />
      </div>
      <a onClick={handleRelease} className="waves-effect waves-light btn red">
        Release
      </a>
    </div>
  )
}

export default Catch
