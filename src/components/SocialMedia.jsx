import React from 'react'
import { BsLinkedin, BsVoicemail, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {

  const handleEmailClick = () => {
    window.open('mailto:siddhantsharma669@gmail.com', '_blank');
  };

  return (
    <div className='app__social'>
      <div>
        <a href='https://github.com/IamSiddhant14'>
          <BsGithub />
        </a>

      </div>
      <div>
        <a href='https://www.linkedin.com/in/siddhant-sharma-86b853190/'>
          <BsLinkedin />
        </a>
      </div>

      <div >
        
        <a href="javascript:void(0);" onClick={() => handleEmailClick()}><BsVoicemail /></a>
        
      </div>



    </div>
  )
}

export default SocialMedia
