import React from 'react';

function UserActivities({ activities }) {
  return (
    <div className="user-activities">
      <h2>Recent Activities</h2>
      <div className="activities-grid">
        {activities.map((activity) => (
          <div key={activity.id} className="activity-card">
            <h3>{activity.title}</h3>
            <p>{activity.body.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserActivities;