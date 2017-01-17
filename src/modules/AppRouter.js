/*eslint-disable react/prop-types*/
import React from 'react';
import PollListContainer from './poll-list/PollListContainer';
import AddPollContainer from './add-poll/AddPollContainer';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const key = props.scene.route.key;

  if (key === 'PollList') {
    return <PollListContainer />;
  }

  if (key === 'AddPoll') {
    return (
      <AddPollContainer />
    );
  }

  throw new Error('Unknown navigation key: ' + key);
}
