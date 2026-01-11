import { ProjectCard } from "/src/Components/Projectcard.jsx"
import "./Projectpage.css"
export function ProjectPage() {
    return (
        <>
            <div className="Projectpage">
                <h5>-My Portfolio</h5>
                <h2>Projects I Worked on</h2>
                <h4>Each started with curiosity and ended with learning</h4>
            </div>
            <div className="Project">
                <div className="projects-grid">
                    <ProjectCard
                        title="CHAT APP"
                        description="This Chat Application is a full-stack project built with React, Node.js, Express.js, and Tailwind CSS, enabling real-time communication through a clean and responsive interface. It focuses on frontend–backend integration, RESTful APIs, and modern UI design as a hands-on learning project."
                        tech={["React", "Tailwind", "Node.js", "Express.js", "Socket.io"]}
                        live="https://lnkd.in/g4KUKk9d"
                        github="https://lnkd.in/gyG5H5mK"
                    />
                    <ProjectCard
                        title="Quick NEWS"
                        description=" My journey into programming began with curiosity and perseverance. Until my higher studies, I had no prior exposure to coding."
                        tech={["Html", "Css", "JavaScript", "Node.js", "Express.js"]}
                        live="https://github.com/itsmearnab12/FullStackProjects/tree/main/Project%201"
                        github="https://github.com/itsmearnab12/FullStackProjects/tree/main/Project%201"
                    />
                    <ProjectCard
                        title="Simple Portfolio Website"
                        description=" This Portfolio Website was created as my starting project to polish my HTML and CSS skills, focusing on structured layouts, responsive design, and clean visual presentation while showcasing my profile and work."
                        tech={["HTML", "CSS"]}
                        live="https://your-live-link.com"
                        github="https://github.com/your-repo"
                    />
                    <ProjectCard
                        title="Simple Portfolio Website"
                        description=" My journey into programming began with curiosity and perseverance. Until my higher studies, I had no prior exposure to coding."
                        tech={["HTML", "CSS"]}
                        live="https://your-live-link.com"
                        github="https://github.com/your-repo"
                    />
                </div>
            </div>
        </>
    )
}