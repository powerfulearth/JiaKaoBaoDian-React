import React, { Component } from 'react';

import CityListUI from './CityListUI';
import {CityListContainer} from './StyledCityList';

class CityList extends Component {
  constructor(){
    super()
    this.state = {
      cityList:[]
    }
  }
  render() {
    return (
      <CityListContainer>
        <CityListUI cityList={this.state.cityList}></CityListUI>
      </CityListContainer>
    )
  }

  async componentDidMount(){
    let cityList = await fetch('https://api.myjson.com/bins/qsl6h').then(response => response.json())
    this.setState({
      cityList:cityList
    })
  }

}

export default CityList;


// https://api.myjson.com/bins/qsl6h