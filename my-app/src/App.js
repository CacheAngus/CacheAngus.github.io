import React from 'react';
import logo from './Cache_Logo.svg';
import github from './github.svg';
import linked from './linkedin.svg';
import email from './mail.svg';
import me from './87056035_193950971847381_8520005996070830080_n.jpg';
import lockness from './lockness.png';
import capstone from './86497806_2974751885917379_8345486073081626624_o.jpg';
import granted from './new_look.png';
import hangover from './logo_hangover.png';
import redback from './redback.png'
import './App.css';
import {Container, Grid, Paper, BottomNavigation, BottomNavigationAction, Typography, Card} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="" />
      </header>
      <Container className="header-container" fixed>
      <p>
          Hi, my name is <code style={{color: '#FF5D5D'}}>Sierra Cache Angus</code>, yes, like the memory.
        </p>
          <p>Nice to meet you!</p>
          <Grid container  justify="center"
                alignItems="center" spacing={6}>
              <Grid item xs={3}>
                  <Paper elevation={1} style={{backgroundColor:'#b0c4de'}} className="gitt">
                      <a
                      className="App-link-git"
                      href="https://github.com/CacheAngus"
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                      <img src={github} style={{width: '20%', height: '20%', resizeMode: 'contain'}} alt='Github'/>
                  </a></Paper>
              </Grid>
              <Grid item xs={3}>
                  <Paper elevation={1} style={{backgroundColor:'#b0c4de'}} className="gitt">
                      <a
                          className="App-link-git"
                          href="https://linkedin.com/in/sierra-cache"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          <img src={linked} style={{width: '20%', height: '20%', resizeMode: 'contain'}} alt='Linkedin'/>
                      </a></Paper>
              </Grid>
              <Grid item xs={3}>
                  <Paper elevation={1} style={{backgroundColor:'#b0c4de'}} className="gitt">
                      <a
                          className="App-link-git"
                          href="mailto:cacangus@gmail.com?subject=Interest%20fromt%20website"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          <img src={email} style={{width: '20%', height: '20%', resizeMode: 'contain'}} alt='Email'/>
                      </a></Paper>
              </Grid>
          </Grid>
      </Container>
        <div className="about" style={{'margin-bottom': '75px', backgroundColor: '#b0c4de'}}>
            <Typography variant="h5" gutterBottom color='textSecondary'>
                About Me
            </Typography>
        </div>

        <Container className='About-me'>
            <Grid container justify="center"
                  direction="column"
                  spacing={0}
                  >
                <Grid container direction={"row"} alignItems="right" spacing={6} style={{'margin-bottom': '30px'}}>
                    <Grid item alignItems='right' md={4}>
                       <img src={me} style={{width:'100%', 'boarder-radius': '50%'}}/>
                    </Grid>
                    <Grid item md={8}>
                        <Typography variant="h6">My name is Cache, after the lake in Algonquin Park, ON. I am currently an undergraduate student in Canada.
                        I am a big fan of nature and tech! These two passions have guided me in the past couple of years. I am current the co-chair of Queen's University Experimental Sustainability Team and have been working as a developer and UI/UX designer for Queen's Technology and Media Associate club.</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="center"
                  direction="row"
                  alignItems="center" spacing={6} >
                <Grid item sm={6}>
                    <Card variant={'outlined'}>
                    <img src='https://cdn.freebiesupply.com/logos/large/2x/queens-university-8-logo-png-transparent.png' style={{width: '10%', height: '10%'}}/>
                     <p>Currently a 4th year student at Queen's University, graduating in 2020 with a degree in Computer Engineering.</p></Card>
                </Grid>
                <Grid item sm={6}>
                    <Card variant={'outlined'}>
                    <img src='https://media.licdn.com/dms/image/C560BAQFRvnLnrbn7ZA/company-logo_200_200/0?e=2159024400&v=beta&t=YTrR2xVp3C6BRKeBjrWGRxGQKd_fT6anPye-HvP-RAs' style={{width: '10%', height: '10%'}}/>
                    <p> Right now I am working part-time for <a href='www.tenthousandcoffees.com'>Ten Thousand Coffees</a> (not a coffee shop). (Does still have good coffee).</p></Card>
                </Grid>
            </Grid>

        </Container>

        <div className="dev" style={{'margin-bottom': '75px', 'margin-top': '30px', border: '1px lightgrey', backgroundColor: '#b0c4de'}}>
            <Typography variant="h5" gutterBottom color='textSecondary'>
                Dev Projects
            </Typography>
        </div>
        <Container className='dev-proj'>

        <Grid container direction={"row"} alignItems="right" spacing={6} style={{'margin-bottom': '30px'}}>
            <Grid item md={8}>
                <Typography variant="body1" align={'left'}>In 2018-2019 I worked with 5 other students in a Product Development team to create a business case and ultimately build Lockness-a blockchain secured certification holder. Lockness was made
                Using React, Node.js, and Firebase. I worked as the primary full-stack developer on this project.</Typography>
            </Grid>
            <Grid item alignItems='right' md={4}>
                <img src={lockness} style={{width:'100%', 'boarder-radius': '50%'}}/>
            </Grid>
        </Grid>
            <Grid container direction={"row"} alignItems="right" spacing={6} style={{'margin-bottom': '30px'}}>
                <Grid item alignItems='right' md={4}>
                    <img src={capstone} style={{width:'100%', 'boarder-radius': '50%'}}/>
                </Grid>
            <Grid item md={8}>
                <Typography variant="body1" align={'right'}>In 2019-2020 I worked with 3 other students On our capstone project-Airport Security with Machine Vision and Machine Learning. Our Capstone was made
                using python, javascript and was implemented on an NVIDIA Jeston Tx2 . darknet's tiny yolo and dlibs pyhton machine vision wrapper for facial detection and recognition were utilized.</Typography>
            </Grid>

        </Grid>
            <Grid container direction={"row"} alignItems="right" spacing={6} style={{'margin-bottom': '30px'}}>
            <Grid item md={8}>
                <Typography variant="body1" align={'left'}>I worked with 4 other students to design and build an application that could scan and search for different types of plastic and cardboard for proper recycling.
                    Bigfoot Recycle Application was developed in Android Studio with C++ classes for the actual scanning and searching functions.
                </Typography>
            </Grid>
            <Grid item alignItems='right' md={4}>
                <img src='https://github.com/CacheAngus/BigFoot_320/blob/master/app/src/main/res/drawable/_recyclelogo.png?raw=true' style={{width:'100%', height:'70%', 'boarder-radius': '50%'}}/>
            </Grid>
        </Grid>
            <Grid container direction={"row"} alignItems="right" spacing={6} style={{'margin-bottom': '30px'}}>
                <Grid item alignItems='right' md={4}>
                    <img src='https://github.com/CacheAngus/TenThousandCoffees/blob/master/client/src/assets/img/GettyImages-519518825-580cd44a3df78c2c73eebb1f.jpg?raw=true' style={{width:'100%', 'boarder-radius': '50%'}}/>
                </Grid>
            <Grid item md={8}>
                <Typography variant="body1" align={'right'}>As a personal coding challange I completed an psuedo instragram called Upular. Upular was created with the MEAN stack-mongoDB, express.js, angular, and node.js.</Typography>
            </Grid>

        </Grid>
        </Container>

        <div className="about" style={{'margin-bottom': '75px', backgroundColor: '#b0c4de'}}>
            <Typography variant="h5" gutterBottom color='textSecondary'>
                Design Projects
            </Typography>
        </div>

        <Container className='design-proj'>
            <Grid container  justify="center"
                  alignItems="center" spacing={6}>
                <Grid item md={6}>
                    <Paper elevation={0} className="hangover">
                        <a
                            className="App-link-git"
                            href="https://dribbble.com/shots/10310358-Hangover-Quiz-Game-App?utm_source=Clipboard_Shot&utm_campaign=sierracacheangus&utm_content=Hangover%20Quiz%20Game%20App&utm_medium=Social_Share"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={hangover} style={{width: '20%', height: '20%', resizeMode: 'contain'}} alt='Github'/>
                        </a>
                        <p>Hangover Quiz Game App</p>
                    </Paper>
                </Grid>
                <Grid item md={6}>
                    <Paper elevation={0} className="redbacks">
                        <a
                            className="App-link-git"
                            href="https://dribbble.com/shots/10310585-Website-Re-Design?utm_source=Clipboard_Shot&utm_campaign=sierracacheangus&utm_content=Website%20Re-Design&utm_medium=Social_Share"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={redback} style={{width: '20%', height: '20%', resizeMode: 'contain'}} alt='Github'/>
                        </a>
                        <p>Company Website Re-Design</p>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container  justify="center"
                  alignItems="center" spacing={6}>
                <Grid item md={6}>
                    <Paper elevation={0} className="hangover">
                        <a
                            className="App-link-git"
                            href="https://dribbble.com/shots/10309692-Granted-Pace-Logo"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={granted} style={{width: '20%', height: '20%', resizeMode: 'contain'}} alt='Github'/>
                        </a>
                        <p>Logo Design for an LLC</p>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
        <BottomNavigation
            value={''}
            onChange={(event, newValue) => {

            }}
            showLabels
            className="navigation-bottom"
            style={{backgroundColor:'lightgrey', color:'white', 'margin-top': '30px'}}
        >
            <BottomNavigationAction label="About Me" />
            <BottomNavigationAction label="Dev Projects" />
            <BottomNavigationAction label="Design Projects" />
        </BottomNavigation>
    </div>

  );
}

export default App;
