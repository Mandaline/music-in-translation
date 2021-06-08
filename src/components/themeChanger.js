import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { theme_changer, mode_container, gg_sun, gg_moon } from '../styles/components/theme-changer.module.scss';

const ThemeChanger = () => (

  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label>
        <input
          type="checkbox"
          className={theme_changer}
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />{' '}
        <div className={mode_container}>
          {theme === 'dark' && <i className={gg_sun}></i>}
          {theme === 'light' && <i className={gg_moon}></i>}
        </div>
      </label>
    )}
  </ThemeToggler>
)
export default ThemeChanger