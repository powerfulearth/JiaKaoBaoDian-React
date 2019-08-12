import React, { Component } from 'react';
import {ApplyContainer} from './StyledApply';
import TopWrap from './topWrap/TopWrap';
import CenterWrap from './centerWrap/CenterWrap';
import BottomWrap from './bottomWrap/BottomWrap';

class Apply extends Component {
    render() {
        return (
            <ApplyContainer>
                <TopWrap></TopWrap>
                <CenterWrap></CenterWrap>
                <BottomWrap></BottomWrap>
            </ApplyContainer>
        );
    }
}

export default Apply;

