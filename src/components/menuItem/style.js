import styled from 'styled-components'

export const Menuitem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 620px){
    width: 100%;
    height: 80px;
    justify-content: flex-start;
    align-items: center;
    transition: all .5s ease;
 }
`
export const MenuitemLink = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  font-weight: 550; 
  color: ${({ dark }) => (dark ? 'rgb(194 196 197 / 74%)' : 'rgb(114 114 114)')};
  cursor: pointer;
  transition: all .5s ease;

  &:hover{
    color:${({ dark }) => (dark ? 'rgb(245, 243, 250)' : 'rgb(74 74 74)')};
    background-color: ${({ dark }) => (dark ? 'rgb(42 42 44 / 67%);' : 'rgb(182 182 187/ 70%)')};
    transition: all .5s ease;
  }
  div{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg{
      display: none;
      fill: rgba(34, 82, 185, 0.952);
      margin-right: 0.6rem;
    }
  }
  @media screen and (max-width: 620px){
    width: 100%;
    padding-left: 2.5rem;
    justify-content: flex-start;
    div{
      width: 45%;
      justify-content: flex-start;

      svg{
        display: flex;
      }
    }
 }
`
