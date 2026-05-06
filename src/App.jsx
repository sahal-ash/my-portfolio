import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const skills = [
  {
    category: "Programming & ML",
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "MediaPipe", "DeepFace", "SQL"],
  },
  {
    category: "Machine Learning",
    items: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Feature Engineering"],
  },
  {
    category: "Computer Vision",
    items: ["OpenCV", "MediaPipe", "Image Processing"],
  },
  {
    category: "Data Visualization",
    items: ["Power BI", "Tableau", "Matplotlib", "Seaborn"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "VS Code", "PyCharm", "Google Colab", "Excel", "Streamlit"],
  },
];

const projects = [
  {
    title: "Employee Attrition Prediction",
    desc: "Developed a Scikit-learn classification model to predict employee attrition, achieving 85% accuracy. Conducted data preprocessing and feature analysis using Pandas and NumPy, evaluating performance with precision (0.82), recall (0.80), and F1-score (0.81).",
    img: "/images/employee attrition.png",
    tags: ["Scikit-learn", "Pandas", "NumPy", "Classification"],
    github: "#",
  },
  {
    title: "Broken Road Detection Using CNNs",
    desc: "Designed and trained a TensorFlow-based CNN model for road condition classification, achieving 90% accuracy. Integrated the model into a Streamlit application for real-time image and webcam-based analysis to support urban planning and road safety.",
    img: "/images/broken road detection.png",
    tags: ["TensorFlow", "CNN", "Streamlit", "Computer Vision"],
    github: "#",
  },
  {
    title: "AI Smart Photography Assistant",
    desc: "Built a real-time AI system using TensorFlow, OpenCV, and MediaPipe to automatically capture optimal moments, achieving 88% detection accuracy. Developed an interactive Streamlit interface for webcam-based analysis, enhancing usability for event and sports photography.",
    img: "/images/ai photo assist.png",
    tags: ["TensorFlow", "OpenCV", "MediaPipe", "Streamlit"],
    github: "#",
  },
];

export default function App() {
  return (
    <div className="portfolio-bg">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">MS.</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="portfolio-container">
        {/* Hero */}
        <motion.section
          className="hero-section"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div className="hero-photo-wrap" variants={fadeUp}>
            <img src="/images/my-photo.jpg" alt="Muhammed Sahal" className="hero-photo" />
          </motion.div>

          <motion.div className="hero-content" variants={fadeUp}>
            <div className="hero-badge">
              <span className="dot"></span>
              Open to opportunities
            </div>
            <h1 className="hero-name">
              <span className="gradient-text">Muhammed Sahal</span>
            </h1>
            <p className="hero-title">Data Scientist · ML Engineer · AI Developer</p>
            <p className="hero-summary">
              Data Science Graduate with a B.Sc. in Computer Science and currently pursuing an MCA (IGNOU).
              Hands-on experience in machine learning, deep learning, computer vision, and data analytics
              through a 6-month industry internship. Passionate about solving real-world problems using
              data-driven and AI-based solutions.
            </p>
            <div className="hero-links">
              <a href="mailto:sahalts999@gmail.com" className="hero-link primary">✉ Get in Touch</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hero-link secondary">
                LinkedIn ↗
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hero-link secondary">
                GitHub ↗
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* About */}
        <motion.section id="about" className="section" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <div className="section-header">
            <div className="section-icon">👤</div>
            <h2 className="section-title">About Me</h2>
            <div className="section-line"></div>
          </div>
          <div className="glass-card">
            <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "15px" }}>
              Data Science Graduate with a B.Sc. in Computer Science and currently pursuing an MCA from IGNOU.
              I have hands-on experience in machine learning, deep learning, computer vision, and data analytics
              through a 6-month industry internship at Luminar Technolab. Skilled in Python, SQL, Power BI, and
              end-to-end model development — from data preprocessing to deployment. Passionate about solving
              real-world problems using data-driven and AI-based solutions.
            </p>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section id="education" className="section" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <div className="section-header">
            <div className="section-icon">🎓</div>
            <h2 className="section-title">Education</h2>
            <div className="section-line"></div>
          </div>
          <div className="education-grid">
            <div className="glass-card">
              <p className="edu-degree">Master of Computer Applications (MCA)</p>
              <p className="edu-school">Indira Gandhi National Open University (IGNOU) — Distance</p>
              <p className="edu-year">2024 — Present</p>
            </div>
            <div className="glass-card">
              <p className="edu-degree">B.Sc. Computer Science</p>
              <p className="edu-school">University of Calicut</p>
              <p className="edu-year">2021 — 2024</p>
            </div>
          </div>
        </motion.section>

        {/* Experience */}
        <motion.section id="experience" className="section" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <div className="section-header">
            <div className="section-icon">💼</div>
            <h2 className="section-title">Experience</h2>
            <div className="section-line"></div>
          </div>
          <div className="glass-card experience-card">
            <div className="exp-header">
              <div>
                <p className="exp-role">Data Science Intern</p>
                <p className="exp-company">Luminar Technolab — Kakkanad, Kochi</p>
              </div>
              <span className="exp-date">Jul 2024 — Mar 2025</span>
            </div>
            <ul className="exp-list">
              <li>Developed machine learning models using Python (Scikit-learn, TensorFlow), improving prediction accuracy by 25% through feature engineering and hyperparameter tuning.</li>
              <li>Optimized complex SQL queries for large datasets, reducing query execution time by 15%.</li>
              <li>Designed interactive Power BI dashboards to deliver actionable insights and support data-driven decision-making.</li>
              <li>Implemented end-to-end data pipelines (data cleaning, feature selection, model training, and evaluation) while collaborating in an Agile environment.</li>
            </ul>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section id="projects" className="section" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <div className="section-header">
            <div className="section-icon">🚀</div>
            <h2 className="section-title">Projects</h2>
            <div className="section-line"></div>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <motion.div key={i} className="glass-card project-card" variants={fadeUp} whileHover={{ y: -6 }}>
                <div className="project-img-wrap">
                  <img src={p.img} alt={p.title} />
                  <div className="project-img-overlay"></div>
                </div>
                <div className="project-body">
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map((tag, j) => (
                      <span key={j} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section id="skills" className="section" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <div className="section-header">
            <div className="section-icon">⚡</div>
            <h2 className="section-title">Technical Skills</h2>
            <div className="section-line"></div>
          </div>
          <div className="skills-grid">
            {skills.map((cat, i) => (
              <motion.div key={i} className="glass-card" variants={fadeUp}>
                <p className="skill-category-title">{cat.category}</p>
                <div className="skill-tags">
                  {cat.items.map((skill, j) => (
                    <span key={j} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section id="contact" className="section" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <div className="section-header">
            <div className="section-icon">📬</div>
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-line"></div>
          </div>
          <div className="contact-grid">
            <a href="mailto:sahalts999@gmail.com" className="contact-item">
              <span className="contact-icon">✉</span>
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value">sahalts999@gmail.com</p>
              </div>
            </a>
            <a href="tel:+918078336889" className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <p className="contact-label">Phone</p>
                <p className="contact-value">+91 8078336889</p>
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-item">
              <span className="contact-icon">🔗</span>
              <div>
                <p className="contact-label">LinkedIn</p>
                <p className="contact-value">linkedin.com</p>
              </div>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-item">
              <span className="contact-icon">💻</span>
              <div>
                <p className="contact-label">GitHub</p>
                <p className="contact-value">github.com</p>
              </div>
            </a>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <p className="contact-label">Location</p>
                <p className="contact-value">Thrissur, Kerala</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="footer">
          <p>© 2025 Muhammed Sahal. Built with React & Framer Motion.</p>
        </footer>
      </div>
    </div>
  );
}
