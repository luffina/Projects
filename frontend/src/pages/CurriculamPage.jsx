import React, { useEffect, useState } from 'react';

const curriculumLinks = {
  "Year 1/2": {
    "Hindi": "https://1drv.ms/f/c/4206d3f9043c3b6a/Et434s88LStHgpWrefGFfmEB0pVaUq2dQeCsYewsEn1QnQ?e=C2qWH3",
    "Maths and English": "https://1drv.ms/f/c/4206d3f9043c3b6a/Et434s88LStHgpWrefGFfmEB0pVaUq2dQeCsYewsEn1QnQ?e=C2qWH3"
  },
  "Year 3": {
    "Maths and English": "https://1drv.ms/f/c/4206d3f9043c3b6a/Emo7PAT50wYggEI6BAAAAAABteMQGe7eZu7_ek7otJ7lTg?e=WvYUKM"
  },
  "Year 4": {
    "Science": "https://1drv.ms/f/c/4206d3f9043c3b6a/Emo7PAT50wYggEI6BAAAAAABteMQGe7eZu7_ek7otJ7lTg?e=tNUiXk"
  }
};

export default function Curriculum() {
  const [year, setYear] = useState('');
  const [subject, setSubject] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser")); // { email, year, subject }
    if (user && user.year && user.subject) {
      setYear(user.year);
      setSubject(user.subject);
      const curriculumUrl = curriculumLinks[user.year]?.[user.subject];
      setLink(curriculumUrl || "Not Available");
    }
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Curriculum Access</h2>
      {link && link !== "Not Available" ? (
        <>
          <p>
            Here is your curriculum for <strong>{subject}</strong> in <strong>{year}</strong>:
          </p>
          <a href={link} target="_blank" rel="noopener noreferrer">Open Curriculum</a>
        </>
      ) : (
        <p>No curriculum found for your enrolled course.</p>
      )}
    </div>
  );
}
