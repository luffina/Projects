import React from 'react';

export default function Centres() {
  const centres = [
    {
      name: 'Balwyn',
      image: '/assets/balwyn1.PNG',
      address: 'Belmore Plaza, Unit 5 & Unit 6 Belmore Rd, Balwyn VIC 3103',
    },
    {
      name: 'Balwyn ',
      image: '/assets/balwyn2.PNG',
      address: 'Belmore Plaza, Unit 5 & Unit 6 Belmore Rd, Balwyn VIC 3103',
    },
    {
      name: 'Mount Waverley',
      image: '/assets/mw1.PNG',
      address: '52 Wadham Parade, Mount Waverley VIC 3149',
    },
    {
      name: 'Mount Waverley ',
      image: '/assets/mw2.PNG',
      address: '52 Wadham Parade, Mount Waverley VIC 3149',
    },
  ];

  return (
    <div style={{
      padding: '2rem',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2rem',
      backgroundColor: '#f9f9f9'
    }}>
      {centres.map((centre, index) => (
        <div key={index} style={{
          width: '300px',
          background: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          textAlign: 'center'
        }}>
          <img
            src={centre.image}
            alt={centre.name}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover'
            }}
          />
          <div style={{ padding: '1rem' }}>
            <h3 style={{ color: '#001f42', marginBottom: '0.5rem' }}>{centre.name}</h3>
            <p style={{ color: '#555' }}>{centre.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
