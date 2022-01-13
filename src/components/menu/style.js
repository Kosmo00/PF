import styled from 'styled-components'

export const StyledMenu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media screen and (max-width: 620px){
    position: absolute;
    /*top:69px;*/
    z-index: -1;
    top: ${({ open }) => (open ? '69px' : '-100%')};
    left:0;
    width: 100%;
    height: auto;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    transition: all .5s ease;
    background-color: ${({ dark }) => (dark ? 'rgb(23, 22, 24)' : 'rgb(247 247 247)')};
 }
`
export const MenuButton = styled.button`
 display: none;

 @media screen and (max-width: 620px){
    display: flex;
    align-items: center;
    cursor: pointer;
    background: transparent;
    border: none;

    svg{
      fill: rgba(34, 82, 185, 0.952);
      margin-right: 0.5rem;
    }
 }
`
