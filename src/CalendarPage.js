import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarPage.css';
import { Button} from "@material-ui/core";
import {URL} from "./App";

function CalendarPage({ guideUsername }) {
//    const mockResponse = {"available_dates": ["2024-04-12", "2024-04-17", "2024-04-18"]}

    const [availableDates, setAvailableDates] = useState([]);

    useEffect(() => {
    // Fetch the current available dates when the component mounts
      fetchAvailableDates();
    }, []);

  const fetchAvailableDates = async () => {
    try {
      const response = await fetch(`${URL}/api/guide/${guideUsername}/available_dates`);
      const data = await response.json();
      setAvailableDates(data.available_dates);
    } catch (error) {
      console.error('Error fetching available dates:', error);
    }
  };

  const handleDateChange = (date) => {
    // Toggle the availability of the selected date
    const isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().substr(0, 10);
    const index = availableDates.indexOf(isoDateTime);
    if (index === -1) {
      setAvailableDates([...availableDates, isoDateTime]);
    } else {
      const newDates = [...availableDates];
      newDates.splice(index, 1);
      setAvailableDates(newDates);
    }
  };

  const isDateAvailable = (date) => {
    // Check if the date is available
    // due to timezone issue, convert the date to a timestamp, add the timezone offset, then convert back to a date object
    const isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().substr(0, 10);
    return availableDates.includes(isoDateTime);
  };

  const handleSubmit = async () => {
      try {
        const response = await fetch(`${URL}/api/guide/${guideUsername}/set_available_dates`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ available_dates: availableDates })
        });
      } catch (error) {
        console.error('Error submitting available dates:', error);
      }
    };

  return (
    <div className="calendar-container">
      <h2>Available Dates</h2>
      <Calendar
        onChange={handleDateChange}
        value={new Date()}
        tileClassName={({ date }) => isDateAvailable(date) ? 'available' : ''}
      />
      <Button className="submit" onClick={handleSubmit} variant='outlined'>Submit updates</Button>
    </div>
  );
}

export default CalendarPage;