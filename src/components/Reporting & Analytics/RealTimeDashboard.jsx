import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RealTimeDashboard = () => {
        // Placeholder Charts
        const activeUsersChartRef = useRef(null);
        const averageViewsChartRef = useRef(null);
        const bedChartRef = useRef(null);
    
        useEffect(() => {
            if (activeUsersChartRef.current) {
                const ctx = activeUsersChartRef.current.getContext('2d');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
                        datasets: [{
                            label: 'Active Users',
                            data: [4000, 800, 1150, 600, 1800, 3000, 2500],
                            borderColor: '#007bff',
                            backgroundColor: 'rgba(0, 123, 255, 0.2)',
                            fill: true,
                            tension: 0.3,
                            pointBackgroundColor: '#007bff',
                            pointBorderColor: '#fff',
                            pointRadius: 5
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: { display: false }
                        },
                        scales: {
                            y: { beginAtZero: true }
                        }
                    }
                });
            }
    
            if (averageViewsChartRef.current) {
                const ctx1 = averageViewsChartRef.current.getContext('2d');
                new Chart(ctx1, {
                    type: 'bar',
                    data: {
                        labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
                        datasets: [{
                            label: 'Average Views',
                            data: [1500, 700, 1800, 1000, 2313, 500, 1400],
                            backgroundColor: ['#f0e5fc', '#f0e5fc', '#f0e5fc', '#f0e5fc', '#962dff', '#f0e5fc', '#f0e5fc'],
                            borderRadius: 5
                        }]
                    },
                    options: {
                        responsive: true,
                        plugins: {
                            legend: { display: false }
                        },
                        scales: {
                            y: { beginAtZero: true }
                        }
                    }
                });
            }
    
            if (bedChartRef.current) {
                const ctx3 = bedChartRef.current.getContext('2d');
                new Chart(ctx3, {
                    type: 'doughnut',
                    data: {
                        labels: ["Available", "Occupied"],
                        datasets: [{
                            data: [60, 40],
                            backgroundColor: ['#4a3aff', '#c6d2fd']
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false
                    }
                });
            }
        }, []);
  return (
    <>
    <div className="container my-4 p-5 rounded-3 shadow bg-light">
  <div className="heading d-flex justify-content-between">
    <div className="head">
      <h2 className="fw-bold">Real-Time Analytics Dashboard</h2>
      <p>Home / Analytics / Real-Time Analytics Dashboard</p>
    </div>
    <input
      type="text"
      className="form-control p-3 border-secondary"
      placeholder="Search..."
      style={{ width: "20%", height: 50 }}
    />
  </div>
  {/* Filters */}
  <div className="dashboard-container mb-4">
    <h4 className="mt-4">Filter</h4>
    <hr />
    <div className="row">
      <div className="col-md-4">
        <select className="form-select p-3 mt-2 border-secondary">
          <option selected="">Date Range</option>
          <option>Last 7 Days</option>
          <option>Last Month</option>
        </select>
      </div>
      <div className="col-md-4">
        <select className="form-select p-3 mt-2 border-secondary">
          <option selected="">Departments</option>
          <option>Cardiology</option>
          <option>Orthopedics</option>
        </select>
      </div>
    </div>
  </div>
  {/* KPIs */}
  <div className="row">
    <h4 className="mt-3">KPIs</h4>
    <div className="col-md-3">
      <div className="kpi-box mt-2">
        <h3>160 Patients</h3>
        <p>Patient Flow</p>
      </div>
    </div>
    <div className="col-md-3">
      <div className="kpi-box mt-2">
        <h3>$50,000</h3>
        <p>Revenue</p>
      </div>
    </div>
    <div className="col-md-3">
      <div className="kpi-box mt-2">
        <h3>75%</h3>
        <p>Resource Utilization</p>
      </div>
    </div>
  </div>
  {/* Charts */}
  <div className="row mt-5">
    <div className="col-md-6">
      <h5 className="mb-4">Patient Flow Chart</h5>
      <div className="shadow-sm p-4 rounded-3">
        <div className="d-flex justify-content-between">
          <div className="texthead">
            <h6 className="text-muted">Active users</h6>
            <h2 className="fw-bold">6,345</h2>
          </div>
          <div className="text">
            <p className="mt-3 text-success fw-bold">
              1.3% <i className="fa-solid fa-circle" /> <br />{" "}
              <span className="text-muted">VS LAST WEEK</span>
            </p>
          </div>
        </div>
        <hr />
        <canvas ref={activeUsersChartRef} />
      </div>
    </div>
    <div className="col-md-6">
      <h5 className="mb-4">Revenue Trends</h5>
      <div className="p-4 shadow-sm rounded-3">
        <div className="d-flex justify-content-between">
          <div>
            <p className="text-muted">Activity</p>
            <h5 className="fw-bold">Average views</h5>
          </div>
          <div>
            <select
              className="form-select rounded-pill px-5"
              aria-label="Default select example"
              style={{ backgroundColor: "#f8f8ff", border: "none" }}
            >
              <option selected="">Weekly</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
          </div>
        </div>
        <hr />
        <canvas ref={averageViewsChartRef} />
      </div>
    </div>
  </div>
  {/* Bed Allocation */}
  <div className="row mt-4">
    <div className="col-md-5">
      <h5 className="mb-4">Resource Utilization</h5>
      <div className="shadow-sm p-4 rounded-3">
        <h6 className="text-muted">Statistics</h6>
        <h5 className="fw-bold">Bed Allocation</h5>
        <hr />
        <div className="d-flex justify-content-center">
        <canvas ref={bedChartRef} width={300} height={300} />
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default RealTimeDashboard