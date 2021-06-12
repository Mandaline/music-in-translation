import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import { themeChanger, modeContainer, ggSun, ggMoon } from '../styles/components/theme-changer.module.scss';

const ThemeChanger = () => (

  <ThemeToggler>
    {({ theme, toggleTheme }) => (
      <label>
        <input
          type="checkbox"
          className={themeChanger}
          onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
          checked={theme === 'dark'}
        />{' '}
        <div className={modeContainer}>
          {theme === 'dark' && <i className={ggSun}></i>}
          {theme === 'light' && <i className={ggMoon}></i>}
        </div>
      </label>
    )}
  </ThemeToggler>
)
export default ThemeChanger