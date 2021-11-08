import React, { useEffect, useState, createContext } from 'react'

export const DetailContext = createContext()

export const DetailProvider = ({ children }) => {
  const [mypokemons, setMypokemons] = useState(
    JSON.parse(localStorage.getItem('mypokemons')) || []
  )

  useEffect(() => {
    JSON.parse(localStorage.getItem('mypokemons'))
  }, [])

  return (
    <DetailContext.Provider value={{ mypokemons, setMypokemons }}>
      {children}
    </DetailContext.Provider>
  )
}
