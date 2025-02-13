import React from 'react'

import './hanko-starter-style.css'

const HankoStarterInfo = () => {
  return (
    <div className="starterInfo">
      <h1>Hanko NextJS starter.</h1>
      <h2>
        This repository is an example of an implementation of <span>Hanko</span> in <span>Next.JS</span>.
        Specifically the <span>App Router</span>
      </h2>
      <h2>
        Trough the use of the <span>&lt;Hanko-Auth&gt;</span> and <span>&lt;Hanko-Profile&gt;</span> components you can quickly and effectively set up a Sign-In page or a User Profile page for your application.
      </h2>
      <h2>To create a <span>Hanko Project</span> please visit<br />
        <a href="https://cloud.hanko.io/" target='_blank'><span className='starterLink'>[ Hanko cloud console ]</span></a>
      </h2>
      <h2>To learn how to <span>set up an application like this</span> for yourself or just for more Information, please <br />
        <a href="https://docs.hanko.io/" target='_blank'><span className='starterLink'>[ Refer to our docs ]</span></a>
      </h2>
      <h2> <span>For more questions</span>, or if you want to join the Hanko community, please <br />
        <a href="https://www.hanko.io/community" target='_blank'><span className='starterLink'>[ Join our discord ]</span></a>
      </h2>
  </div>
  )
}

export default HankoStarterInfo