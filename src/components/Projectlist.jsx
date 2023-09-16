import * as React from 'react';
import ProjectCard from "../components/Projectcard";
import { Container, Row, Col, Button } from "react-bootstrap";
import servicerecovery from '../Assets/images/project_rating_web.png'
import smartshelves from "../Assets/images/project_smart-shelves_iot.png";
import attendance from "../Assets/images/project.jpg";
import portfolio from "../Assets/images/project_portfolio.png";
import "../pages/style.css";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
  AiFillGithub,
  AiFillRead,
  AiFillInfoCircle
} from "react-icons/ai";
import { Icon } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  zIndex: "1000",
  overflowY: "auto"
};


function Projectlist() {
  const [serviceRecovery, setServiceRecovery] = React.useState(false);
  const [smartShelves, setSmartShelves] = React.useState(false);
  const [attendanceIOT, setAttendance] = React.useState(false);
  const [portfolioCV, setPortfolioCV] = React.useState(false);
  const handleProject1Open = () => setServiceRecovery(true);
  const handleProject1Close = () => setServiceRecovery(false);
  const handleProject2Open = () => setSmartShelves(true);
  const handleProject2Close = () => setSmartShelves(false);
  const handleProject3Open = () => setAttendance(true);
  const handleProject3Close = () => setAttendance(false);
  const handleProject4Open = () => setPortfolioCV(true);
  const handleProject4Close = () => setPortfolioCV(false);
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={servicerecovery}
                title="Service Recovery Rating"
                description="Customer Service Recovery Rating for e-commerce product that received rating < 5 out of 10, the recovery email will be sent out after compensation given to customer and customer will rate their overall satisfaction towards the service"
                ghLink={handleProject1Open}
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={attendance}
                isBlog={false}
                title="Smart Attendance System"
                description="This project is to enhance for security system in the office by using a biometric sensor that capture user’s fingerprint and store it with their identity details to the database. It also records the user’s attendance to the system,that allows system admin to track and monitor every individual that enter the building."
                ghLink={handleProject3Open}
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={portfolio}
                isBlog={false}
                title="Portfolio"
                description="The first personal portfolio project has been deployed to GitHub. This project was built using HTML, JS, and CSS with the implementation of a smooth-scroll JavaScript function."
                ghLink={handleProject4Open}
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={smartshelves}
                isBlog={false}
                title="IoT Smart Shelves"
                description="Hybrid application for tracking items in the shelves and notify user when certain items are out of stock and items shelf life. The implementation involving IoT devices with AWS Cloud. It's available for mobile application and web application"
                ghLink={handleProject2Open}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/*modal for project 1  */}
      <Modal
      className='modal-detail'
        open={serviceRecovery}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className="modal-title-rate" id="modal-modal-title" variant="h4" component="h2">
            Service Recovery Rating
            <Icon onClick={()=>{window.open("https://drive.google.com/file/d/131gmPi5pk2PJosk-RE9ccSw4jGqdSvCM/view?usp=sharing")}} className='socialmediabtn' style={{height:"100%"}}><AiFillInfoCircle/></Icon>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Technology Used : Symfony framework (Mailer, HTML twig, bootstrap, Javascript) <br/>
          Design Focus : Responsive <br/>
          Testing : Manual testing (Unit Testing, Usability Testing and System Testing)<br/>
          Description : An Email will be sent to customer after the compensation given. User will rate the overall service based on the compensation provided. The service to send email is using Symfony Mailer that is triggered from button click and the template for email is built using HTML twig. User received email with a button that will redirect to a page to input for their feedback and rate the overall service.
          Features : sliding image for product details more than 1 and multiple checkbox as user option to input 
          </Typography>
          <div style={{ display: "flex" }}>
          <Button variant="outline-danger" onClick={handleProject1Close} style={{ marginLeft: "auto" }}> Close </Button>
          </div>
        </Box>
      </Modal>
      {/*modal for project 2  */}
      <Modal
      className='modal-detail'
        open={smartShelves}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography className="modal-title" id="modal-modal-title" variant="h4" component="h2">
            IOT Smart Shelves  
          <Icon onClick={() => {
              window.open("https://github.com/Junie88/ItemTracking")
            }}className='socialmediabtn' style={{height:"100%"}}><AiFillGithub /></Icon>
          <Icon onClick={()=> {window.open("https://ieeexplore.ieee.org/document/9765006")}}className='socialmediabtn' style={{height:"100%"}}> <AiFillRead/> </Icon>
          <Icon onClick={()=>{window.open("https://drive.google.com/file/d/1yMB8iFtklPLQouIHRA_9en2ra97rH9yo/view?usp=sharing")}} className='socialmediabtn' style={{height:"100%"}}><AiFillInfoCircle/></Icon>
         </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, fontSize:15 }}>
          Technology used : Ionic (Typescript),DynamoDB, AWS IoT with lambda, ESP32, BLE <br/>
          Design Focus : Mobile <br/>
          Objective of project :
          <ul>
          <li>To implement the IoT Technology with the integration of Mobile Application 
          and Cloud Database.</li>
          <li>To develop a mobile application that will detect the items inside the shelf and 
          display the list of items out-of-stock.</li>
          <li>The first project done by myself within limited timeline with the challenges of learning new programming language, designing mobile application, integrating hardware with cloud database. </li>
          </ul>
          </Typography>
          <div style={{ display: "flex" }}>
          <Button variant="outline-danger" onClick={handleProject2Close} style={{ marginLeft: "auto" }}> Close </Button>
          </div>
        </Box>
      </Modal>
      {/*modal for project 3  */}
      <Modal
      className="modal-detail"
        open={attendanceIOT}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Smart Attendance System
            <Icon onClick={()=>{window.open("https://drive.google.com/file/d/1SdLwz5A__jw0CNgVXlKgXs9UjROxo3Wa/view?usp=sharing")}} className='socialmediabtn' style={{height:"100%"}}><AiFillInfoCircle/></Icon>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Technology Used: Arduino IDE, AppSheet, MFTTT, ESP32, Relay Module, Fingerprint Sensor, Buzzer, LED lights
          <ul>
          The objective of project:
          <li>Collect real-time data of users that enter the office and record the data inside the database.</li>
          <li>Improve workplace security by verifying user identity using a fingerprint sensor.</li>
          <li>Admin able to monitor the attendance log data from the employees daily based on the earliest check-in to the building.</li>
          </ul>

          </Typography>
          <div style={{ display: "flex" }}>
          <Button variant="outline-danger" onClick={handleProject3Close} style={{ marginLeft: "auto" }}> Close </Button>
          </div>
        </Box>
      </Modal>
      {/*modal for project 4  */}
      <Modal
        open={portfolioCV}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Portfolio  <Icon onClick={() => {
              window.open("https://github.com/Junie88/Junie88");
            }}className='socialmediabtn' style={{height:"100%"}}><AiFillGithub /></Icon>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Technology Used: HTML, CSS and Javascript<br/>
          Design Focus : Website<br/>
          The first personal portfolio project has been deployed to GitHub. This project was built using HTML, JS, and CSS with the implementation of a smooth-scroll JavaScript function.
          <ul>
          The objective of project:
          <li>Built personal portfolio with pure HTML,CSS and Javascript</li>
          <li>Learn and practice github deployment </li>
          </ul>
          </Typography>
          <div style={{ display: "flex" }}>
          <Button variant="outline-danger" onClick={handleProject4Close} style={{ marginLeft: "auto" }}> Close </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default Projectlist;