import React from 'react'

import { StyledDiv } from './style'

export const ExampleComponent = ({ children }) => {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}
