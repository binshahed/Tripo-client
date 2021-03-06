import { useEffect, useState } from 'react'
import useFirebase from './useFirebase'

// load data from db
const usePackages = () => {
  const [packages, setPackages] = useState([])
  const [waiting, setWaiting] = useState(true)

  useEffect(() => {
    setWaiting(true)
    fetch('https://infinite-everglades-05408.herokuapp.com/packages')
      .then(res => res.json())
      .then(data => {
        setPackages(data)
        setWaiting(false)
      })
  }, [])

  return [packages, waiting]
}
export default usePackages
