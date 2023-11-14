// create your App component here
import React, { useState, useEffect } from 'react';

const App = () => {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        // Update state with the received data
        setDogImage(data.message);
        // Set loading to false since we have received the response
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        // Set loading to false in case of an error
        setLoading(false);
      });
  }, []); // The empty dependency array ensures that the effect runs only once on mount

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
};

export default App;
