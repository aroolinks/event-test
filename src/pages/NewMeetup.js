import React from 'react';
import { useNavigate } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetup() {
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    fetch(
      'https://react-meetup-6685b-default-rtdb.firebaseio.com/meetups.json',

      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      navigate('/');
    });
  }

  return (
    <div>
      <section>
        <h1> Add New Meetups</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </section>
    </div>
  );
}

export default NewMeetup;
