import { useEffect, useState, useRef } from 'react'
import unitsLogo from './assets/logo_units.png'
import aboutPhoto from './assets/elia_about.jpg'
import './styles/contact.css'
import './styles/aboutme.css'
import './styles/skills.css'
import './styles/projects.css'
import { SiGmail } from 'react-icons/si'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import borisProject from './assets/boris_project.png'
import icaroProject from './assets/Icaro_project.png'


function App() {

  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const projectCarouselRef = useRef<HTMLDivElement>(null)
  const [activeProject, setActiveProject] = useState(0)

    const updateActiveProject = () => {
      const carousel = projectCarouselRef.current
      if (!carousel) return

      const cards = carousel.querySelectorAll('.project-card')
      const rect = carousel.getBoundingClientRect();
      const center = rect.left + rect.width / 2;

      let closestIndex = 0
      let closestDistance = Infinity

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect()
        const cardCenter = rect.left + rect.width / 2
        const distance = Math.abs(center - cardCenter)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActiveProject(previous =>
        previous === closestIndex ? previous : closestIndex
      )
    }
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

          

            <div
              className="projects-carousel"
              ref={projectCarouselRef}
              onScroll={updateActiveProject}
            >

              <div className="projects-carousel-track">

                <article
                  className={`project-card ${
                    activeProject === 0 ? 'is-active' : ''
                  }`}
                >
                  <div className="project-card-top">
                    <span>01 / UNITS RACING TEAM</span>
                    <span>OCTOBER 2025 — AUGUST 2026</span>
                  </div>

                  <div className="project-preview-header">
                    <span className="project-name">
                      FORMULA SAE VEHICLE TELEMETRY SYSTEM
                    </span>

                    <h3>BORIS</h3>
                  </div>

                  <div className="project-preview-content">
                    <p className="project-preview-description">
                      Embedded telemetry system for real-time vehicle data
                      acquisition, decoding and persistence.
                    </p>

                    <div className="project-preview-image">
                      <img
                        src={borisProject}
                        alt="BORIS Formula SAE telemetry system"
                      />
                    </div>
                  </div>

                  <div className="project-preview-bottom">
                    <span className="project-preview-link">
                      VIEW PROJECT →
                    </span>
                  </div>
                </article>


                <article
                  className={`project-card ${
                    activeProject === 1 ? 'is-active' : ''
                  }`}
                >
                  <div className="project-card-top">
                    <span>02 / UNITS NEXUS ROBOTICS</span>
                    <span>JULY 2026 — PRESENT</span>
                  </div>

                  <div className="project-preview-header">
                    <span className="project-name">
                      5-DOF ROBOTIC ARMS TELEOPERATION SYSTEM
                    </span>

                    <h3>DEDALO & ICARO</h3>
                  </div>

                  <div className="project-preview-content">
                    <p className="project-preview-description">
                      Teleoperation system in which DEDALO is manually controlled
                      and ICARO reproduces its movements through software.
                    </p>

                    <div className="project-preview-image">
                      <img
                        src={icaroProject}
                        alt="DEDALO and ICARO robotic arms"
                      />
                    </div>
                  </div>

                  <div className="project-preview-bottom">
                    <span className="project-preview-link">
                      VIEW PROJECT →
                    </span>
                  </div>
                </article>
              </div>
            </div>

            <div className="projects-scroll-hint">
              <span>SWIPE TO EXPLORE</span>
            </div>

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

            <div className="about-text">

                <p>
                  These are technologies I have worked with hands-on through 
                  academic projects and coursework. While I may not use 
                  all of them regularly today, <strong>my practical experience 
                  allows me to quickly refresh and apply them when needed.</strong>
                </p>

              </div>

            <div className="skill-capsules">

              {/* PROGRAMMING LANGUAGES */}
              <div className="skill-capsule technologies-capsule">

                <div className="skill-capsule-title">
                  <span>01</span>
                  <h3>PROGRAMMING LANGUAGES</h3>
                </div>

                <div className="skill-icons">

                  <div className="skill-icon-item" data-name="C">
                    <img src="/icons/c-logo.png" alt="C" />
                  </div>

                  <div className="skill-icon-item" data-name="C#">
                    <img src="/icons/cs-logo.jpg" alt="C#" />
                  </div>

                  <div className="skill-icon-item" data-name="Python">
                    <img src="/icons/python-logo.png" alt="Python" />
                  </div>

                  <div className="skill-icon-item" data-name="Java">
                    <img src="/icons/j-logo.png" alt="Java" />
                  </div>

                  <div className="skill-icon-item" data-name="SQL">
                    <img src="/icons/sql-logo.png" alt="SQL" />
                  </div>

                </div>
              </div>

              <div className="skill-capsule technologies-capsule">

                <div className="skill-capsule-title">
                  <span>02</span>
                  <h3>ENGINEERING &amp; ROBOTICS</h3>
                </div>

                <div className="skill-icons">

                  <div className="skill-icon-item" data-name="MATLAB">
                    <img src="/icons/matlab_logo.png" alt="MATLAB" />
                  </div>

                  <div className="skill-icon-item" data-name="Robotics Toolbox for Python">
                    <img src="/icons/rtp-logo.png" alt="Robotics Toolbox for Python" />
                  </div>

                </div>
              </div>

              <div className="skill-capsule technologies-capsule">

                <div className="skill-capsule-title">
                  <span>03</span>
                  <h3>TECHNOLOGIES &amp; PLATFORMS</h3>
                </div>

                <div className="skill-icons">

                  <div className="skill-icon-item" data-name="Git">
                    <img src="/icons/Git_icon.png" alt="Git" />
                  </div>

                  <div className="skill-icon-item" data-name="Raspberry Pi">
                    <img src="/icons/raspberry.png" alt="Raspberry Pi" />
                  </div>

                  <div className="skill-icon-item" data-name=".NET">
                    <img src="/icons/net.jpg" alt=".NET" />
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
                href="mailto:eliacovi2004@gmail.com"
                className="contact-social gmail"
                aria-label="Email"
              >
                <SiGmail />
              </a>

              <a
                href="https://www.linkedin.com/in/elia-covi"
                className="contact-social linkedin"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/eliacovi04"
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