import React,{useState} from "react";
import './App.css'
import './ContactCard'
import ContactCard from './ContactCard';

const App = () => {

//    const contacts=[
//         {
//             name: "Abhishek Thorat",
//             email: "abmath113@gmail.com",
//             age:19,
//             number:8010877244

//         },
//         {
//             name: "Anish Virkhare",
//             email: "anish.virkhare@icloud.com",
//             age:20,
//             number:8623899902

//         },
//         {
//             name: "Pooja Kathariya",
//             email: "poojakathariya0702@gmail.com",
//             age:20,
//             number:9322748729

//         },
//         {

//             name: "Shreya Singh",
//             email: "2020.shreya.singh@ves.ac.in",
//             age:20,
//             number:9119451557

//         }
//     ]

    const [results, setResult] = useState([]);
    fetch("https://randomuser.me/api/?results=10")
        .then(Response=>Response.json())
        .then(data=>setResult(data.results))
 return(

  <div>

    {results.map((results,index)=>{
        return(
            <ContactCard key={index}
            avatarUrl={results.picture.large}
            name={results.last}
            email = {results.email}
            age = {results.dob.age}
            number ={results.cell}/>

        )
    })}



  </div>


 )

}

export default App;
