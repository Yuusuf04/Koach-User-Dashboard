import React, { useState, useEffect } from 'react';
import UserProfile from './components/UserProfile';
import UserActivities from './components/UserActivities';
import ThemeSwitcher from './components/ThemeSwitcher';
import './index.css';

function App() {
  const [user, setUser] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const userData = await userResponse.json();
      setUser(userData);

      const activitiesResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
      const activitiesData = await activitiesResponse.json();
      setActivities(activitiesData);

      setLoading(false);
    } catch (err) {
      setError('Failed to fetch data');
      setLoading(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className={`App ${theme}`}>
      <div className="dashboard">
        <UserProfile user={user} />
        <UserActivities activities={activities} />
      </div>
      <ThemeSwitcher toggleTheme={toggleTheme} currentTheme={theme} />
    </div>
  );
}

export default App;