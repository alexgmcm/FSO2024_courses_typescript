import { CourseParts } from "../types";
import Part from "./Part";
const Content = (props: CourseParts) => {
    const courseParts = props.courseParts;
    const renderedParts = courseParts.map(part => {
        return (<Part coursePart={part} key={part.name} />)
    })

    return renderedParts;
    
        
}

export default Content;