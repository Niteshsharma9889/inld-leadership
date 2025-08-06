// // src/App.js
// import React from "react";
// import Navbar from "./Navbar";
// import "./App.css";

// function App() {
//   return (
//     <div>
//       <Navbar />

//       {/* Leadership Section */}
//       <div className="leadership-section">
//         <h1>Our Leadership</h1>
//         <p>
//           Meet the leaders who have shaped INLD's journey and continue to work for the
//           development of Haryana and the welfare of its people.
//         </p>
//       </div>

//       {/* Chautala Legacy Section */}
//       <div className="legacy-section">
//         <h2>The Chautala Legacy</h2>
//         <p>
//           The Indian National Lok Dal carries forward the rich political legacy of the Chautala family, 
//           which has been at the forefront of Haryana politics for over five decades. 
//           From Chaudhary Devi Lal's vision of rural development to the current generation's 
//           focus on modernization and youth empowerment, the family has consistently 
//           championed the cause of farmers and rural communities.
//         </p>
//         <div className="legacy-features">
//           <div className="legacy-item">
//             <div className="legacy-icon-circle">🌾</div>
//             <h4>Agricultural Heritage</h4>
//             <p>Deep roots in farming community with firsthand understanding of agricultural challenges.</p>
//           </div>
//           <div className="legacy-item">
//             <div className="legacy-icon-circle">🏛️</div>
//             <h4>Political Experience</h4>
//             <p>Decades of experience in governance at state and national levels.</p>
//           </div>
//           <div className="legacy-item">
//             <div className="legacy-icon-circle">👥</div>
//             <h4>People's Connect</h4>
//             <p>Strong grassroots connection with the people of Haryana across all communities.</p>
//           </div>
//         </div>
//       </div>

//       {/* Party Organization Section */}
//       <div className="organization-section">
//         <h2>Party Organization</h2>
//         <div className="organization-grid">
//           <div className="org-card">
//             <div className="org-icon">👤</div>
//             <h4>Party President</h4>
//             <p>Overall leadership and strategic direction</p>
//           </div>
//           <div className="org-card">
//             <div className="org-icon">👥</div>
//             <h4>Working Committee</h4>
//             <p>Policy formulation and decision making</p>
//           </div>
//           <div className="org-card">
//             <div className="org-icon">📅</div>
//             <h4>District Units</h4>
//             <p>Local organization and ground operations</p>
//           </div>
//           <div className="org-card">
//             <div className="org-icon">🎯</div>
//             <h4>Youth Wing</h4>
//             <p>Future leaders and fresh perspectives</p>
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-about">
//             <div className="footer-logo">
//               <div className="logo-circle">INLD</div>
//               <div>
//                 <h3>Indian National Lok Dal</h3>
//                 <p>Serving the Nation</p>
//               </div>
//             </div>
//             <p>
//               Committed to building a prosperous, inclusive, and sustainable India 
//               where every citizen has equal opportunities to grow and contribute.
//             </p>
//           </div>
//           <div className="footer-links">
//             <h4>Quick Links</h4>
//             <a href="#">About INLD</a>
//             <a href="#">Our Manifesto</a>
//             <a href="#">Leadership</a>
//             <a href="#">News & Events</a>
//           </div>
//           <div className="footer-contact">
//             <h4>Contact</h4>
//             <p>123 Janpath, New Delhi</p>
//             <p>Phone: +91-11-2345-6789</p>
//             <p>Email: info@inld.org.in</p>
//             <div className="social-icons">
//               <a href="#"><i className="fab fa-facebook-f"></i></a>
//               <a href="#"><i className="fab fa-twitter"></i></a>
//               <a href="#"><i className="fab fa-youtube"></i></a>
//             </div>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>© 2025 Indian National Lok Dal. All rights reserved.</p>
//           <div>
//             <a href="#">Privacy Policy</a>
//             <a href="#">Terms of Service</a>
//             <a href="#">Disclaimer</a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;

// src/App.js
import React from "react";
import Navbar from "./Navbar";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      {/* Leadership Section */}
      <div className="leadership-section">
        <h1>Our Leadership</h1>
        <p>
          Meet the leaders who have shaped INLD's journey and continue to work for the
          development of Haryana and the welfare of its people.
        </p>
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
          <div className="legacy-item">
            <div className="legacy-icon-circle">🌾</div>
            <h4>Agricultural Heritage</h4>
            <p>Deep roots in farming community with firsthand understanding of agricultural challenges.</p>
          </div>
          <div className="legacy-item">
            <div className="legacy-icon-circle">🏛️</div>
            <h4>Political Experience</h4>
            <p>Decades of experience in governance at state and national levels.</p>
          </div>
          <div className="legacy-item">
            <div className="legacy-icon-circle">👥</div>
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
    <span className="follow-text">Follow us:</span>
    <a href="#" aria-label="Facebook"><FaFacebookF /></a>
    <a href="#" aria-label="Twitter"><FaTwitter /></a>
    <a href="#" aria-label="YouTube"><FaYoutube /></a>
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
