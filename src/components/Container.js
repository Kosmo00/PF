import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  margin-right: auto;
  margin-left: auto;
    
@media (min-width: 768px) { 
    width: 750px;
    padding-right: 2rem;
    padding-left: 2rem;  
}
@media (min-width: 992px) { 
    width: 970px; 
}
@media (min-width: 1200px) {
    width: 1170px;
}
`
