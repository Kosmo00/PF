import React, { useState/** , useContext */ } from 'react'
import { StyledMenu, MenuButton } from './style'
import { FaBars, FaTimes, FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa'
import MenuItem from '../menuItem/MenuItem'
// import { VariantContext } from '../navbar'
import PropTypes from 'prop-types'

const Menu = ({ dark }) => {
  const [showMenu, setShowMenu] = useState(false)
  // const variantContext = useContext(VariantContext)
  // const dark = variantContext.dark
  return (
    <>
      <MenuButton dark={dark} onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </MenuButton>
      <StyledMenu open={showMenu} dark={dark}>
        <MenuItem dark={dark} icon={<FaHome />} link='Home' setShowMenu={setShowMenu} />
        <MenuItem dark={dark} icon={<FaUser />} link='About' setShowMenu={setShowMenu} />
        <MenuItem dark={dark} icon={<FaBriefcase />} link='Portfolio' setShowMenu={setShowMenu} />
        <MenuItem dark={dark} icon={<FaEnvelope />} link='Contact' setShowMenu={setShowMenu} />
      </StyledMenu>
    </>
  )
}

Menu.propTypes = {
  dark: PropTypes.bool
}

Menu.defaultProps = {
  dark: true
}

export default Menu
