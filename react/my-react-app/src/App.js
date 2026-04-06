import "./App.css";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">🎓 PlacementHub</div>

        <nav>
          <a href="/">Home</a>
          <a href="#features">Features</a>
          <a href="#companies">Companies</a>
          <a href="#contact">Contact</a>
          <button className="login-btn">Login</button>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <h1>PlacementHub</h1>

          <p>
            Streamline your campus recruitment journey with our comprehensive
            placement management system. Connect students, companies and
            opportunities seamlessly.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="placement-card">
            <h2>85%</h2>
            <p>Placement Rate</p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="students"
            className="hero-img"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="stat-box">
          <h2>450+</h2>
          <p>Active Students</p>
        </div>

        <div className="stat-box">
          <h2>85+</h2>
          <p>Partner Companies</p>
        </div>

        <div className="stat-box">
          <h2>200+</h2>
          <p>Successful Placements</p>
        </div>

        <div className="stat-box">
          <h2>12 LPA</h2>
          <p>Average Package</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <h2>Everything You Need for Successful Placements</h2>
        <p>
          Comprehensive tools designed for students, companies and administrators
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Student Dashboard</h3>
            <p>Track applications, eligibility and placement progress easily.</p>
          </div>

          <div className="feature-card">
            <h3>Company Portal</h3>
            <p>Companies can post jobs and shortlist candidates efficiently.</p>
          </div>

          <div className="feature-card">
            <h3>Admin Management</h3>
            <p>Admins can manage students, companies and recruitment drives.</p>
          </div>

          <div className="feature-card">
            <h3>Analytics</h3>
            <p>Visual insights into placements, packages and performance.</p>
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="companies" id="companies">
        <h2>Our Hiring Partners</h2>

        <div className="company-grid">
          <div className="company-card">Google</div>
          <div className="company-card">Microsoft</div>
          <div className="company-card">Amazon</div>
          <div className="company-card">Infosys</div>
          <div className="company-card">TCS</div>
          <div className="company-card">Wipro</div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta">
        <h2>Start Your Placement Journey Today</h2>
        <p>Join thousands of students already using PlacementHub</p>
        <button className="cta-btn">Register Now</button>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <h3>PlacementHub</h3>
          <p>Empowering students and companies for successful placements.</p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/">Features</a>
          <a href="/">Contact</a>
        </div>

        <p className="copyright">© 2026 PlacementHub. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;