import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import _ from 'lodash'
import { useFetch } from '../customHook/useFetch'

function Card({ slug, pokemon }) {
  const [image, setImage] = useState('')
  const { response, error, loading } = useFetch({
    url: `/pokemon/${slug}`,
    method: 'GET',
    body: {},
  })

  useEffect(() => {
    if (response) {
      setImage(response.sprites.front_default)
    }
  }, [response])

  useEffect(() => {
    if (error) {
      console.log(error)
    }
  }, [error])

  return (
    <div className="card white">
      <h5 className="black-text">{_.startCase(pokemon)}</h5>
      <div className="card-image">
        {loading ? (
          <CircularProgress size="2rem" />
        ) : (
          <img
            className="detail-image"
            src={image}
            alt={pokemon}
            width="300px"
            height="300px"
          />
        )}
      </div>
      <Link
        className="waves-effect waves-light btn green"
        to={`/detail/${slug}`}
      >
        Detail
      </Link>
    </div>
  )
}

export default Card
