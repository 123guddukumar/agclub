import React, { useState } from 'react';

const LanguageSelector = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const changeLanguage = (language) => {
    console.log(`Language changed to ${language}`);
    toggleVisibility();
  };

  return (
    <>
      <button type="button" onClick={toggleVisibility}>Change Language</button>
      {isVisible && (
        <div className="z-lang">
          <div className="mask-lang">
            <ul>
              <li onClick={() => changeLanguage('eng')}>English</li>
              <li onClick={() => changeLanguage('ind')}>हिन्दी</li>
              <li onClick={() => changeLanguage('tel')}>తెలుగు</li>
              <li onClick={() => changeLanguage('tam')}>தமிழ்</li>
              <li onClick={() => changeLanguage('kan')}>ಕನ್ನಡ</li>
            </ul>
            <p onClick={toggleVisibility}>Cancel</p>
          </div>
        </div>
      )}
    </>
  );
};

export default LanguageSelector;
