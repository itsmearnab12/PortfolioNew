import "./Projectpage.css"
import { FaHammer } from "react-icons/fa6";
import { LuConstruction } from "react-icons/lu";
export function ProjectPage(){
    return(
        <>
            <div className="Projectpage">
                <h5>-My Projects</h5>
                <h2><LuConstruction />Projects... Stay tuned!<FaHammer /></h2>
                <h4>A learning journey through projects and real-world implementations, each one helping me learn something new.</h4>
            </div>
            <div className="Projectcard">
            </div> 
        </>
    )
}