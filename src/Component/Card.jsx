import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props ) => {

    console.log(props);
  return (
    <div className="card">
        <div>
          <div className="top">
          <img
              src={props.companylog}
              alt={props.company}
              width="50"
              height="50"
            />
          <button>Save<Bookmark size={12} /></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.datePosted}</span> </h3>
          <h2>Senior UI/UX Designer</h2>
          <div className="tag">
            <h4>{props.type}</h4>
            <h4>{props.post}</h4>
          </div>
        </div>
        </div>
        <div className="bottom">
          <div>
              <h3>${props.payment}/hr</h3>
              <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card
