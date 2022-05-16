import React from 'react'
import s from './EmptyUser.module.css'
import union from '../../assets/icons/union.png'

export const EmptyUser = () => {
  return (
    <div className={s.container}>
      <div className={s.content}>
        <img src={union} alt="mainIcon" />
        <h3>User not found</h3>
      </div>
    </div>
  )
}
