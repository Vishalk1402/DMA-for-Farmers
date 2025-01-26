// components/MainDashboardContent.js
import React from "react";
import "./Maindashcontent.css";

const MainDashboardContent = () => {
  return (
    <div>
    <section className="stats-section">
    <h3>Quick Stats</h3>
    <div className="stats">
      <div className="stat-card">
        <h4>Total Sales</h4>
        <p>Rs.5,50,000</p>
      </div>
      <div className="stat-card">
        <h4>Orders</h4>
        <p>342</p>
      </div>
      <div className="stat-card">
        <h4>Users</h4>
        <p>1200</p>
      </div>
      <div className="stat-card">
        <h4>Feedbacks</h4>
        <p>89</p>
      </div>
    </div>
  </section>

  <section className="recent-activities">
    <h3>Recent Activities</h3>
    <ul>
      <li>User <strong>Anurag Wagh</strong> placed an order.</li>
      <li>Product <strong>Organic Apples</strong> was added to inventory.</li>
      <li>Farmer <strong>Kamlesh Sonar</strong> updated their profile.</li>
    </ul>
  </section>

  <section className="tasks">
    <h3>Pending Tasks</h3>
    <ul>
      <li>Review pending orders.</li>
      <li>Check inventory levels.</li>
      <li>Respond to customer feedback.</li>
    </ul>
  </section>
  </div>
);
};

export default MainDashboardContent;
