import React from 'react';

function CVDownloadButton() {
  const downloadCV = () => {
    console.log('Downloading CV...');

    const cvPath = process.env.PUBLIC_URL + '/cv/Yash ved.pdf';
    
    console.log('CV Path:', cvPath);

    // Create an anchor element
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Yash ved.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <a className='cv-button' onClick={downloadCV}>Download CV</a>
  );
}

export default CVDownloadButton;
