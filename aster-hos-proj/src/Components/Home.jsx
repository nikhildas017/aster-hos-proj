import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Home(){
    // const[doctorData,setDoctorData]=useState()
    // useEffect
    
    return (
        <div className="page-background">
            <h1>Welcome to Home Page</h1>
            <Link to="/">Go Back</Link> 
        </div>
    );
}
export default Home;