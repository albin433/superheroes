import React, { useEffect, useState } from 'react';
import { addSuperhero, fetchSuperheroes } from './services/superhero.service';
import './styles.css';

const YourComponent = () => {
  const [superheroes, setSuperheroes] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [superpower, setSuperpower] = useState('');
  const [humilityScore, setHumilityScore] = useState(1);

  const getSuperheroes = async () => {
    try {
      // Fetch superheroes data from the API
      const data = await fetchSuperheroes();
      setSuperheroes(data);
    } catch (err) {
      console.log('Error fetching superheroes:', err);
    }
  };

  // Fetch the list of superheroes when the component mounts
  useEffect(() => {
    getSuperheroes();
  }, []);

  const handleAddSuperhero = async () => {
    const superhero = { name, superpower, humilityScore };

    try {
      await addSuperhero(superhero); // Add the new superhero to the backend
      await getSuperheroes(); // Fetch the updated list of superheroes from the backend
    } catch (err) {
      console.log('Error adding superhero:', err);
    }
  };

  return (
    <div className="container">
      <h1>Superheroes</h1>
      <div>
        <h2>Add a new superhero</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Superpower"
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
        />
        <input
          type="number"
          min="1"
          max="10"
          value={humilityScore}
          onChange={(e) => setHumilityScore(Number(e.target.value))}
        />
        <button onClick={handleAddSuperhero}>Add Superhero</button>
      </div>
      <h2>Superheroes List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Superpower</th>
            <th>Humility Score</th>
          </tr>
        </thead>
        <tbody>
          {superheroes.length > 0 ? (
            superheroes.map((superhero, index) => (
              <tr key={index}>
                <td>{superhero.name}</td>
                <td>{superhero.superpower}</td>
                <td>{superhero.humilityScore}</td>
              </tr>
            ))
          ) : (
            // If no superheroes are available, show a message indicating no superheroes found
            <tr>
              <td colSpan={3} style={{ textAlign: 'center' }}>No superheroes found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default YourComponent;
