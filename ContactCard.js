import React,{useState} from "react";


const ContactCard = (props) => {

    const [shownumber, setshownumber] = useState(false);


    
  return(

    <div className="contact-card">
    <img src="https://via.placeholder.com/150"
    alt = "Profile Img">
    </img>
    <div>
        <p>Name: {props.name} </p>
        <p>email:{props.email} </p>
        <p>Age:{props.age} </p>


        <button onClick={() => setshownumber(!shownumber)}>
        Show Contact
      </button>
      {shownumber && <p>Contact: {props.number}</p>}
        
        
    </div>
</div>
  )

}

export default ContactCard;