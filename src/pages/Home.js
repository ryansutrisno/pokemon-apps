import React from 'react'
import Columned from 'react-columned'
import { CircularProgress } from '@mui/material'
import useGetListPokemon from '../services/useGetListPokemon'
import Card from '../components/Card'
import Search from "../components/Search"

function Home() {
  const { loading, pokemons } = useGetListPokemon()
  const [search, setSearch] = React.useState("")
  const filterPokemons = pokemons?.filter((val)=>val.slug?.toLowerCase()?.includes(search.toLowerCase()))

  return (
    <div className="container">
      <div className="row center-align">
      <Search value={search} onChange={(e)=>setSearch(e.target.value)}/>
        {loading ? (
          <CircularProgress />
        ) : (
          <Columned column={4}>
            {filterPokemons?.map((pokemon) => {
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
