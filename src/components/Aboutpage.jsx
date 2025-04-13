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
            <Col>
              <h3 className="aboutmetext">
                About <span>Me</span>
              </h3>
              <p className="aboutdetails">
              Detail-oriented and dependable tech professional with strong organizational skills and a proven ability to manage multiple projects simultaneously with high accuracy. Experienced in gathering business and system requirements, conducting user acceptance testing (UAT), and delivering end-user training. Known for being a team player with a positive attitude and a willingness to take on added responsibilities to achieve team goals. Adept at drawing on past experiences to make informed, future-oriented decisions.
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
          </Row>
          <br />
          <Row className="textbackground">
            <Col md={12}>
              <h3 className="aboutmetext">Academics</h3>
              <p className="aboutdetails">Educational Background</p>
              <MDBRow className="row-cols-1 row-cols-md-2 g-5" style={{textAlign:'left'}}>
                <MDBCol>
                <MDBCard className='card-details border-light' style={{ backgroundColor: 'transparent'}}>
                    <MDBCardBody>
                    <MDBCardSubTitle>2018-2021</MDBCardSubTitle>
                      <MDBCardTitle>Asia Pacific University</MDBCardTitle>
                      <MDBCardText>
                      BSc.(Hons) in Information Technology Specialism in Internet of Things (IoT)
                      <li>Achieved APU Merit Scholarship with CGPA 3.60</li>
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
                      <li>Averall Score 91/100</li>
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
              <MDBRow className="row-cols-1 row-cols-md-1 g-5">
                <MDBCol>
                  <MDBCard className='card-details border-light' style={{ backgroundColor: 'transparent'}}>
                    <MDBCardBody>
                    <MDBCardTitle>2022-now</MDBCardTitle>
                      <MDBCardTitle>IT Business Analyst <br/> Juris Technologies</MDBCardTitle>
                      <MDBCardText>
                      <ul>
                      <li>Developed web-based solutions, streamlining loan origination and servicing processes.</li>
                      <li>Played a key role in system go-live, ensuring smooth transition and minimal operational impact.</li>
                      <li>Guided junior analysts and programmers, providing mentorship and ensuring project success.</li>
                      <li>Advised stakeholders on aligning system capabilities with business needs in commercial banking.</li>
                      <li>Designed, developed, and maintained web applications, integrating backend solutions with PHP, PL/SQL, and SQL procedures.</li>
                      <li>Performed software testing, including functional, regression, and UAT,to ensure quality and system stability.</li>
                      <li>Assisted in analyzing business requirements and translating them into technical specifications.</li>
                      <li>Collaborated with development teams to design, test, and implement system solutions.</li>
                      <li>Assisted in software testing, debugging, and documenting system Functionalities.</li>
                      <li>Participated in meetings with stakeholders to gather requirements and present solutions.</li>
                      </ul>
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
              <MDBRow className="row-cols-1 row-cols-md-1 g-5">
              <MDBCol>
                <MDBCard className='card-details border-light' style={{ backgroundColor: 'transparent'}}>
                <MDBCardBody>
                    <MDBCardTitle>2021-2022</MDBCardTitle>
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
              <MDBRow className="row-cols-1 row-cols-md-1 g-5">
              <MDBCol>
                <MDBCard className='card-details border-light' style={{ backgroundColor: 'transparent'}}>
                  <MDBCardBody>
                    <MDBCardTitle>July 2020 - October 2020</MDBCardTitle>
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