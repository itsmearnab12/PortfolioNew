import CertificateSlider from "../Components/CertificateSlider";
import "./Certificatepage.css"

export function CertificatePage() {
    return (
        <>
            <div className="Certificatehead">
                <h2>My Certification</h2>
                <CertificateSlider />
            </div>
        </>
    );
}