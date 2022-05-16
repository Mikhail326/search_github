import React from 'react'
import s from './InitialPage.module.css'
import mainIcon from '../../assets/icons/mainIcon.png'

export const InitialPage = () => {
  return (
    <div className={s.wrapperInitialPage}>
      <div className={s.content}>
        <img src={mainIcon} alt="mainIcon" />
        <h3>Start with searching a GitHub user</h3>
      </div>
    </div>
  )
}
