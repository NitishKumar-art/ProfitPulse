import React from 'react'

function Pricing() {
  return ( 
    <div className='container p-4 mb-5'>
      <div className='row'>
        <div className='col-1'></div>
        <div className='col-5 p-6'>
          <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
          <p>We pioneered the concept of discount broking and<br/> price transparency in India.Flat fees and no hidden charges.</p>
          <a href='' style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className='col-1 mt-4'>
          <img src='media/pricing0-eq.svg'style={{width:"150%"}}/>
        </div>
        <div className='col-1 p-3'>
          <p className='mt-5'style={{fontSize:"80%"}}>Free account opening</p>
        </div>
        <div className='col-1 mt-4'>
          <img src='media/pricing0-eq.svg'style={{width:"150%"}}/>
        </div>
        <div className='col-1 p-3'>
          <p className='mt-5'style={{fontSize:"80%"}}>Free equity delivery and direct mutual funds</p>
        </div>
        <div className='col-1 mt-4'>
          <img src='media/other-trades.svg'style={{width:"150%"}}/>
        </div>
        <div className='col-1 p-3'>
          <p className='mt-5'style={{fontSize:"80%"}}>Intraday and F&O</p>
        </div>
      </div>
    </div>
   );
}

export default Pricing;