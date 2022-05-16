import React from 'react'
import s from './Repositories.module.css'
import unionRepos from '../../assets/icons/unionRepos.png'

export const Repositories = ({ reposUser, detailsUser}) => {

  if (reposUser.length === 0) {
    return (
      <div className={s.wrapperEmptyRepos}>
        <img src={unionRepos} alt="EmptyRepos" />
        <h3>Repository list is empty</h3>
      </div>
    )
  }

  return (
    <div className={s.repositories}>
      <h2>Repositories ({detailsUser.public_repos})</h2>
      <ul>
        {reposUser.map(el => {
          return <li className={s.reposItem} key={el.id}>
            <a href={el.html_url} target="_blank" rel="noreferrer" className={s.title}>{el.name}</a>
            <p className={s.description}>{el.description}</p>
          </li>
        })}
      </ul>
    </div>
  )
}
