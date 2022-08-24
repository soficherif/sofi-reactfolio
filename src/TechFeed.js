import React from 'react'
import './TechFeed.css';
import TechFeedContent from './TechFeedContent';




const html = <img className='techimage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png"/>
const css =  <img className='techimage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png"/>
const javascript =  <img className='techimage' src="https://iconape.com/wp-content/files/ez/353342/svg/javascript-seeklogo.com.svg"/>
const nodejs = <img className='techimage' src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg"/>
            
            const redux = <img className='techimage' src="https://cdn.worldvectorlogo.com/logos/redux.svg"/>
            const reactjs = <img className='techimage'src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"/>
            const express= <img className='techimage' src="https://cdn.buttercms.com/2q5r816LTo2uE9j7Ntic"/>
            const mysql = <img className='techimage' src="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png"/>
            const vue = <img className='techimage'src='https://vuejs.org/images/logo.png'/>



            const mongodb = <img className='techimage' src="https://webimages.mongodb.com/_com_assets/cms/kusb9stg1ndrp7j53-MongoDBLogoBrand1.png?auto=format%252Ccompress"/>
            const googlecloud = <img className='techimage' src="https://logodownload.org/wp-content/uploads/2021/06/google-cloud-logo-1.png"/> 
            const aws = <img  className='techimage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png"/>
            const azure = <img  className='techimage' src="https://seeklogo.com/images/M/microsoft-azure-logo-85055C44BE-seeklogo.com.png"/>

            const git = <img className='techimage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png"/>
            const github = <img className='techimage' src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"/>
            const bash = <img className='techimage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gnu-bash-logo.svg/2880px-Gnu-bash-logo.svg.png?20161123002239"/>
            const salesforce = <img className='techimage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png"/>
            const stripe = <img className='techimage' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"/>


function techfeed() {
  return (
    <div className='techfeed'>
        <TechFeedContent Content={html} />

        <TechFeedContent Content={css} />
        <TechFeedContent Content={javascript} />

        <TechFeedContent Content={nodejs} />
        <TechFeedContent Content={redux} />
        <TechFeedContent Content={reactjs} />
        <TechFeedContent Content={vue} />

        <TechFeedContent Content={express} />
        <TechFeedContent Content={bash} />
        <TechFeedContent Content={github} />
        <TechFeedContent Content={git} />
        <TechFeedContent Content={mysql} />
        <TechFeedContent Content={mongodb} />
        <TechFeedContent Content={googlecloud} />

        <TechFeedContent Content={aws} />
        <TechFeedContent Content={azure} />
        
        <TechFeedContent Content={salesforce} />
        <TechFeedContent Content={stripe} />




    </div>
  )
}

export default techfeed