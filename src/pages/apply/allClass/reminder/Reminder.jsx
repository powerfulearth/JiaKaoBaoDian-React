import React, { Component } from 'react';

import {ReminderContainer} from './StyledReminderContainer';

class Reminder extends Component {
  render() {
    return (
      <ReminderContainer>
        <p>提示：如遇价格不符，以驾校前台咨询为准！</p>
      </ReminderContainer>
    );
  }
}

export default Reminder;
