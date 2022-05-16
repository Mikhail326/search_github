import axios from "axios"

const BASE_URL = `https://api.github.com/`
const instance = axios.create({
  baseURL: BASE_URL
})

export const getDataAPIUser = async (searchValue, setDetailsUser, setErrorUser, setLoading) => {
  try {
    await instance.get(`users/${searchValue}`)
      .then(res => {
        setDetailsUser(res.data)
        setErrorUser(false)
        setLoading(false)
      })
  } catch (e) {
    setErrorUser(true)
    setLoading(false)
  }
}

export const getDataAPIRepos = async (searchValue, currentPage, setReposUser, setErrorUser) => {
  try {
     await instance.get(`/users/${searchValue}/repos?per_page=4&page=${currentPage + 1}`)
      .then(res => {
        setReposUser(res.data)
        setErrorUser(false)
      })
  } catch (e) {
    setErrorUser(true)
  }
}