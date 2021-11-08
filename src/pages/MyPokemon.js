import React, { useContext, useEffect } from 'react'
import { useSnackbar } from 'notistack'
import Columned from 'react-columned'
import Catch from '../components/Catch'
import { DetailContext } from '../context'

function MyPokemon() {
  const { enqueueSnackbar } = useSnackbar()
  const { mypokemons, setMypokemons } = useContext(DetailContext)

  useEffect(() => {
    JSON.parse(localStorage.getItem('mypokemons'))
  }, [mypokemons])

  const handleRelease = () => {
    const index = mypokemons.findIndex((pokemon) => pokemon === pokemon.id)
    mypokemons.splice(index, 1)
    const result = [...mypokemons]
    setMypokemons(result)
    localStorage.setItem('mypokemons', JSON.stringify(result))
    enqueueSnackbar('Pokemon dilepas!', { variant: 'error' })
  }

  return (
    <>
      <div className="container">
        <h5 className="title">There is {mypokemons.length} Pokemon</h5>
        <div className="row center-align">
          <Columned column={4}>
            {mypokemons &&
              mypokemons.map((pokemon) => {
                return (
                  <div key={pokemon} className="card-list">
                    <Catch
                      image={pokemon.image}
                      name={pokemon.name}
                      handleRelease={handleRelease}
                    />
                  </div>
                )
              })}
          </Columned>
        </div>
      </div>
    </>
  )
}

export default MyPokemon
