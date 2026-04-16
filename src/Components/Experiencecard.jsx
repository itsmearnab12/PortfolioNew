import "./Experiencecard.css"
export function Experiencecard({ image, role, cpyname, type, date, desc, tech }) {
    return (
        <div className="experience-card">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <div className="expcard-header">
                    <div className="expcard-subheaderone">
                        <h4>{role}</h4>
                        <h4>{cpyname}</h4>
                    </div>
                    <div className="expcard-subheadertwo">
                        <h4>{type}</h4>
                        <h4>{date}</h4>
                    </div>
                </div>
                <p className="exp-para">{desc}</p>
                <div className="techused">
                    {tech.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}