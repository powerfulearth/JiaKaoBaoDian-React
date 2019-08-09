import styled from 'styled-components'

const SearchContainer = styled.a`
  padding-right: .1rem;
  width:2.55rem;
  height:0.25rem;
  background:rgba(255,255,255,1);
  border-radius:0.125rem;
  display: flex;
  div{
    padding: 0 .07rem;
    img{
      width: .11rem;
      height: .11rem;
    }
  }
  input{
    flex: 1;
    outline: none;
    border: none;
    font-size:0.13rem;
  }
  input::-webkit-input-placeholder{
    font-size: 0.11rem;  
    color: #A1A1A1;
  } 
`

export {
  SearchContainer
}