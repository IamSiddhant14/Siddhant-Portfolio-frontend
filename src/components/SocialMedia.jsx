import React from 'react'
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';

const SocialMedia = () => {
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

      <div>
        <a href='https://twitter.com/Siddhan21635824'>
          <BsTwitter />
        </a>
      </div>



    </div>
  )
}

export default SocialMedia
