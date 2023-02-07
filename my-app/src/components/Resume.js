import React from 'react';
// import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
// import pdfFile from "../assets/Resume.pdf"
import "./ResumeStyles.css"

const Resume = () => {const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Resume.pdf';
            alink.click();
        })
    })
}
return (
    <>
        <center>
            <h1>Resume</h1>
            <h3>Click on below button to download my Resume</h3>
            <button onClick={onButtonClick} className="rbtn">
                Download PDF
            </button>
        </center>
    </>
);
};

export default Resume