
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Yvette Henderson. I am currenlty a Sr. project manager by day.
            Throughout my 8 year agency career, I have contributed to impacting business outcomes through effective organization,prioritization, and execution of key projects. 
            In my Senior Project Manager roles, I exercised a calculated and methodical approach to problem
            solving. I am independently motivated, yet I appreciate team efforts and collaborate productively within
            groups. Additionally, I am knowledgeable in Adobe, Microsoft Office, Google Docs, Slack, Basecamp,Smartsheets, Paymo, NetSuite and a Scrum Master.By night, I am  a full stack web developer with experice in  Java Script,Express JS, Node JS, Oracle SQL, MongoDB, and React. </p>

            



            </Content>
        </div>
    );

}

export default AboutPage;