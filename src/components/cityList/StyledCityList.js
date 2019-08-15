import styled from 'styled-components';

const CityListContainer = styled.div`
background:#F5F5F5;
  .cityList{
    padding-left:.15rem;
    line-height:.5rem;
    font-size:.2rem;
  }
  .abcd{
    padding-left:.25rem;
    line-height:.3rem;
    background:#EBEBEB;
  }
  .citySort li:last-child{
    border:0;
  }
  .cityItem{
    line-height:.45rem;
    margin-left:.15rem;
    border-bottom:1px solid #c8c7cc;
  }
`

export {
  CityListContainer
}