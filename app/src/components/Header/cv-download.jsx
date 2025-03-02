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
    <a
      onClick={downloadCV}
      className="px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg text-lg font-semibold hover:from-yellow-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 cursor-pointer"
    >
      Download CV
    </a>
  );
}

export default CVDownloadButton;