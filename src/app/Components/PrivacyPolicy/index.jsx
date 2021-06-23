import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LoremIpsum } from 'react-lorem-ipsum';

import { isAuthenticated } from '../../utils';

const PrivacyPolicy = () => {
  const { pathname } = useLocation();

  useEffect(() => {}, [pathname]);

  const marginTop = isAuthenticated() ? '' : 'mt-36';

  return (
    <div className="flex flex-col w-full px-40 py-20">
      <div className={`text-4xl font-normal mb-10 ${marginTop}`}>Privacy Policy</div>
      <LoremIpsum p={8} avgWordsPerSentence={6} avgSentencesPerParagraph={6} />
    </div>
  );
};

export default PrivacyPolicy;
