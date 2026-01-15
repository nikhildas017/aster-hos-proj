import { Link } from 'react-router-dom';

function Home(){

    return (
        <div className="page-background">
            <h1>Welcome to Home Page</h1>
            <Link to="/">Go Back</Link> 
        </div>
    );
}
export default Home;