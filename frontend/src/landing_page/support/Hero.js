import React from 'react'

function Hero() {
  return ( 
  <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>
          Support Portal
        </h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3 ">
        <div className="col-6 p-5">
          <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="Eg. how do i activate F&O, why is my order getting rejected." /><br/>
          <div style={{display: "flex", gap:"20px",marginTop:"10px",flexWrap:"wrap"}}>
          <a href="" style={{whiteSpace:"2"}}>Track account Opening</a>
          <a href="" style={{whiteSpace:"2"}}>Track segmanet activation</a>
          <a href="" style={{whiteSpace:"2"}}>Intraday Margins</a>
          <a href="" style={{whiteSpace:"2"}}>Kite user manual</a>
          </div>
        </div>
        <div className="col-6 p-5 ">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li><a href="" style={{lineHeight:"2"}}>Current Takeovers and Delisting - December 2025</a></li>
            <li><a href="" style={{lineHeight:"2"}}>Latest Intraday leverages - MIS & CO</a></li>
          </ol>
        </div>
      </div>
    </section>
   );
}

export default Hero;