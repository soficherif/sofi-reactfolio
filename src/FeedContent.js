import React from 'react'
import './FeedContent.css'
import Feed from './Feed'



const ImageOne = <img src='./windowopen.jpeg'/>;




function FeedContent({Content}) {
  return (
    <div className='Feedstyle'>
        <div className='Feedc'>
            {Content}
            
        </div>


    </div>
  )
}

export default FeedContent