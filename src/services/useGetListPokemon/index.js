import { useState, useEffect } from 'react'
import { useFetch } from '../../customHook/useFetch'

const useIndex = () => {
  const [pokemonId, setPokemonId] = useState('')
  const [pokemons, setPokemons] = useState([])

  const { response, error, loading } = useFetch({
    url: '/pokemon?limit=100',
    method: 'GET',
    data: {},
  })

  useEffect(() => {
    const retreivedPokemons = response?.results.map((result) => {
      return { slug: result.name }
    })
    const getId = response?.results.map((result) => {
      return { id: result.name }
    })
    setPokemons(retreivedPokemons)
    setPokemonId(getId)
  }, [response])

  useEffect(() => {
    if (error) {
      console.log(error)
    }
  }, [error])

  return { response, error, loading, pokemons, pokemonId }
}

export default useIndex
