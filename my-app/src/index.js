import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import {Input, Grid, List, Icon, Divider, Segment, Menu, Image, Container, Header, Dropdown } from 'semantic-ui-react';

class Top extends React.Component {
  render () {
    return (
        <Container>
          <Image src="http://www.thebus.org/images/newimages/titlebar.jpg" alt="TheBus Logo" fluid/>
          <Menu borderless attached>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>Ride TheBus</Menu.Item>
            <Menu.Item>Fares/Programs</Menu.Item>
            <Menu.Item>Customer Service</Menu.Item>
            <Menu.Item>Rider Info</Menu.Item>
            <Menu.Item>Careers</Menu.Item>
            <Menu.Item>About TheBus</Menu.Item>
            <Menu.Item>Alternate Navigation</Menu.Item>
            <Menu.Item>
              <Dropdown text="Translation - English">
                <Dropdown.Menu>
                  <Dropdown.Item text="Chinese - 中文"/>
                  <Dropdown.Item text="Japanese"/>
                  <Dropdown.Item text="Korean"/>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu>
        </Container>
    );
  }
}

class COVID extends React.Component {
  render() {
    return (
        <Container className="upper">
          <Segment>
            <Container textAlign="center">
              <Header as="h1">COVID-19 UPDATE</Header>
              <div>PRESIDENTIAL EXECUTIVE ORDER </div>
              <div>FEDERAL MASK LAW – PUBLIC TRANSPORTATION</div>
              <div>Effective: Monday, February 15, 2021</div>
              <div><a href="#">Cardcard.pdf</a></div>
              <div><a href="#">Onboard Announcement.wav</a></div>
            </Container>

            <Divider/>

            <Container textAlign="left">
              <p> A Presidential Executive Order and New Centers For Disease Control (CDC) Regulations now requires ALL passengers (riders) to wear a Mask while riding public transportation. The regulation states specific types of mask that are acceptable and those that are no longer acceptable to wear while riding public transit.</p>
              <p>In addition to wearing a mask while boarding and throughout the ride, riders are also required to wear their masks while waiting at a transit center facility.</p>
            </Container>

            <Divider/>

            <Header as="h4">Allowed</Header>
            <List bulleted>
              <List.Item>Double/Triple Layer Cloth Mask</List.Item>
              <List.Item>Disposable Mask</List.Item>
              <List.Item>Two-layer Gaiter</List.Item>
            </List>

            <Header as="h4">Not Allowed</Header>
            <List bulleted>
              <List.Item>Shirt Pulled Over Face</List.Item>
              <List.Item>Bandana/Scarf</List.Item>
              <List.Item>Mask w/ vents, valves, holes</List.Item>
              <List.Item>Face shield only (allowed with valid medical exemption card)</List.Item>
            </List>

            <Header as="h4">Exemptions</Header>
            <List bulleted>
              <List.Item>Children under two (2) years of age</List.Item>
              <List.Item>Bandana/Scarf</List.Item>
              <List.Item>Medical exemptions require a valid NO MASK/FACE SHIELD-ONLY card</List.Item>
            </List>

            <Divider/>

            <Container textAlign="center">
              <p> To apply for a medical exemption card, contact: </p>
              <p> Customer Service </p>
              <p> 848-5555, press 3 </p>
              <p> Monday – Friday, 7:30 am – 4:00 pm </p>
              <p> Except City Holidays </p>
            </Container>

            <Divider/>

            <Container textAlign="left">
              <p> Presidential Order: <a href="https://www.whitehouse.gov/briefing-room/presidential-actions/2021/01/21/executive-order-promoting-covid-19-safety-in-domestic-and-international-travel/">https://www.whitehouse.gov/briefing-room/presidential-actions/2021/01/21/executive-order-promoting-covid-19-safety-in-domestic-and-international-travel/</a></p>
              <p>CDC Requirements: <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/face-masks-public-transportation.html https://www.cdc.gov/quarantine/masks/mask-travel-guidance.html">https://www.cdc.gov/coronavirus/2019-ncov/travelers/face-masks-public-transportation.html https://www.cdc.gov/quarantine/masks/mask-travel-guidance.html</a></p>
            </Container>
          </Segment>
        </Container>
    );
  }
}

class MidMenu extends React.Component {
  render () {
    return (
        <Container textAlign="center">
          <Segment inverted color="green">
            TheHandi-Van is operating normally
          </Segment>
          <Segment inverted color="red">
            COVID-19(CORONAVIRUS) UPDATE
          </Segment>
        </Container>
    );
  }
}

class LowerMidMenu extends React.Component {
  render() {
    return (
        <Container>
          <Grid>
            <Grid.Column width={6}>
              <Segment inverted color="orange">
                <Header as="h3">
                  <Icon name="bus"/> HEA
                </Header>
                <Header as="h4">
                  Real-Time Bus Arrival
                </Header>
                <p>Enter Street name or location</p>
                <Input action='search' placeholder='Search...' />
              </Segment>
            </Grid.Column>
            <Grid.Column width={10}>
              <Segment inverted color="yellow">
                <Header as="h3">
                  Service Disruption
                </Header>
                <Header as="h4">
                  January 23, 2021 05:00am - Kuntz Gate Closed on Weekends
                </Header>
                <Divider/>
                <p>Route(s) 303</p>
                <p>No service Eastbound and Westbound on Elliott St. Please board buses on Nimitz prior to Elliott, and
                  on Kuntz Ave after the self serve car wash.</p>
                <p><a className="white" href="#">Click here to see more Service Disruptions...</a></p>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
        <Container textAlign="center">
          <Menu stackable fluid borderless className="footer">
            <Container>
              <Menu.Item><Icon name="money bill alternate"/>Fares</Menu.Item>
              <Menu.Item><Icon name="map"/>System Map</Menu.Item>
              <Menu.Item><Icon name="clock"/>Transit Center</Menu.Item>
              <Menu.Item><Icon name="bus"/>Real-time Bus Arrival</Menu.Item>
              <Menu.Item><Icon name="road"/>Road Conditions</Menu.Item>
            </Container>
            <Container>
              <Menu.Item><Icon name="envelope"/>Customer Comment</Menu.Item>
              <Menu.Item><Icon name="building"/>City & County of Honolulu</Menu.Item>
              <Menu.Item><Icon name="shield alternate"/>Safety & Security</Menu.Item>
              <Menu.Item><Icon name="globe"/>Web Services API</Menu.Item>
            </Container>
          </Menu>
        </Container>
    );
  }
}

class TheBus extends React.Component {

  render() {
    return (
        <div>
          <Top/>
          <COVID/>
          <MidMenu/>
          <LowerMidMenu/>
          <Footer/>
        </div>
    );
  }
}

ReactDOM.render(<TheBus/>, document.getElementById('root'));