import styled from 'styled-components'
import { Container } from '../Container'

export const Nav = styled.div`
  background-color:  ${({ dark }) => (dark ? 'rgb(23, 22, 24)' : ' rgb(247 247 247)')};
  height: 70px;
  /*box-shadow: 0px 6px 9px 0px rgb(0 0 0 / 6%);*/
`
export const Wrapper = styled(Container)`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  max-height: 70px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;

  svg{
    fill: rgba(34, 82, 185, 0.952);
    margin-right: 0.5rem;
  }
  p{
    font-weight: 600;
    color:${({ dark }) => (dark ? 'rgb(223, 224, 224)' : 'rgb(92, 92, 92)')};
    &: nth-child(3){
      color: rgba(34, 82, 185, 0.952);
    }
  }
`
