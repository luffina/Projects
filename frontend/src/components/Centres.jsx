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
      padding: '3rem 2rem',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '2rem',
      backgroundColor: '#f8fafc',
      minHeight: '100vh'
    }}>
      {centres.map((centre, index) => (
        <div key={index} style={{
          width: '320px',
          background: '#ffffff',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
          overflow: 'hidden',
          textAlign: 'center',
          transition: 'all 0.3s ease',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px)';
          e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.12)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.08)';
        }}>
          <div style={{
            position: 'relative',
            overflow: 'hidden'
          }}>
            <img
              src={centre.image}
              alt={centre.name}
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>
          <div style={{ 
            padding: '1.5rem',
            background: 'linear-gradient(to bottom, #ffffff, #fafbfc)'
          }}>
            <h3 style={{ 
              color: '#001f42', 
              marginBottom: '0.75rem',
              fontSize: '1.25rem',
              fontWeight: '600',
              letterSpacing: '-0.025em'
            }}>
              {centre.name}
            </h3>
            <p style={{ 
              color: '#64748b',
              fontSize: '0.95rem',
              lineHeight: '1.5',
              margin: 0,
              fontWeight: '400'
            }}>
              {centre.address}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}