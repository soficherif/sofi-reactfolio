import React from 'react'
import './Feed.css'
import FeedContent from './FeedContent';

const windowOpen = <img src='./windowopen.jpeg'/>;

const yellowValencia = <img src='./yellowvalencia.jpeg'/>

const rusticBuild = <img src='./rusticbuild.jpeg'/>

const wimHof = <iframe width="560" height="315" src="https://www.youtube.com/embed/tybOi4hjZFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

const Henry = <iframe width="560" height="315" src="https://www.youtube.com/embed/kZHuulF1zoo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
const cafe = <img src='./cafe.jpeg'/>
const silverDoor = <img src='./silverdoor.jpeg'/>
const redOn = <img src='./redonning.jpeg'/>
const blueDoor = <img src='./bluedoor.jpeg'/>
const valDay = <img src='./valday.jpeg'/>
const oranges = <img src='./oranges.jpeg'/>





function Feed() {
  return (
    <div className='feed'>

        <FeedContent Content={silverDoor}/>

        <FeedContent Content={cafe}/>

        <FeedContent Content={rusticBuild}/>

        <FeedContent Content={valDay}/>



        <FeedContent Content={windowOpen}/>
       

       <FeedContent Content={redOn}/>


       <FeedContent Content={oranges}/>

       <FeedContent Content={blueDoor}/>

       <FeedContent Content={yellowValencia}/>


       <FeedContent Content='Photo about something goes here'/>
       <FeedContent Content='Photo about something goes here'/>
       <FeedContent Content='Photo about something goes here'/>

    </div>
  )
}

export default Feed



