import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

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
    
    // const handleSubmit=e=>{
    //     e.preventDefault();
    //     if(login.username=="nikhil" && login.password=="das"){
    //         navigate('/home')
    //     }
    //     else{
    //         alert("Invalid username and password");
    //     }
    // }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setLoading(true)
        try {
            // TEMP – backend call comes next
            const tokens = await loginUser({
                username,
                password,
            })
            loginUser(tokens, { username, password })

            // store tokens
            // simulate success
            // localStorage.setItem("access", tokens.access)
            // localStorage.setItem("refresh", tokens.refresh)
            navigate("/home")
            
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    return(
        <div classForm="Login">
            <h1>Login Page</h1><br /><br /> 
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input name="username" value={login.username} onChange={handleChange}/><br /><br />
                <label>Password: </label>
                <input type="password" name="password" value={login.password} onChange={handleChange}/><br /><br /><br />
                {/* <button type="submit">Submit</button> */}
                <Button variant="primary" type="submit">Submit</Button>
            </form>
        </div>
    )
}
export default Login;