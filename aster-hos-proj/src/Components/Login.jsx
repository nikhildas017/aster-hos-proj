import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const [login,setLogin]=useState({
        username:'',
        password:'',
    });
    const navigate=useNavigate()

    const handleChange=(e)=>{
        const{name,value}=e.target;
        setLogin({...login,[name]:value})
    }
    const handleSubmit=e=>{
        e.preventDefault();
        if(login.username=="nikhil" && login.password=="das"){
            navigate('/home')
        }
        else{
            alert("Invalid username and password");
        }
    }
    return(
        <div>
            <h1>Hello</h1>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input name="username" value={login.username} onChange={handleChange}/><br />
                <label>Password: </label>
                <input type="password" name="password" value={login.password} onChange={handleChange}/><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Login;