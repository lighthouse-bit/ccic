import React from "react";
import './admin.css'; // Import custom CSS
import rounded from '../../Components/Assests/rounded-logo.png'
import {
  Bell,
  User,
  PieChart,
  FileText,
  MessageSquare,
  DollarSign,
  Settings,
  LogOut,
} from "lucide-react";

const Admin = () => {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div>
          <img src={rounded} alt="Logo" />
        </div>
        <nav>
          <h3>General</h3>
          <hr />
          <ul>
            <li><PieChart /> Dashboard</li>
            <li><User /> User Profile</li>
            <li><FileText /> Typography</li>
            <li><MessageSquare /> Messages</li>
            <li><DollarSign /> Donations</li>
          </ul>
          <h3>Account</h3>
          <hr />
          <ul>
            <li><Settings /> Settings</li>
            <li><LogOut /> Logout</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="search-bar">
          <input type="text" placeholder="Search" />
          <div className="search-icons">
            <Bell />
            <User />
          </div>
        </header>

        <h1 className="dashboard-title">WELCOME BACK, ADMIN!</h1>

        <div className="dashboard-cards">
          <div className="card yellow">
            <h2>Used Space</h2>
            <p>20/50GB</p>
            <div className="card-info">
              <p2>jlkjkj</p2>
            </div>
          </div>
          <div className="card green">
            <h2>Donations</h2>
            <p>$21,000</p>
            <div className="card-info">
              <p2>jlkjkj</p2>
            </div>
          </div>
          <div className="card pink">
            <h2>Messages</h2>
            <p>14</p>
            <div className="card-info">
              <p2>jlkjkj</p2>
            </div>
          </div>
          <div className="card purple">
            <h2>New Followers</h2>
            <p>26</p>
            <div className="card-info">
              <p2>jlkjkj</p2>
            </div>
          </div>
        </div>

        <div className="middle-section">
            <div className="middle-card">
              <div className="middlecard-upper">
                <div className="upper-text">
                  <p>Total Donation</p>
                  <p>$55,000</p>
                </div>
                <div></div>
              </div>
              <div className="middlecard-lower">Increase</div>
            </div>
            <div className="middle-card">
              <div className="middlecard-upper">
                <div className="upper-text">
                  <p>Total Donation</p>
                  <p>$55,000</p>
                </div>
                <div></div>
              </div>
              <div className="middlecard-lower">Increase</div>
            </div>
            <div className="middle-card">
              <div className="middlecard-upper">
                <div className="upper-text">
                  <p>Total Donation</p>
                  <p>$55,000</p>
                </div>
                <div></div>
              </div>
              <div className="middlecard-lower">Increase</div>
            </div>
        </div>

        <section className="updates-section">
          <div className="inner-update">
            <h2>Latest Updates</h2>
            <hr />
            <ul>
              <li><span>2 hours ago</span> +3 new followers</li>
              <li><span>4 hours ago</span> Michael posted a blog</li>
              <li><span>6 hours ago</span> You received $300!</li>
            </ul>
          </div>
          <hr />
          <div className="update-btn"><button>View all updates</button></div>
          
        </section>
      </main>
    </div>
  );
};

export default Admin;
