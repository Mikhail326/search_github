import React, { useEffect, useState } from 'react'
import { getDataAPIRepos, getDataAPIUser } from '../api'
import s from './GitHub.module.css'
import { Header } from './Header/Header'
import { InfoUser } from './InfoUser/InfoUser'
import { InitialPage } from './InitialPage/InitialPage'
import { Pagination } from './Pagination/Pagination'
import { Repositories } from './Repositories/Repositories'
import { EmptyUser } from './EmptyUser/EmptyUser'

export const GitHub = () => {
  const [detailsUser, setDetailsUser] = useState('')
  const [reposUser, setReposUser] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [tempSearchValue, setTempSearchValue] = useState('')
  const [searchValue, setSearchValue] = useState(tempSearchValue)
  const [errorUser, setErrorUser] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (tempSearchValue.length > 0) {
      setLoading(true)
      getDataAPIUser(searchValue, setDetailsUser, setErrorUser, setLoading)
    }
  }, [searchValue])

  useEffect(() => {
    if (tempSearchValue.length > 0) {
      getDataAPIRepos(searchValue, currentPage, setReposUser, setErrorUser)
    }
  }, [currentPage, searchValue])

  const handlePageClick = (data) => {
    setCurrentPage(data.selected)
  }

  const pageCount = Math.ceil(detailsUser.public_repos / 4)

  if (loading) {
    return (
      <div className={s.wrapperLoader}>
        <div className={s.loader}></div>
      </div>
    )
  }

  return (
    <>
      <Header setTempSearchValue={setTempSearchValue}
        tempSearchValue={tempSearchValue}
        setSearchValue={setSearchValue} />
      {errorUser ? <EmptyUser /> :
        !detailsUser ? <InitialPage /> : <>
          <div className={s.wrapperInfoUser}>
            <InfoUser detailsUser={detailsUser} />
            <Repositories reposUser={reposUser}
              detailsUser={detailsUser} />
          </div>
          <Pagination handlePageClick={handlePageClick}
            pageCount={pageCount}
            reposUser={reposUser}
            detailsUser={detailsUser}
            currentPage={currentPage} />
        </>
      }
    </>
  )
}
