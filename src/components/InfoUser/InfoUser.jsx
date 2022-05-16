import React, { useState } from 'react'
import s from './InfoUser.module.css'
import followers from '../../assets/icons/followers.png'
import following from '../../assets/icons/following.png'

export const InfoUser = ({ detailsUser }) => {

  const count= (detailsUser.followers / 1000).toString().slice(0, 4) + 'k'

  return (
    <div className={s.infoUser}>
      <img className={s.infoUserAvatar} src={detailsUser.avatar_url} alt="" />
      <h2>{detailsUser.name}</h2>
      <a className={s.loginUser} href={detailsUser.html_url} target="_blank">{detailsUser.login}</a>
      <div className={s.wrapperFollow}>
        <div className={s.followers}>
          <img src={followers} alt="followers" />
          <p>{detailsUser.followers.toString().length > 3 ? count : detailsUser.followers} followers</p>
        </div>
        <div className={s.following}>
          <img src={following} alt="followers" />
          <p>{detailsUser.following} following</p>
        </div>
      </div>
    </div>
  )
}
