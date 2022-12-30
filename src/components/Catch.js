import React from 'react'
import _ from 'lodash'

function Catch({ image, name, handleRelease }) {
  return (
    <div style={{ borderRadius: '10px' }} className="card white">
      <h5 className="black-text">{_.startCase(name)}</h5>
      <div className="card-image">
        <img
          className="detail-image"
          src={image}
          alt={name}
          width="150px"
          height="150px"
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        <a onClick={handleRelease} className="waves-effect waves-light btn red">
          Release
        </a>
      </div>
    </div>
  )
}

export default Catch
