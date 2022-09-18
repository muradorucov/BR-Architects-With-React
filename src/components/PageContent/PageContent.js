import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Location } from "./Location/Location";
import { Project } from "./Project/Project";


function PageContent() {
    return (
        <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
            <Project />
            <About />
            <Contact />
            <Location />
        </div>

    );
}

export { PageContent }