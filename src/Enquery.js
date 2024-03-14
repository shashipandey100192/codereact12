
import "./style.css";
import pic from './images/img2.jpg';


export function Enquery()
{

const mypic = "https://nalandaopenuniversity.net.in/wp-content/uploads/2024/03/holi-2024.jpg";
    return(
        <div className="myenquery">
            
            <p> this is en query page</p>
            <h1>import image from src folder</h1>
            <img src={pic} width="300" alt="picture"/>
            <h1>import image from public folder</h1>
            <img src="photos/img1.jpg" width="300"/>
            <h1>import image from online (cdn)</h1>
            <img src={mypic} width="300"/>
        
        </div>
    )
}