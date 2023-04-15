import React from 'react'
import dev from '../Assets/Developer.png'
import pro from '../Assets/mern-4th.png'
import node from '../Assets/node-js.png'
import express from '../Assets/express-js.png'
import mdb from '../Assets/MongoDB.png'
import react from '../Assets/react-js.png'
import aws from '../Assets/AWS.png'
import '../styles/About.css'
function About() {
  return (
    <div className='main-box'>
      <div className='child-1'>
       <div className='subChild-1'>
        <img src={dev} alt='dev'/>
       </div>
       <div className='subChild-2'>
        <d1>About Developer</d1>
        <d2>Hi, I am Abhinav Gupta</d2>
        <d3>"After completing my schooling in Kanpur, Uttar Pradesh, I went on to obtain a B.Tech degree from Pranveer Singh Institute of Technology, also located in Kanpur. I am proud to have graduated from my hometown institute and look forward to utilizing my education and skills in my future endeavors".</d3>
        <a1>My Skills:</a1>
        <div className='Knowledge'>
            <div className='Knowledge-1'>
            <ul>
            <li>Python</li>
            <li>C/C++</li>
            <li>HTML & CSS</li>
            <li>DBMS</li>
            <li>Express.Js</li>
            </ul>
            </div>
            <div className='Knowledge-1'>
            <ul>
            <li>JavaScrept</li>
            <li>MongoDB</li>
            <li>Redix</li>
            <li>React</li>
            <li>AWS</li>
            </ul>
            </div>
        </div>
       </div>
      </div>
      <div className='child-2'>
        <div className='subChild-2'>
        <d1>About Project</d1>
            <d5>This project is based on food order apps like swigy, zamato, and others. This app categorized the menu according to different restaurants. On this site, you can order your favorite food from your favorite place.</d5>
        <div className='Tools-Use'>
            <img className='tools' src={node} alt='node'/>
            <img className='tools' src={express} alt='express'/>
            <img className='tools' src={mdb} alt='mdb'/>
            <img className='tools' src={react} alt='react'/>
            <img className='tools' src={aws} alt='aws'/>
        </div>
        </div>
      <div className='subChild-1'>
        <img src={pro} alt='pro'/>
       </div>
      </div>
    </div>
  )
}

export default About
