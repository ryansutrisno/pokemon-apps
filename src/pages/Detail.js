import React, { useState, useContext } from 'react'
import _ from 'lodash'
import { useSnackbar } from 'notistack'
import { CircularProgress } from '@mui/material'
import useDetail from '../services/useDetail'
import { DetailContext } from '../context'

function Detail() {
  const { enqueueSnackbar } = useSnackbar()
  const { mypokemons, setMypokemons } = useContext(DetailContext)
  const { loading, id, image, pokemon, weight, abilities, moves, types } =
    useDetail()

  const handleCatch = () => {
    if(mypokemons?.some((val)=>val?.id === id)){
      enqueueSnackbar('Pokemon sudah dimiliki!', { variant: 'error' })
    }else {
      const newFav = [...mypokemons, {id, image, name: pokemon}]
      setMypokemons(newFav)
      localStorage.setItem('mypokemons', JSON.stringify(newFav))
      enqueueSnackbar('Pokemon berhasil ditangkap!', { variant: 'success' })
    }
  }

  return (
    <>
      <h5 className="title">Pokemon Detail</h5>
      <div className="container section col s6">
        <div className="card">
          {loading ? (
            <CircularProgress />
          ) : (
            <div className="card-image">
              <a
                onClick={handleCatch}
                className="btn-floating btn-large tooltipped halfway-fab waves-effect waves-light red pulse"
              >
                <i className="material-icons">camera</i>
                Catch
              </a>
              <img
                className="detail-image"
                src={image}
                alt={pokemon}
                width="300px"
                height="300px"
              />
            </div>
          )}
          <div className="card-content">
            <h4>
              <span className="card-title">Name : {_.startCase(pokemon)}</span>
            </h4>
            <h6>Weight : </h6>
            <p>{weight}</p>
            <h6>Abilities : </h6>
            <p>{abilities}</p>
            <h6>Types : </h6>
            <p>{types}</p>
            <h6>Moves : </h6>
            <p>{moves}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail
