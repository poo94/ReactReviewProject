import React ,{useState} from 'react'

const Form=()=>{

const[user, updateUser] = useState({
    fname:'',
    lname:'',
    email:''
})


function changeEvent(ev){
                    const{name,value}=ev.target;
                   updateUser((prev)=>{
                 return{
                           ...prev,
                            [name]:value
                       }
                           })

}


function submitEvent(e) {
    e.preventDefault();
}

    return(

        <>
<center>
<h1> Application Form </h1>
          
          <form onSubmit={submitEvent}>
        <input type="text" name="fname" placeholder="enter firstname here" onChange={changeEvent} value={user.fname}/><br/> <br/>
        <input type="text" name="lname" placeholder="enter Lastname here" onChange={changeEvent} value={user.lname}/><br/><br/>
        <input type="text" name="email" placeholder="enter email here" onChange={changeEvent} value={user.email}/><br/><br/>
        <button type="submit" class="btn btn-primary mb-3"> Create </button>
        </form>
        </center>

        <br/>
         <h1>{user.fname}{user.lname}{user.email}</h1>

        </>
    )
}

export default Form