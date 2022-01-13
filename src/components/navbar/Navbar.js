// import styled from 'styled-components'
import React from 'react'
import { FaCode } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import PropTypes from 'prop-types'
import { LogoContainer, Nav, Wrapper } from './style'
import Menu from '../menu/Menu'

export const VariantContext = React.createContext()

export const Navbar = ({ dark }) => {
  return (
  // <VariantContext.Provider value={{ dark: dark }}>
    <Nav dark={dark}>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: '1.6rem' } }}>
          <LogoContainer dark={dark}>
            <FaCode />
            <p>Some</p>
            <p className='t2'>Thing</p>
          </LogoContainer>
          <Menu dark={dark} />
        </IconContext.Provider>
      </Wrapper>
    </Nav>
  // </VariantContext.Provider>
  )
}
Navbar.propTypes = {
  dark: PropTypes.bool
}

Navbar.defaultProps = {
  dark: true
}
