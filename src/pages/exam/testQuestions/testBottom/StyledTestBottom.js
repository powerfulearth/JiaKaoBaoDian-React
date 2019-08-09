import styled from 'styled-components'

const StyledTestBottomContainer = styled.div`
  width: 100%;
  height: .5rem;
  border-top: .01rem solid #DEDEDE;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .15rem;
  .b_left {
    display: flex;
    span {
      display: block;
    }
    .pic {
      font-size: .15rem;
      margin-right: .06rem;
    }
    .text {
      font-size: .13rem;
    }
  }
  .b_right {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    .true, .false {
      display: flex;
      align-items: center;
      .pic {
        width: .13rem;
        height: .13rem;
        background: #000;
        color: #fff;
        margin-right: .06rem;
      }
    }
    .true {
      margin-right: .3rem;
    }
  }
  .menu {
    margin-left: .4rem;
    display: flex;
    align-items: center;
    span {
      display: block;
    }
    .pic {
      width: .13rem;
      height: .13rem;
      background: #000;
    }
    .num {
      margin-left: .05rem;
    }
  }
`

export {
  StyledTestBottomContainer
}