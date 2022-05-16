import React from 'react'
import ReactPaginate from 'react-paginate'
import s from './Pagination.module.css'

export const Pagination = ({ handlePageClick, pageCount, reposUser, detailsUser, currentPage }) => {

  const countRepos = (currentPage + 1) * reposUser.length
  const lastCountRepos = (detailsUser.public_repos + 1) - reposUser.length

  return (
    <div className={s.wrapperPagination}>

      {reposUser.length === 0 ? null :
        <>
          {reposUser.length !== 4 ? <span>{lastCountRepos} - {detailsUser.public_repos} of {detailsUser.public_repos} items</span> :
            <span>{countRepos - 3} - {countRepos} of {detailsUser.public_repos} items</span>}
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName={s.pagination}
            pageClassName={s.paginationItem}
            previousClassName={s.paginationItem}
            previousLinkClassName={s.paginationItemLink}
            nextClassName={s.paginationItem}
            nextLinkClassName={s.paginationItemLink}
            breakLinkClassName={s.paginationItem}
            activeClassName={s.active}
          />
        </>}

    </div>
  )
}
