import React from 'react'
import Sdata from './Servicedata.jsx'
import Card from './Card.jsx'


const Service = () => 
  <>
  
  <div className="my-5">
      <h1 className="text-center">Our Services</h1>
  </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row gy-4"> 
           {
             Sdata.map((val, index) =>
               <Card key={index}
               imgsrc={val.imgsrc} 
               title={val.title}
               text={val.text}/>
             )
           }
          </div>
        </div>
      </div>
  </div>
  </>

export default Service
