import React from 'react'

function Awards() {
  return ( 
    <div className="container mt-5">
      <div className='row'>
        <div className='col-4'>
          <img src='media/AwardsLanding.jpg'style={{width:"80%"}}/>
        </div>
        <div className='col-8'>
          <h2>Largest stock broker in India</h2>
          <p>2+ million ProfitPulse clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
          <div className='row'>
            <div className='col-6'>
              <ul>
                <li>
                  <p>Future and options</p>
                </li>
                <li>
                  <p>commodity derivatives</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
              </ul>
            </div>
            <div className='col-6 ml-2'>
              <ul>
                <li>
                  <p>Stocks & IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}

export default Awards;