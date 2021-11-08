import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import _ from 'lodash'
import { useFetch } from '../../customHook/useFetch'

const useIndex = () => {
  const { pokemonSlug } = useParams()
  const history = useHistory()
  const [id, setId] = useState('')
  const [image, setImage] = useState('')
  const [pokemon, setPokemon] = useState('')
  const [weight, setWeight] = useState('')
  const [abilities, setAbilities] = useState('')
  const [moves, setMoves] = useState('')
  const [types, setTypes] = useState('')

  const { response, error, loading } = useFetch({
    url: `/pokemon/${pokemonSlug}`,
    method: 'GET',
    data: {},
  })

  useEffect(() => {
    if (response) {
      setId(response?.id)
      setImage(response?.sprites?.other?.dream_world?.front_default)
      setPokemon(response?.name)
      setWeight(response?.weight)
      response?.abilities.forEach((val, i) => {
        if (i > 0) {
          setAbilities((ability) => ability + ', ')
        }
        setAbilities((ability) => ability + _.startCase(val.ability.name))
      })
      response?.moves.forEach((val, i) => {
        if (i > 0) {
          setMoves((move) => move + ', ')
        }
        setMoves((move) => move + _.startCase(val.move.name))
      })
      response?.types.forEach((val, i) => {
        if (i > 0) {
          setTypes((type) => type + ', ')
        }
        setTypes((type) => type + _.startCase(val.type.name))
      })
    }
  }, [response])

  useEffect(() => {
    if (error && error?.status === 404) {
      console.log(error)
      history.push('/')
    }
  }, [error])

  return {
    response,
    error,
    loading,
    image,
    pokemon,
    weight,
    abilities,
    moves,
    types,
    id,
  }
}

export default useIndex
