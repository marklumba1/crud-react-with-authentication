import { useNavigate } from "react-router-dom";
import "../../assets/styles/home/home.css"
const Home = () => {
    const navigate = useNavigate()
    return ( 
        <div className="container">
            <div className="inner home">
                <h1>CRUD Application</h1>
                <p>Created by Mark O. Lumba</p>
                <button onClick={() => navigate(`/login`)}>Click here to login</button>
            </div>
        </div>
     );
}
 
export default Home;