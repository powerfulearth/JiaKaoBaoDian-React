import styled from 'styled-components'

const StyledInputContainer = styled.div`
  position: relative;
  border: .005rem solid #979797;
  border-radius: .04rem;
  padding: .05rem .1rem .05rem .49rem;
  margin-bottom: .15rem;
  > img {
    position: absolute;
    width: .22rem;
    height: .23rem;
    left: .1rem;
    background-position: center center;
  }
  > input {
    border: none;
    font-size: .13rem;
    color: #aaa;
    min-width: .8rem;
  }
  > .hint {
    position: absolute;
    left: .49rem;
    top: 100%;
    font-size: .11rem;
    color: #ff5500;
  }
  > .hidden {
    display: none;
  }
`

export {
  StyledInputContainer
}