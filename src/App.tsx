import { useEffect, useState } from 'react'
import unitsLogo from './assets/logo_units.png'
import aboutPhoto from './assets/elia_about.jpg'
import './styles/contact.css'
import './styles/aboutme.css'
import './styles/skills.css'
import './styles/projects.css'
import { SiGmail } from 'react-icons/si'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import borisProject from './assets/boris_project.png'


function App() {

  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const sectionIds = [
      'home',
      'projects',
      'experience',
      'skills',
      'about',
      'contact',
    ]

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.35

      let currentSection = 'home'

      for (const id of sectionIds) {
        const section = document.getElementById(id)

        if (!section) continue

        const rect = section.getBoundingClientRect()

        if (rect.top <= marker) {
          currentSection = id
        }
      }

      setActiveSection(currentSection)
    }

    updateActiveSection()

    window.addEventListener('scroll', updateActiveSection)
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <>
      <div className="background-lines" aria-hidden="true">
        <span className="bg-line bg-line-1"></span>
        <span className="bg-line bg-line-2"></span>
      </div>

      <nav className="navbar">
        <div className="navbar-inner">

          <a
            className="navbar-brand"
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
          >
            EC
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="navbar-links">
            <a
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
            >
              HOME
            </a>

            <a
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
            >
              PROJECTS
            </a>

            <a
              href="#experience"
              className={activeSection === 'experience' ? 'active' : ''}
            >
              EXPERIENCE
            </a>

            <a
              href="#skills"
              className={activeSection === 'skills' ? 'active' : ''}
            >
              SKILLS
            </a>

            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
            >
              ABOUT ME
            </a>

            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
            >
              CONTACT
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? 'CLOSE' : 'MENU'}
          </button>

        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={`mobile-menu ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}
        >
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>
            HOME
          </a>

          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>
            PROJECTS
          </a>

          <a href="#experience" onClick={() => setMobileMenuOpen(false)}>
            EXPERIENCE
          </a>

          <a href="#skills" onClick={() => setMobileMenuOpen(false)}>
            SKILLS
          </a>

          <a href="#about" onClick={() => setMobileMenuOpen(false)}>
            ABOUT ME
          </a>

          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
            CONTACT
          </a>
        </div>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-topline">
            <span>PORTFOLIO / 2026</span>
          </div>

          <h1 className="hero-name">
           ELIA COVI
          </h1>

          <div className="hero-education">
            <span>COMPUTER ENGINEERING · MSc</span>
            <span>ROBOTICS & AI</span>
          </div>

          <div className="hero-flow">

            <span className="flow-end">FROM DATA</span>

            <div className="flow-system">

              <div className="flow-track"></div>

              <div className="flow-node flow-node-1">
                <span className="node-dot"></span>
                <span className="node-label">SENSE</span>
              </div>

              <div className="flow-node flow-node-2">
                <span className="node-dot"></span>
                <span className="node-label">COMPUTE</span>
              </div>

              <div className="flow-node flow-node-3">
                <span className="node-dot"></span>
                <span className="node-label">ACT</span>
              </div>

            </div>

            <span className="flow-end">TO MOTION</span>

          </div>          

          <h2 className="hero-field">
            ROBOTICS &amp;
            <br />
            EMBEDDED SYSTEMS
          </h2>

          <a className="hero-projects-link" href="#projects">
            VIEW PROJECTS ↓
          </a>
        </section>

        <section id="projects" className="projects-section">

          <div className="section-label">
            <span>01 /</span>
            <span>PROJECTS</span>
          </div>

          <div className="section-line" />

          <h2 className="projects-title">PROJECTS</h2>


          <article className="project-card">

            {/* MOBILE VERSION */}
            <div className="project-mobile">
              <span className="project-mobile-index">
                01 / UNITS RACING TEAM
              </span>

              <h3>BORIS</h3>

              <span className="project-mobile-name">
                FORMULA SAE VEHICLE TELEMETRY SYSTEM
              </span>

              <p>
                Embedded telemetry system for real-time vehicle data
                acquisition, decoding and persistence.
              </p>

              <span className="project-mobile-link">
                VIEW PROJECT →
              </span>
            </div>

            {/* TOP */}
            <div className="project-card-top">
              <span>01 / UNITS RACING TEAM</span>
              <span>October 2025 — PRESENT</span>
            </div>


            {/* HEADER */}
            <div className="project-header">

              <div>
                <span className="project-name">FORMULA SAE VEHICLE TELEMETRY SYSTEM</span>

                <h3>
                  BORIS
                </h3>
              </div>

              <span className="project-role">
                EMBEDDED SOFTWARE DEVELOPER
              </span>

            </div>


            {/* DESCRIPTION */}
            <p className="project-description">
              Embedded telemetry software running on the vehicle's Raspberry Pi.
              BORIS acquires raw data from the electronic boards, converts byte
              streams into structured telemetry, persists them into a session
              database and makes the data available to the visualization client.
            </p>


            {/* DETAILS */}
            <div className="project-details">

              <div className="project-detail-block">

                <span className="project-detail-label">
                  MY CONTRIBUTION
                </span>

                <p className="project-contribution-text">
                  I contributed to the database architecture and developed board-specific
                  devices that map incoming byte arrays into structured entities, following
                  the C data structures defined by the firmware team. I also worked on the
                  database writing pipeline that persists the decoded data.
                </p>
              </div>

              <div className="project-image">
                <img
                  src={borisProject}
                  alt="BORIS Formula SAE telemetry system"
                />
              </div>

            </div>


            {/* BOTTOM */}
            <div className="project-bottom">

              <div className="project-stack">
                <span>C#</span>
                <span>.NET</span>
                <span>RASPBERRY PI</span>
                <span>SQLITE</span>
                <span>EF CORE</span>
              </div>

              <span className="project-status">
                STATUS: VEHICLE INTEGRATION & TESTING
              </span>

            </div>

          </article>

          <article className="project-card">

            {/* MOBILE VERSION */}
              <div className="project-mobile">
                <span className="project-mobile-index">
                  02 / UNITS NEXUS ROBOTICS
                </span>

                <h3>ICARO</h3>

                <span className="project-mobile-name">
                  6-DOF ROBOTIC ARM CONTROL SYSTEM
                </span>

                <p>
                  Software for kinematics, motion control and physical
                  actuation of a 6-DOF robotic arm.
                </p>

                <span className="project-mobile-link">
                  VIEW PROJECT →
                </span>
              </div>

            {/* TOP */}
            <div className="project-card-top">
              <span>02 / UNITS NEXUS ROBOTICS</span>
              <span>July 2026 — PRESENT</span>
            </div>


            {/* HEADER */}
            <div className="project-header">

              <div>
                <span className="project-name">6-DOF ROBOTIC ARM CONTROL SYSTEM</span>

                <h3>
                  ROBOT NAME
                </h3>
              </div>

              <span className="project-role">
                ROBOTICS SOFTWARE DEVELOPER
              </span>

            </div>


            {/* DESCRIPTION */}
            <p className="project-description">
              Early-stage development of a 6-DOF robotic arm designed as a learning
              platform for robotic motion and control. The system uses a Raspberry Pi
              to receive target poses from a client, compute the corresponding joint
              angles and translate them into physical motor commands.
            </p>


            {/* DETAILS */}
            <div className="project-details">

              <div className="project-detail-block">

                <span className="project-detail-label">
                  MY CONTRIBUTION
                </span>

                <p className="project-contribution-text">
                  I am working on the software layer that translates target poses into
                  physical arm movement. So far, I have studied the motor vendor's
                  public codebase, developed test scripts for motor actuation and
                  successfully tested individual motor movement. I am also beginning
                  to work on inverse kinematics, with the goal of converting desired
                  end-effector poses into joint angles that can be sent to the motors.
                </p>
              </div>

            </div>


            {/* BOTTOM */}
            <div className="project-bottom">

              <div className="project-stack">
                <span>PYTHON</span>
                <span>RASPBERRY PI</span>
                <span>ROBOTICS</span>
                <span>INVERSE KINEMATICS</span>
              </div>

              <span className="project-status">
                STATUS: EARLY DEVELOPMENT
              </span>

            </div>

          </article>

        </section>

        <section className="experience-section" id="experience">
          <div className="section-header">
            <span className="section-index">02 / EXPERIENCE</span>

            <div className="section-divider"></div>

            <div className="section-title-row">
              <h2>EXPERIENCE</h2>
            </div>
          </div>

          <div className="experience-cards">

            <article className="experience-card">
              <div className="experience-card-top">
                <span className="experience-date">July 2026 — NOW</span>
              </div>

              <div className="experience-card-body">
                <span className="experience-type">
                  UNITS NEXUS ROBOTICS
                </span>

                <h3>ROBOTICS SOFTWARE DEVELOPER</h3>

                <div className="experience-tags">
                  <span>MOTOR INTERFACE</span>
                  <span>MOTION CONTROL</span>
                  <span>INVERSE KINEMATICS</span>
                </div>
              </div>
            </article>


            <article className="experience-card">
              <div className="experience-card-top">
                <span className="experience-date">October 2025 — NOW</span>
              </div>

              <div className="experience-card-body">
                <span className="experience-type">
                  UNITS RACING TEAM
                </span>

                <h3>EMBEDDED SOFTWARE DEVELOPER</h3>

                <div className="experience-tags">
                  <span>DATA ACQUISITION</span>
                  <span>PROTOCOL DECODING</span>
                  <span>DATA PERSISTANCE</span>
                </div>
              </div>
            </article>

          </div>

          <div className="education-block">

            <div className="education-main">

              <div className="education-heading">
                <span>02.1 / EDUCATION</span>
                <h3>EDUCATION</h3>
              </div>

              <div className="education-list">

                <div className="education-item">
                  <div className="education-year">
                    2026 — PRESENT
                  </div>

                  <div className="education-content">
                    <h4>MSc COMPUTER ENGINEERING</h4>
                    <p>Curriculum: Robotics &amp; Artificial Intelligence</p>
                    <span>University of Trieste</span>
                  </div>
                </div>

                <div className="education-item">
                  <div className="education-year">
                    2023 — 2026
                  </div>

                  <div className="education-content">
                    <h4>BSc ELECTRONIC & COMPUTER ENGINEERING</h4>
                    <p>Curriculum: Computer Engineering</p>
                    <span>University of Trieste</span>
                  </div>
                </div>

              </div>

            </div>

            <div className="education-university">
              <img src={unitsLogo} alt="University of Trieste" />
            </div>

          </div>

        </section>


        <section className="skills-section" id="skills">

          <div className="section-header">
            <span className="section-index">03 / SKILLS</span>

            <div className="section-divider"></div>

            <div className="section-title-row">
              <h2>SKILLS</h2>
            </div>
          </div>


          <div className="skills-list">

            <div className="skill-capsules">

              {/* PROGRAMMING */}
              <div className="skill-capsule programming-capsule">

                <div className="skill-capsule-title">
                  <span>01</span>
                  <h3>PROGRAMMING</h3>
                </div>

                <div className="skill-icons">

                  <div className="skill-icon-item" data-name="C">
                    <img src="/icons/c-logo.png" alt="C" />
                  </div>

                  <div className="skill-icon-item" data-name="C#">
                    <img src="/icons/cs-logo.jpg" alt="C#" />
                  </div>

                  <div className="skill-icon-item" data-name="Java">
                    <img src="/icons/j-logo.png" alt="Java" />
                  </div>

                  <div className="skill-icon-item" data-name="SQL">
                    <img src="/icons/sql-logo.png" alt="SQL" />
                  </div>

                </div>

              </div>


              {/* TECHNOLOGIES */}
              <div className="skill-capsule technologies-capsule">

                <div className="skill-capsule-title">
                  <span>02</span>
                  <h3>TECHNOLOGIES &amp; TOOLS</h3>
                </div>

                <div className="skill-icons">

                  <div className="skill-icon-item" data-name=".NET">
                    <img src="/icons/net.jpg" alt=".NET" />
                  </div>

                  <div className="skill-icon-item" data-name="Raspberry Pi">
                    <img src="/icons/raspberry.png" alt="Raspberry Pi" />
                  </div>

                  <div className="skill-icon-item" data-name="SQLite">
                    <img src="/icons/sqlite.png" alt="SQLite" />
                  </div>

                </div>

              </div>

            </div>


          </div>

        </section>

        <section className="about-section" id="about">

          <div className="section-header">
            <span className="section-index">04 / ABOUT ME</span>

            <div className="section-divider"></div>

            <div className="section-title-row">
              <h2>ABOUT ME</h2>
            </div>
          </div>


          <div className="about-main">

            <div className="about-photo">
              <img
                src={aboutPhoto}
                alt="Elia Covi"
              />

              <span className="about-photo-label">
                COMPUTER ENGINEERING · ROBOTICS & AI
              </span>
            </div>


            <div className="about-info">

              <div className="about-manifesto">
                <p>
                  SOFTWARE THAT
                  <br />
                  INTERACTS WITH THE
                  <br />
                  <span>PHYSICAL WORLD</span>
                </p>
              </div>


              <div className="about-text">

                <p>
                  Hi, I'm Elia. I'm currently pursuing an MSc in Computer
                  Engineering at the University of Trieste, where I previously
                  completed my Bachelor's degree in Electronic and Computer
                  Engineering.
                </p>

                <p>
                  I started this journey fascinated by technology and computers,
                  without yet knowing which direction I wanted to follow.
                  Through study, projects and hands-on experience, I gradually
                  discovered what really interests me.
                </p>

                <p>
                  I realized that software by itself was not what fascinated me
                  most. What really captured my attention was
                  <strong> software that interacts with the physical world</strong>:
                  code that becomes data, control, movement and observable
                  behaviour in real systems.
                </p>

                <p>
                  This is what led me towards embedded systems and, especially,
                  robotics. Today I am exploring this direction through the
                  Robotics &amp; AI curriculum of my Master's degree.
                </p>

              </div>

            </div>

          </div>

          <div className="beyond-engineering">

            <div className="beyond-heading">
              <span>04.1 / BEYOND ENGINEERING</span>
              <h3>BEYOND ENGINEERING</h3>
            </div>


            <div className="beyond-grid">

              <div className="beyond-item">
                <span className="beyond-icon">⚽</span>
                <span>FOOTBALL</span>
              </div>

              <div className="beyond-item">
                <span className="beyond-icon">🎸</span>
                <span>ELECTRIC GUITAR</span>
              </div>

              <div className="beyond-item">
                <span className="beyond-icon">✎</span>
                <span>WRITING</span>
              </div>

              <div className="beyond-item">
                <span className="beyond-icon">💪</span>
                <span>CALISTHENICS</span>
              </div>

            </div>

          </div>

        </section>


        <section className="contact-section" id="contact">

          <div className="contact-header">
            <span className="section-index">05 / CONTACT</span>

            <div className="section-divider"></div>
          </div>

          <div className="contact-content">

            <div className="contact-message">
              <h2>
                HAVE AN IDEA?
                <span>LET'S TALK.</span>
              </h2>

              <p>
                I'm always open to new ideas, projects and opportunities
                to build something interesting.
              </p>
            </div>

            <div className="contact-links">

              <a
                href="mailto:TUAMAIL@gmail.com"
                className="contact-social gmail"
                aria-label="Email"
              >
                <SiGmail />
              </a>

              <a
                href="TUO-LINK-LINKEDIN"
                className="contact-social linkedin"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="TUO-LINK-GITHUB"
                className="contact-social github"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

            </div>

          </div>

        </section>

      </main>
    </>
  )
}

export default App