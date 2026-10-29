import dedaloIcaroProject from '../assets/icaro_project.png'
import '../styles/dedaloicaro.css'

function DedaloIcaro() {
  return (
    <>
      <div className="background-lines" aria-hidden="true">
        <span className="bg-line bg-line-1" />
        <span className="bg-line bg-line-2" />
      </div>

      <nav className="navbar">
        <div className="navbar-inner">
          <a className="navbar-brand" href="/#home">
            EC
          </a>

          <div className="navbar-links">
            <a href="/#home">HOME</a>
            <a href="/#projects">PROJECTS</a>
            <a
              href="https://github.com/eliacovi04"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>
          </div>
        </div>
      </nav>

      <main className="dedica-page">

        {/* HERO */}
        <header className="dedica-hero">
          <div className="dedica-breadcrumb">
            <a href="/#projects">← BACK TO PROJECTS</a>
            <span>PROJECT 02 / CASE STUDY</span>
          </div>

          <div className="dedica-hero-grid">
            <div className="dedica-hero-copy">
              <p className="dedica-eyebrow">
                UNITS NEXUS ROBOTICS
              </p>

              <h1>DEDALO & ICARO</h1>

              <h2>MASTER–SLAVE ROBOTIC TELEOPERATION</h2>

              <p className="dedica-lead">
                From human motion to robotic motion:
                a robotics software project focused on
                joint mapping, servo control and real-time
                teleoperation between two robotic arms.
              </p>

              <div className="dedica-tags">
                <span>PYTHON</span>
                <span>ROBOTICS</span>
                <span>SERVO CONTROL</span>
                <span>TELEOPERATION</span>
              </div>
            </div>

            <div className="dedica-hero-image">
              <img
                src={dedaloIcaroProject}
                alt="Dedalo and Icaro robotic arms"
              />
              <span>FIG. 01 — DEDALO / ICARO TELEOPERATION SYSTEM</span>
            </div>
          </div>

          <div className="dedica-meta">
            <div>
              <span>ORGANIZATION</span>
              <strong>UniTS Nexus Robotics</strong>
            </div>

            <div>
              <span>MY ROLE</span>
              <strong>Robotics Software Developer</strong>
            </div>

            <div>
              <span>PERIOD</span>
              <strong>Jul 2026 — Oct 2026</strong>
            </div>

            <div>
              <span>DOMAIN</span>
              <strong>Robotics / Teleoperation</strong>
            </div>
          </div>
        </header>


        {/* 01 — INTRODUCTION & CONTEXT */}
        <section className="dedica-section" id="introduction">
          <div className="dedica-section-heading">
            <span>01 / CONTEXT</span>
            <h2>INTRODUCTION &amp; CONTEXT</h2>
          </div>

          <div className="dedica-section-deck">
            <p className="dedica-section-lead">
              Dedalo and Icaro are two robotic arms developed within
              UniTS Nexus Robotics as part of a master–slave
              teleoperation system. The project explores how the
              motion of one robotic arm can be captured, processed
              and reproduced by another arm in real time.
            </p>

            <div className="dedica-prose">
              <p>
                As an educational project within Nexus Robotics, the 
                team set out to develop a robotic system as a first 
                hands-on approach to the field of robotics. A kit of 
                Feetech servo motors from Seeed Studio was acquired 
                and used to build a pair of identical robotic arms. 
                One of them, Dedalo, is equipped with a handle at its 
                end-effector that allows an operator to move the arm 
                into different positions. The second arm, Icaro, is 
                designed to replicate Dedalo’s movements.
              </p>

              <p>
                The main challenge is not simply sending motor
                commands from one device to another. The joint
                configurations of the two systems have to be read,
                converted and mapped correctly, while accounting for
                differences in servo calibration, orientation and
                mechanical limits.
              </p>

              <p>
                My work focused on the software layer connecting
                the two robotic arms, with the goal of creating a
                reliable control pipeline capable of translating
                Dedalo's movements into corresponding movements
                of Icaro.
              </p>
            </div>
          </div>
        </section>


        {/* 02 — SYSTEM DESIGN & IMPLEMENTATION */}
        <section className="dedica-section" id="system-design">
          <div className="dedica-section-heading">
            <span>02 / SYSTEM DESIGN</span>
            <h2>SYSTEM DESIGN &amp; IMPLEMENTATION</h2>
          </div>

          <div className="dedica-section-deck">

            <div className="dedica-prose">
              <p>
                The teleoperation pipeline is structured around the
                acquisition of the master arm state, the conversion
                of its joint values into meaningful angular
                representations, and the generation of commands
                for the slave arm.
                The software, written in Python, communicates directly with the servo
                motors and handles the conversion between raw servo
                positions and joint angles. This intermediate
                representation makes it possible to reason about
                the robot configuration independently from the
                low-level motor values.
              </p>
            </div>

            <p className="dedica-section-lead">
              <br />From master motion to slave motion
            </p>

            <div className="dedica-prose">
              <p>
                Dedalo continuously provides the current position
                of its joints. These values are first converted from
                raw servo measurements into angular coordinates.
                The resulting joint configuration is then mapped
                onto the corresponding joints of Icaro.
                Before being sent to the slave arm, the desired
                angles are processed through the calibration layer,
                which translates the mathematical joint representation
                into the actual servo positions required by the
                hardware.
                The resulting control pipeline can be represented as:
              </p>

              <p>
                <b>
                  Dedalo raw positions → joint angles →
                  joint mapping → Icaro calibration → servo commands
                </b>
              </p>
            </div>


            <p className="dedica-section-lead">
              <br />Calibration and joint mapping
            </p>

            <div className="dedica-prose">
              <p>
                A significant part of the implementation involved
                determining the relationship between the physical
                configuration of each arm and the values reported
                by its servos. Different joints require different
                offsets, directions and operating ranges.
                The calibration layer therefore acts as an abstraction
                between the robotic model and the hardware. This
                allows the control software to operate using joint
                angles while the underlying servo interface handles
                the conversion into device-specific commands.
              </p>
            </div>

          </div>
        </section>


        {/* 04 — RESULTS & REFLECTIONS */}
        <section className="dedica-section dedica-final-section" id="results">
          <div className="dedica-section-heading">
            <span>03 / OUTCOME</span>
            <h2>RESULTS &amp; REFLECTIONS</h2>
          </div>

          <p className="dedica-section-lead">
            Building a working teleoperation system
          </p>

          <div className="dedica-result-bottom">

            <div className="dedica-prose">
              <p>
                The project resulted in a functional master–slave
                teleoperation pipeline connecting Dedalo and Icaro.
                The system is capable of reading the configuration
                of the master arm, processing its joint values and
                reproducing the corresponding configuration on the
                slave arm.
                More importantly, the project provided a practical
                foundation for experimenting with robotic modelling,
                servo control and motion generation on real hardware.
              </p>
            </div>


            <p className="dedica-section-lead">
              <br />Learning through hardware
            </p>

            <div className="dedica-prose">
              <p>
                Working directly with physical robotic arms made the
                relationship between mathematical models and real
                hardware particularly evident. Small differences in
                calibration, servo orientation and mechanical limits
                can have a significant effect on the resulting motion.
                This required approaching the problem not only as a
                software implementation task, but as an interaction
                between code, electronics and mechanical behaviour.
              </p>
            </div>


            <p className="dedica-section-lead">
              <br />An evolving robotics platform
            </p>

            <div className="dedica-prose">
              <p>
                The teleoperation system represents only the first
                stage of the project. Future development can introduce
                inverse kinematics, trajectory planning and computer
                vision, progressively moving from direct joint
                mirroring towards higher-level robotic behaviour.
                The project has strengthened my interest in robotics
                software that connects mathematical models and
                algorithms with physical machines, turning abstract
                representations of motion into real-world movement.
              </p>
            </div>

          </div>

          <div className="dedica-footer">
            <span>UNITS NEXUS ROBOTICS / DEDALO–ICARO</span>
            <a href="/#projects">BACK TO ALL PROJECTS ↑</a>
          </div>
        </section>

      </main>
    </>
  )
}

export default DedaloIcaro
