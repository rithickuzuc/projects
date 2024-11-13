import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './styless.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function HomePage() {
  const stockData = {
    labels: ['2024-08-01', '2024-08-02', '2024-08-03', '2024-08-04', '2024-08-05'], // Example dates
    datasets: [
      {
        label: 'MSFT Stock Price',
        data: [150, 155, 160, 158, 165], // Example prices
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="home-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="dashboard">
          <div className="card">
            <h3>Total Products</h3>
            <p>150</p>
          </div>
          <div className="card">
            <h3>Stock Value</h3>
            <p>$10,000</p>
          </div>
          <div className="card">
            <h3>Low Stock Alerts</h3>
            <p>3</p>
          </div>
          <div className="card">
            <h3>Recent Sales</h3>
            <p>$1,200</p>
          </div>
        </div>
        <div className="stock-graph">
          <h1>Stock Graph</h1>
          <Line data={stockData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;