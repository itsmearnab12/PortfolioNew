import { Experiencecard } from "../Components/Experiencecard";
import { Techstack } from "../Components/Techstack";
import Compylogo from "../assets/compylogo.png"
import "./Experiencepage.css"

export function ExperiencePage() {
    return (
        <>
            <div className="Experiencepage">
                <div className="exphead">
                    <h5>- Experience</h5>
                    <h2>My Work Experience</h2>
                </div>
                <div className="timeline-item">
                    <div className="experience">
                        <Experiencecard
                            image={Compylogo}
                            role="Web Developer"
                            cpyname="Syntecxhub"
                            type="Intership"
                            date="Mar 2026 -  Apr 2026"
                            desc="Worked as a Developer Intern, building scalable web applications using the MERN stack. Developed and integrated RESTful APIs, managed MongoDB databases, and applied modern JavaScript practices to enhance application performance and functionality."
                            tech={["React.js", "Express.js", "Node.js", "MongoDB.js", "Tailwind.css"]}
                        />
                    </div>
                </div>
                <div className="techstack">
                    <Techstack />
                </div>
            </div>
        </>
    );
}