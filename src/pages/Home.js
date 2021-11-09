import React from 'react'
import Columned from 'react-columned'
import { CircularProgress } from '@mui/material'
import useGetListPokemon from '../services/useGetListPokemon'
import Card from '../components/Card'

function Home() {
  const { loading, pokemons } = useGetListPokemon()

  return (
    <div className="container">
      <div className="row center-align">
        {loading ? (
          <CircularProgress />
        ) : (
          <Columned column={4}>
            {pokemons &&
              pokemons.map((pokemon) => {
                return (
                  <div key={pokemon.slug} className="card-list">
                    <Card slug={pokemon.slug} pokemon={pokemon.slug} />
                  </div>
                )
              })}
          </Columned>
        )}
      </div>
    </div>
  )
}

export default Home
