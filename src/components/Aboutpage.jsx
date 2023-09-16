import { Container, Row, Col } from 'react-bootstrap'
import Marquee from "react-fast-marquee";
import { skillsData } from '../data/SkillsData';
import { skillsImage } from '../utils/SkillsImage';
import "../pages/style.css";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBCardSubTitle
  } from 'mdb-react-ui-kit';
  


function Aboutpage() {
    return (
      <div className="aboutpagebackground">
        <Container>
          <Row className="textbackground">
            <Col md={7}>
              <h3 className="aboutmetext">
                About <span>Me</span>
              </h3>
              <p className="aboutdetails">
                Detail-oriented team player with strong organizational skills.
                Ability to handle multiple projects simultaneously with a high
                degree of accuracy. Expert on business and systems requirements,
                user acceptance testing, and end-user training. Accomplished at
                leveraging past lessons to inform future decision-making.
                Organized and dependable candidate successful at managing
                multiple priorities with a positive attitude. Willingness to
                take on added responsibilities to meet team goals.
              </p>
              <div className="skillsContainer">
                <div className="skill--scroll">
                  <Marquee
                    gradient={false}
                    speed={60}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                  >
                    {skillsData.map((skill, id) => (
                      <div className="skill--box" key={id}>
                        <img
                          className="skill-image"
                          src={skillsImage(skill)}
                          alt={skill}
                        />
                        <p>{skill}</p>
                      </div>
                    ))}
                  </Marquee>
                </div>
              </div>
            </Col>
            <Col md={5}>
              <div className="webimage"></div>
            </Col>
          </Row>
          <br />
          <Row className="textbackground">
            <Col md={12}>
              <h3 className="aboutmetext">Academics</h3>
              <p className="aboutdetails">Educational Background</p>
              <MDBRow className="row-cols-1 row-cols-md-2 g-5" style={{textAlign:'center'}}>
                <MDBCol>
                <MDBCard className='card-details border-light' style={{ backgroundColor: 'transparent'}}>
                    <MDBCardBody>
                    <MDBCardSubTitle>2018-2021</MDBCardSubTitle>
                      <MDBCardTitle>Asia Pacific University</MDBCardTitle>
                      <MDBCardText>
                      Bachelor of Science in Information Technology Specialism in Internet of Things
                      <p>Achieved APU Merit Scholarship with CGPA 3.50</p>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                <MDBCard className='card-details border-light' style={{ backgroundColor: 'transparent'}}>
                    <MDBCardBody>
                    <MDBCardSubTitle>2016-2018</MDBCardSubTitle>
                      <MDBCardTitle>Methodist Binjai</MDBCardTitle>
                      <MDBCardText>
                      General Studies
                      <p>Averall Score 91/100</p>
                      <br/>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </Col>
           
          </Row>
          <br/>
          {/* Experience */}
          <Row className="textbackground">
            <Col md={12}>
              <h3 className="aboutmetext">Experience</h3>
              <p className="aboutdetails">Professional Experience</p>
              <MDBRow className="row-cols-1 row-cols-md-2 g-3" style={{textAlign:'center'}}>
                <MDBCol>
                  <MDBCard className='card-details border-light' style={{ backgroundColor: 'transparent'}}>
                    <MDBCardBody>
                    <MDBCardSubTitle>2022-now</MDBCardSubTitle>
                      <MDBCardTitle>Professional Services Engineer <br/> Juris Technologies</MDBCardTitle>
                      <MDBCardText>
                      <ul>
                        <li>Translate business requirements and technical information into non-technical terms for communication and collaboration with development, operations and leadership groups</li>
                        <li>Investigated and fixed technical issues in the integration of digital documents between front-end and back-end applications</li>
                        <li>Provide customer examples and data for reported issues, work cross-functionally with support teams to establish workarounds for issues requiring funding for permanent resolution, and conduct tests on development fixes to ensure changes are working as expected.</li>
                        <li>Provide customer examples and data for reported issues, work cross-functionally with support teams to establish workarounds for issues requiring funding for permanent resolution, and conduct tests on development fixes to ensure changes are working as expected.</li>
                      </ul>
                      <br/><br/><br/><br/>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol>
                <MDBCard className='card-details border-light' style={{ backgroundColor: 'transparent'}}>
                <MDBCardBody>
                    <MDBCardSubTitle>2021-2022</MDBCardSubTitle>
                      <MDBCardTitle> Web Developer <br/> Limitless Technology </MDBCardTitle>
                      <MDBCardText>
                      <ul>
                      <li>Coded websites using HTML, CSS, JavaScript, and jQuery languages.</li>
                      <li>Planned website development, converting mockups into usable web presence with HTML, JavaScript, AJAX, and JSON coding.</li>
                      <li>Multi-tasked across multiple functions and roles to meet deadlines and organizational expectations.</li>
                      <li>Oversaw back-end development using PHP to maintain website integrity.</li>
                      <li>Oversaw technical issues and troubleshooting requests to resolve user problems.</li>
                      <li>Determined coding requirements for specialized scripts.</li>
                      <li>Implemented changes and integrated requested elements to streamline business operations.</li>
                      <li>Conceived and built optimized landing pages in HTML and CSS for integration and cross-browser compatibility.</li>
                      <li>Completed full redesigns of existing websites to improve navigation, enhance visuals and strengthen search engine rankings.</li>
                      <li>Collected, defined and translated user requirements into project designs and implementation plans.</li>
                      <li>Performed unit testing of web applications and troubleshot issues.</li>
                      </ul>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
              <MDBRow className="row-cols-1 row-cols-md-1" style={{textAlign:'center'}}>
              <MDBCol>
              <MDBCard className='card-details border-light' style={{ backgroundColor: 'transparent'}}>
                    <MDBCardBody>
                    <MDBCardSubTitle>July 2020 - October 2020</MDBCardSubTitle>
                      <MDBCardTitle>Software Developer (Internship) <br/> QubeApps Solution Sdn Bhd</MDBCardTitle>
                      <MDBCardText>
                      <ul>
                      <li>Collaborated on stages of systems development lifecycle from requirement gathering to production releases.</li>
                      <li>Coordinated with project management on database development timelines.</li>
                      <li>Discussed issues with team members to provide resolution and apply best practices.</li>
                      <li>Designed customized solutions for proposals to potential customers.</li>
                      <li>Documented technical workflows and knowledge to educate newly hired employees.</li>
                      <li>Developed software for desktop and mobile operating systems.</li>
                      <li>Documented software development methodologies in technical manuals to be used by IT personnel in future projects.</li>
                      <li>Built databases and table structures for web applications.</li>
                      </ul>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default Aboutpage