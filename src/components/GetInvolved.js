import React, { useState } from 'react'
import banner from "../images/get-involved/banner.png"
import NavBar from './NavBar'


export default function GetInvolved() {
    return (
        <div>
            <NavBar pageName="getInvolved" />
            <div style={{width: "100%", height: "800px"}}>
            <img src={banner} style={{width: "100%", objectFit: "cover", height: "100%"}}/>
            </div>
            <div style={{backgroundColor: "#181A1B", width: "100%", padding: "100px", display: "flex", flexDirection: "column", alignItems: "center", }}>
                <div style={{display: "flex", flexDirection: "column", alignItems: "start", width: "60%"}}>
                    <h1 style={{fontFamily: "'Poppins', sans-serif"}}>Get Involved Today</h1><br/>
                    <p>Getting involved with Silverline Tutoring has never been easier. Below are two forms for applicants based on interested in being tutored or becoming a tutor. The process for either is relatively simple.</p>
                    <p>Once a tutor has signed up, our human resources officer will reach out requesting either an interview or a resume. In the case of an interview, our human resources officer will ask a few basic questions and follow up by asking for the tutor to present a 15 - 20 minute lesson on a subject they desire to teach in. The other option is to provide a resume, which will be reviewed by our executive team. Acceptance or deferral as a tutor will be provided shortly thereafter.</p>
                    <p>If a student desires to receive tutoring, they should fill out the second form on this page. Our human resources officer will be in contact with them after receiving their request. The student will be brought into the Discord community server and be paired with an appropriate tutor. This tutor serves as someone who can serve longer lessons or answer quick questions in the target subject.</p>
                </div>
            </div>
        </div>
    )
}