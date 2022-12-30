import { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';

export const useFetch = ({ url, method, body = null }) => {
  const [response, setResponse] = useState(undefined)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const source = axios.CancelToken.source()

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      try {
        // setup fetching
        setLoading(true)
        const result = await axios.request({
          url,
          method,
          data: body,
          cancelToken: source.token,
          withCredentials: false
        })
        // succes getting response
        setResponse(result.data)
      } catch (error) {
        // save error
        isMounted && setError(error)
      } finally {
        // finish fetching
        isMounted && setLoading(false)
      }
    }
    isMounted && fetchData()

    // clean up
    return () => {
      isMounted = false
      source.cancel(`Cancel request ${url}`)
    }
  }, [])

  return { response, error, loading }
}
