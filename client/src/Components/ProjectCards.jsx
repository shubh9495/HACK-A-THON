import React from 'react'
import '../CSS/projectcard.css'
export const ProjectCards = (ele) => {
  return (
    <>  
        <div className="card">  
          <div className="card-image" style={{background:ele.image}}></div>
          <h2 style={{textAlign:'center',textTransform:'uppercase',marginBottom:'4rem'}}>{ele.name}</h2>
          <p>{ele.description}</p>
          <div className="card-foot">
            <a href={ele.repo} target="-blank">Gallery <br /> Link</a>
            <a href={ele.deploy} target="-blank">About <br /> Link</a>
          </div>
        </div>
        </>
        )
    }

