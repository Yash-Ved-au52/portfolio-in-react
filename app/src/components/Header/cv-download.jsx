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
      className="px-6 py-3  rounded-lg text-lg font-semibold border-x-2  hover:bg-transparent hover:border-2 hover:border-[#ff7e5f] hover:text-[#ff7e5f] transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
      Download CV
    </a>
  );
}

export default CVDownloadButton;