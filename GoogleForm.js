import React from 'react';

const GoogleFormIntegration = () => {
  // Replace 'YOUR_GOOGLE_FORM_URL' with the actual URL of your Google Form
  const googleFormUrl = 'https://docs.google.com/forms/d/e/...';

  return (
    <div>
      <iframe
        title="Google Form Integration"
        src={googleFormUrl}
        width="640" // Adjust the width according to your preference
        height="800" // Adjust the height according to your preference
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading...
      </iframe>
    </div>
  );
};

export default GoogleFormIntegration;
