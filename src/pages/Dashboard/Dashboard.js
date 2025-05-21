import React, { useState } from "react";
import "./Dashboard.css";
import Chart from "react-apexcharts";
import { Card } from "antd";

const Dashboard = () => {
  const [donutOptions] = useState({
    labels: ["New Orders", "Customer Growth", "Total Revenue"],
    legend: { show: false },
    colors: ["#ff6b6b", "#f4a460", "#f9c80e"],
  });

  const [donutSeries] = useState([45, 21, 34]);

  const [lineOptions] = useState({
    chart: { id: "line-chart" },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct", "Nov", "Dec",
      ],
    },
    stroke: { curve: "smooth" },
    colors: ["#1e90ff"],
  });

  const [lineSeries] = useState([
    {
      name: "Order",
      data: [20, 30, 35, 40, 50, 45, 40, 38, 30, 33, 37, 50],
    },
  ]);

  const [barOptions] = useState({
    chart: { id: "revenue-bar" },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    },
    colors: ["#ff6b6b", "#f4a460", "#1e90ff"],
  });

  const [barSeries] = useState([
    {
      name: "Total Revenue",
      data: [120, 200, 250, 300, 280, 260, 310, 350, 400],
    },
  ]);

  const [stackedOptions] = useState({
    chart: { stacked: true },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    colors: ["#f9c80e", "#ff6b6b"],
  });

  const [stackedSeries] = useState([
    {
      name: "Returning Customers",
      data: [20, 30, 25, 35, 40, 30],
    },
    {
      name: "New Customers",
      data: [40, 50, 45, 40, 35, 45],
    },
  ]);

  return (
    <div className="dashboard">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h2>
            Hi <span className="heading">Ritik</span>,
          </h2>
          <p>Welcome back to the Admin Dashboard</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="row">
        <div className="col-lg-3 col-md-6 mt-2">
          <div className="bg-white p-2 pending_style">
            <p className="desc">New Orders</p>
            <h4 className="mb-0 sub-title">75</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-2">
          <div className="bg-white p-2 active_style">
            <p className="desc">New Customers</p>
            <h4 className="mb-0 sub-title">357</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-2">
          <div className="bg-white p-2 delivered_style">
            <p className="desc">New Restaurants</p>
            <h4 className="mb-0 sub-title">65</h4>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-2">
          <div className="bg-white p-2 active_style">
            <p className="desc">Total Revenue</p>
            <h4 className="mb-0 sub-title">$128</h4>
          </div>
        </div>
      </div>

      {/* Chart Cards */}
      <div className="row mt-4">
        <div className="col-lg-6 col-md-12 mb-4">
          <Card title="Pie Chart" bordered={false}>
            <Chart
              options={donutOptions}
              series={donutSeries}
              type="donut"
              width="100%"
            />
          </Card>
        </div>
        <div className="col-lg-6 col-md-12 mb-4">
          <Card
            title="Chart Order"
            extra={<button className="btn btn-sm btn-warning">See Report</button>}
            bordered={false}
          >
            <Chart
              options={lineOptions}
              series={lineSeries}
              type="line"
              width="100%"
            />
          </Card>
        </div>
        <div className="col-lg-6 col-md-12 mb-4">
          <Card title="Total Revenue" bordered={false}>
            <Chart
              options={barOptions}
              series={barSeries}
              type="bar"
              width="100%"
            />
          </Card>
        </div>
        <div className="col-lg-6 col-md-12 mb-4">
          <Card title="Customer Map" bordered={false}>
            <Chart
              options={stackedOptions}
              series={stackedSeries}
              type="bar"
              width="100%"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
