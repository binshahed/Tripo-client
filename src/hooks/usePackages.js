import { useEffect, useState } from 'react'
import useFirebase from './useFirebase'

// load data from db
const usePackages = () => {
  const [packages, setPackages] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/packages')
      .then(res => res.json())
      .then(data => {
        setPackages(data)
      })
  }, [])

  return [packages, setPackages]
}
export default usePackages
