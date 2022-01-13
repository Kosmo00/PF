import React from 'react'

import { StyledDiv } from './style'

export const ExampleComponent = ({ children, textColor }) => {
  return (
    <StyledDiv>
      <p className={textColor}>{children}</p>
    </StyledDiv>
  )
}
