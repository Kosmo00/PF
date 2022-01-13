import PropTypes from 'prop-types'
import React from 'react'
import { Menuitem, MenuitemLink } from './style'
import { FaReact } from 'react-icons/fa'

const MenuItem = ({ icon, link, setShowMenu, dark }) => {
  return (
    <Menuitem onClick={() => setShowMenu(false)}>
      <MenuitemLink dark={dark}>
        <div>
          {icon}
          {link}
        </div>
      </MenuitemLink>
    </Menuitem>
  )
}
MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  dark: PropTypes.bool
}

MenuItem.defaultProps = {
  link: 'Hello World',
  icon: <FaReact />,
  dark: true
}

export default MenuItem
