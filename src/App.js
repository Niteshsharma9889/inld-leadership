// src/App.js
import React from "react";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  const leaders = [
    {
      name: "Chaudhary Om Prakash Chautala",
      role: "Party Patron & Former Chief Minister",
      experience: "50+ years",
      location: "Sirsa",
      education: "Graduate in Political Science",
      bio: "Founder of INLD in 1999 and former Chief Minister of Haryana (1999–2005). A veteran politician with over five decades of experience in public service, known for his dedication to farmers' welfare and rural development.",
      achievements: [
        "Founder and Patron of INLD",
        "Former Chief Minister of Haryana (1999–2005)",
        "Former Member of Parliament",
        "Pioneer of agricultural reforms in Haryana",
        "Advocate for farmers' rights for over 5 decades"
      ],
      social: { twitter: "@INLDHaryana", facebook: "Facebook", email: "Email" },
      image: ""
    },
    {
      name: "Abhay Singh Chautala",
      role: "Legislative Party Leader",
      experience: "30+ years",
      location: "Fatehabad",
      education: "Graduate in Arts",
      bio: "A prominent leader in Haryana politics, advocating for rural development, youth empowerment, and progressive agricultural policies.",
      achievements: [
        "Leader of the Opposition in Haryana Assembly",
        "Youth and sports development initiatives",
        "Policy reforms for rural employment",
        "Strong advocate for farmers’ rights"
      ],
      social: { twitter: "@AbhayChautala", facebook: "Facebook", email: "Email" },
      image: ""
    },
    {
      name: "Ajay Singh Chautala",
      role: "Senior Party Leader",
      experience: "35+ years",
      location: "Jind",
      education: "Post Graduate in Political Science",
      bio: "An experienced political leader, known for his work on education reforms and strengthening grassroots governance in Haryana.",
      achievements: [
        "Former Member of Parliament",
        "Introduced rural education programs",
        "Worked on infrastructure development projects",
        "Advocate for clean governance and transparency"
      ],
      social: { twitter: "@AjayChautala", facebook: "Facebook", email: "Email" },
      image: ""
    },
    {
      name: "Dushyant Chautala",
      role: "Young Political Leader",
      experience: "15+ years",
      location: "Uklana",
      education: "Graduate in Business Administration",
      bio: "A dynamic leader focused on youth-centric policies, industrial development, and technological advancement in Haryana.",
      achievements: [
        "Youngest elected MP in India (2014)",
        "Introduced entrepreneurship programs for youth",
        "Advocated for digital initiatives in governance",
        "Supporter of sports and cultural development"
      ],
      social: { twitter: "@DushyantChautala", facebook: "Facebook", email: "Email" },
      image: ""
    }
  ];

  return (
    <div>
      <Navbar />
      <div className="leadership-section">
        <h1>Our Leadership</h1>
        <p>
          Meet the leaders who have shaped INLD's journey and continue to work for the
          development of Haryana and the welfare of its people.
        </p>
        {leaders.map((leader, index) => (
          <div key={index} className={`leader-card ${index % 2 !== 0 ? "reverse" : ""}`}>
            <div className="leader-image">
              <img
                src={leader.image || "https://via.placeholder.com/300x300"}
                alt={leader.name}
              />
              <div className="location">{leader.location}</div>
            </div>
            <div className="leader-details">
              <h2>{leader.name}</h2>
              <h3>{leader.role}</h3>
              <div className="experience">📅 {leader.experience}</div>
              <p>{leader.bio}</p>
              <h4>🎓 Education</h4>
              <p>{leader.education}</p>
              <h4>Key Achievements</h4>
              <ul>
                {leader.achievements.map((ach, i) => (
                  <li key={i}>• {ach}</li>
                ))}
              </ul>
              <div className="social-links">
                <a href="#">{leader.social.twitter}</a>
                <a href="#">{leader.social.facebook}</a>
                <a href="#">{leader.social.email}</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chautala Legacy Section */}
      <div className="legacy-section">
        <h2>The Chautala Legacy</h2>
        <p>
          The Indian National Lok Dal carries forward the rich political legacy of the Chautala family, 
          which has been at the forefront of Haryana politics for over five decades. 
          From Chaudhary Devi Lal's vision of rural development to the current generation's 
          focus on modernization and youth empowerment, the family has consistently 
          championed the cause of farmers and rural communities.
        </p>
        <div className="legacy-features">
          <div className="legacy-card">
            <div className="legacy-icon">🌾</div>
            <h4>Agricultural Heritage</h4>
            <p>Deep roots in farming community with firsthand understanding of agricultural challenges.</p>
          </div>
          <div className="legacy-card">
            <div className="legacy-icon">🏛️</div>
            <h4>Political Experience</h4>
            <p>Decades of experience in governance at state and national levels.</p>
          </div>
          <div className="legacy-card">
            <div className="legacy-icon">👥</div>
            <h4>People's Connect</h4>
            <p>Strong grassroots connection with the people of Haryana across all communities.</p>
          </div>
        </div>
      </div>

      {/* Party Organization Section */}
      <div className="organization-section">
        <h2>Party Organization</h2>
        <div className="organization-grid">
          <div className="org-card">
            <div className="org-icon">👤</div>
            <h4>Party President</h4>
            <p>Overall leadership and strategic direction</p>
          </div>
          <div className="org-card">
            <div className="org-icon">👥</div>
            <h4>Working Committee</h4>
            <p>Policy formulation and decision making</p>
          </div>
          <div className="org-card">
            <div className="org-icon">📅</div>
            <h4>District Units</h4>
            <p>Local organization and ground operations</p>
          </div>
          <div className="org-card">
            <div className="org-icon">🎯</div>
            <h4>Youth Wing</h4>
            <p>Future leaders and fresh perspectives</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <div className="footer-logo">
              <div className="logo-circle">INLD</div>
              <div>
                <h3>Indian National Lok Dal</h3>
                <p>Serving the Nation</p>
              </div>
            </div>
            <p>
              Committed to building a prosperous, inclusive, and sustainable India 
              where every citizen has equal opportunities to grow and contribute.
            </p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#">About INLD</a>
            <a href="#">Our Manifesto</a>
            <a href="#">Leadership</a>
            <a href="#">News & Events</a>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>123 Janpath, New Delhi</p>
            <p>Phone: +91-11-2345-6789</p>
            <p>Email: info@inld.org.in</p>
            <div className="social-icons">
              <a href="#">f</a>
              <a href="#">t</a>
              <a href="#">▶</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Indian National Lok Dal. All rights reserved.</p>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
