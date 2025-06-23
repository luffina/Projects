import React from 'react';
import './Calender.css'; // Ensure you have a CSS file for styling

const importantDates = [
  {
    title: 'Term 1 Starts',
    date: '28 January 2025',
    description: 'First day of Term 1 for students.'
  },
  {
    title: 'Labour Day (Public Holiday)',
    date: '10 March 2025',
    description: 'Public Holiday in Victoria.'
  },
  {
    title: 'Term 1 Ends',
    date: '4 April 2025',
    description: 'Last day of Term 1.'
  },
  {
    title: 'Term 2 Starts',
    date: '22 April 2025',
    description: 'First day of Term 2.'
  },
  {
    title: 'ANZAC Day (Public Holiday)',
    date: '25 April 2025',
    description: 'Public Holiday in Victoria.'
  },
  {
    title: 'Queen’s Birthday (Public Holiday)',
    date: '9 June 2025',
    description: 'Public Holiday in Victoria.'
  },
  {
    title: 'Term 2 Ends',
    date: '27 June 2025',
    description: 'Last day of Term 2.'
  },
  {
    title: 'Term 3 Starts',
    date: '14 July 2025',
    description: 'First day of Term 3.'
  },
  {
    title: 'Term 3 Ends',
    date: '19 September 2025',
    description: 'Last day of Term 3.'
  },
  {
    title: 'Term 4 Starts',
    date: '6 October 2025',
    description: 'First day of Term 4.'
  },
  {
    title: 'Melbourne Cup (Public Holiday)',
    date: '4 November 2025',
    description: 'Public Holiday in Victoria.'
  },
  {
    title: 'Term 4 Ends',
    date: '19 December 2025',
    description: 'Final day of the academic year.'
  }
];

export default function Calendar() {
  return (
    <section className="calendar-section">
      <h2 className="calendar-title">Victoria School Calendar 2025</h2>
      <div className="calendar-grid">
        {importantDates.map((item, index) => (
          <div key={index} className="calendar-card">
            <h3>{item.title}</h3>
            <p><strong>Date:</strong> {item.date}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
