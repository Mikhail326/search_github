import React from 'react'
import s from './Header.module.css'
import iconGitHub from '../../assets/icons/github.png'
import iconSearch from '../../assets/icons/search.png'

export const Header = ({ setSearchValue, setTempSearchValue, tempSearchValue }) => {

  return (
    <div className={s.header}>
      <div className={s.container}>
        <a href="/">
          <img src={iconGitHub} alt="iconGitHub" />
        </a>
        <div className={s.wrapperInput}>
          <img src={iconSearch} alt="iconSearch" />
          <input type='text'
            placeholder='Enter GitHub username'
            value={tempSearchValue}
            onChange={(e) => setTempSearchValue(e.currentTarget.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                setSearchValue(tempSearchValue)
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}
