export const fetchSuperheroes = async () => {
  try {
    const response = await fetch('http://localhost:3001/superheroes');
    if (!response.ok) {
      throw new Error(`Error fetching superheroes: ${response.statusText}`);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    throw err;
  }
};
  
export const addSuperhero = async (superhero: { name: string; superpower: string; humilityScore: number }) => {
  try {
    const response = await fetch('http://localhost:3001/superheroes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(superhero),
    });
    if (!response.ok) {
      throw new Error(`Error adding superhero: ${response.statusText}`);
    }
    return await response.json();
  } catch (err) {
    console.log(err);
    throw err;
  }
};
  