import { Enquery } from "./Enquery";
import { Home } from "./Home";

function About()
{
    return <div>
        <h1>this is about page</h1>
        <p>this is page</p>
    </div>
}
export default About

function Contactus()
{
    return <h1>this is contactus page</h1>
}

export {Contactus}

export function About1()
{
    const a =  600;
    const b =800;
    let c= 10;
    let page = false;

    return(
        <div>
            <h1>this is About1 fucntion</h1>
            <h1>{a+b}</h1>
            <h2>{500+900}</h2>
            <h2>Amount is :{c>50 ?  a : b}</h2>
            {/* {<Home></Home>}
            {<Enquery></Enquery>} */}

            {page ? <Home/> : <Enquery/>}
        </div>
    )
}






