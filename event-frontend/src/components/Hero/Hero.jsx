import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
          alt="Event Management Background" 
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Manage Your Events Effortlessly</h1>
            <p>Organize, track, and never miss an important event again. Your personal event management solution with AI assistance.</p>
            <div className="hero-features">
              <span className="feature-tag">📅 Smart Scheduling</span>
              <span className="feature-tag">🎯 Status Tracking</span>
              <span className="feature-tag">🤖 AI Assistant</span>
              <span className="feature-tag">🔍 Smart Search</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;