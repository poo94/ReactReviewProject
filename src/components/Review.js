import React,{useState} from 'react'
import PeopleData from './PeopleData'

import { VscLoading } from "react-icons/vsc";
import { FiChevronLeft, FiChevronRight} from "react-icons/fi";

const Review=()=> {

    const [index, setindex] = useState(0)
    const{id,name,image,job}=PeopleData[index]

    const getRand=()=>{
        const rand = Math.floor(Math.random()*(PeopleData.length))
        setindex(rand)
    }

const checkIndex =(number)=>{
    if(number>PeopleData.length-1){
             return 0 
              }
    if (number<0){
            return PeopleData.length-1   
    }
    return number
}

const handleprev=()=>{
    setindex(   (index)=>{
       let newindex = index+1
       return checkIndex(newindex)
    })
   } 
   
const handlenext=()=>{
    setindex((index)=>{
        let newindex = index-1
        return checkIndex(newindex)
     })
} 

    return (
        <div>   
            <VscLoading className="icon"/>Reviews By
            <div key={id}>
               <h3>{name}</h3> <h4>{job}</h4>
                <h4><img src={image} style={{borderRadius: "10%", height:"200px",width:"200px" }} alt=""/></h4>   
            </div>
            <div>
            <button name="left" onClick={handleprev}><FiChevronLeft/></button>
                <button onClick={getRand}>Surprise Me</button>
            <button name="right" onClick={handlenext}><FiChevronRight/></button>
            </div>
        </div>
    )
}

export default Review
