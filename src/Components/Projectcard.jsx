import "./Projectcard.css"
export function Projectcard({ Title, Discription, Tech, Livelink, Github }) {
    return (
        <>
            <div className="Project-card">
                <h3>{Title}</h3>
                <p>{Discription}</p>

                <div className="tech">{Tech}</div>

                <div className="buttons">
                    <a href={Livelink} className="Livelink" target="_blank">Live</a>
                    <a href={Github} className="Githublink" target="_blank">GitHub</a>
                </div>
            </div>
        </>
    );
}