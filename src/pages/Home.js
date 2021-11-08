import React from 'react'
import Columned from 'react-columned'
import useGetListPokemon from '../services/useGetListPokemon'
import Card from '../components/Card'

function Home() {
  const { pokemons } = useGetListPokemon()

  return (
    <div className="container">
      <div className="row center-align">
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
      </div>
    </div>
  )
}

export default Home
