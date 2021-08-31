import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./Dashboard.css"
import { CartesianGrid, Line, XAxis, LineChart, Tooltip } from "recharts";
// import { Tooltip } from "bootstrap";
import data from "../data.json"

function Dashboard() {
  return (
    <div className="col-12">
      <div className="row">
        <div className="dashboard-row-top">
          <li>
            <Link to="#" className="dashboard-link dashboard-left">
              {" "}
              <h5> Your Dashboard</h5>
            </Link>
          </li>
          <li>
            <Link to="/help" className="dashboard-link dashboard-right">
              {" "}
              <h5>Help</h5>
            </Link>
          </li>
        </div>

        <Card>
          <Card.Body>
            <Card.Title>
              {" "}
              
              <div
                className="card-badge"
                style={{ backgroundColor: "#F48E7F" }}
              >
                <FaIcons.FaIdBadge />{" "}
              </div>{" "}
              <span className="card-head-span">
                {" "}
                <h4 style={{ color: "#F48E7F", fontWeight: "700" }}>
                  500
                </h4>{" "}
                <Card.Text>Total Candidates</Card.Text>
              </span>
            
            </Card.Title>
            <div className="btn-div">
              <Button variant="primary">Add Student</Button>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>
              {" "}
              <div
                className="card-badge"
                style={{ backgroundColor: "#5EBF9E" }}
              >
                <AiIcons.AiOutlineQuestion />{" "}
              </div>{" "}
              <span className="card-head-span">
                {" "}
                <h4 style={{ color: "#5EBF9E", fontWeight: "700" }}>
                  1500
                </h4>{" "}
                <Card.Text>Total Questions</Card.Text>
              </span>
            </Card.Title>
            <Button variant="primary">Add Questions</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              {" "}
              <div
                className="card-badge"
                style={{ backgroundColor: "#FBE341" }}
              >
                <FaIcons.FaBookReader />{" "}
              </div>{" "}
              <span className="card-head-span">
                {" "}
                <h4 style={{ color: "#FBE341", fontWeight: "700" }}>
                  100
                </h4>{" "}
                <Card.Text>Total Tests</Card.Text>
              </span>
            </Card.Title>
            <Button variant="primary">Add Test</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              {" "}
              <div
                className="card-badge"
                style={{ backgroundColor: "#5EBF9E" }}
              >
                <FaIcons.FaIdBadge />{" "}
              </div>{" "}
              <span className="card-head-span">
                {" "}
                <h4 style={{ color: "#5EBF9E", fontWeight: "700" }}>26</h4>{" "}
                <Card.Text>Total Batches</Card.Text>
              </span>
            </Card.Title>

            <Button variant="primary">Add Batches</Button>
          </Card.Body>
        </Card>
      </div>

      <div className="row dashboard-row-2">
        <div className="col-8">
          <Card className="graph-card">
            <Card.Body>
              <LineChart
  width={400}
  height={280}
  data={data}
  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
>
  <XAxis dataKey="name" />
  <Tooltip />
  <CartesianGrid stroke="#f5f5f5" />
  <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
</LineChart>
            </Card.Body>
          </Card>{" "}
          <div class="container progress-row">
             <div class="row">
              <div class="col-md-3 col-sm-6">
                <div class="progress yellow">
                  <span class="progress-left">
                    <span class="progress-bar"></span>
                  </span>
                  <span class="progress-right">
                    <span class="progress-bar"></span>
                  </span>
                  <div class="progress-value">75%</div>
                </div>
              </div>


              <div class="card mb-3" style={{maxWidth: "20rem", backgroundColor : "#FDF18F", color:"Black", fontSize:"1rem"}}>
  <div class="card-header">important tasks</div>
  <div class="card-body">
      <ul style={{listStyle:"none", padding: "5px"}}>
        <li>Schedule tests for May month</li>
        <li>Send Emails to candidates</li>
        <li>Create Users</li>
        <li>Monitor Exams</li>
        <li>Schedule tests for May month</li>
        </ul>
    </div>
</div>


            </div>
          </div>
        </div>
        <div className="col-3 activity-col">
          <Card>
            <Card.Body className="dashboard-activities">
              <h5>Latest Activities</h5>
              <ul className="list-head">
                <li className="active">
                  <a href="/#"> Me </a>
                </li>
                <li>
                  <a href="/#">Faculty</a>
                </li>
                <li>
                  <a href="/#">Candidate</a>
                </li>
              </ul>

              <ul className="list-body">
                <li>
                  <a>Created Users</a>
                </li>
                <li>
                  <a>Sent mails to Students</a>
                </li>
                <li>
                  <a>Scheduled 3 Tests</a>
                </li>
                <li>
                  <a>Created Users</a>
                </li>
                <li>
                  <a>Sent mails to Students</a>
                </li>
                <li>
                  <a>Scheduled 3 Tests</a>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
