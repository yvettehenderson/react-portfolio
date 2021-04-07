
import React from 'react';
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

            <p>You can find my LinkedIn profile<a className="git" href="https://www.linkedin.com/in/yvette-henderson/" target="_blank" rel="noopener noreferrer">here</a></p>
            <p>You can find my resume<a className="git" href="https://docs.google.com/document/d/1Vh3W_eedNPY-5DOkmfM1Pnr7un-swiUdA8Gl07MvTx0/edit?usp=sharing" target="_blank" rel="noopener noreferrer">here</a></p>
            <p>You can find my GitHub profile<a className="git" href="https://github.com/yvettehenderson" target="_blank" rel="noopener noreferrer">here</a></p>



            </Content>
        </div>
    );

}

export default AboutPage;