import React from 'react';

function Team() {
  return (
    <section className="team">
      <h2>Our Team</h2>
      <ul>
        <li>
          <img src="babar-azam.jpg" alt="Babar Azam" />
          <h3>Babar Azam</h3>
          <p>Captain</p>
        </li>
        <li>
          <img src="shaheen-afridi.jpg" alt="Shaheen Afridi" />
          <h3>Shaheen Afridi</h3>
          <p>Bowler</p>
        </li>
        <li>
          <img src="fakhar-zaman.jpg" alt="Fakhar Zaman" />
          <h3>Fakhar Zaman</h3>
          <p>Batsman</p>
        </li>
      </ul>
    </section>
  );
}

export default Team;