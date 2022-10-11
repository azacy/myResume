import React from 'react'
// import './App.css';

const App = () => {
  //to create a click botton
  const onButtonClick = () => {
    fetch('ENE JUSTIN CHIMBUZOR.pdf').then(response => {
      response.blob().then(blob => {
        // to like create a new object of the pdf file to
        // like a link
        const fileURL = window.URL.createObjectURL(blob);
        // set property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'ENE CHIMBUZOR JUSTIN.pdf';
        alink.click();
      })
    })
  }
  return (
    <>
      <center>
        <h1>Welcome to my Resume</h1>
        <h3>Click the botton below to download my Resume in PDF format</h3>
        <button onClick={onButtonClick}>
          Download Resume
        </button>
      </center>
    </>
  )

}
export default App