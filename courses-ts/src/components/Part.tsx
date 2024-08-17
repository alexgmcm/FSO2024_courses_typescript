import { CoursePart } from "../types";
import { assertNever } from "../utils";

const Part = ({coursePart}: {coursePart: CoursePart}) => {
    switch(coursePart.kind){
        case "basic":
            return (<p><b> {coursePart.name} - {coursePart.exerciseCount} </b> <br/><i>{coursePart.description}</i></p>);
        case "group":
            return  (<p><b> {coursePart.name} - {coursePart.exerciseCount} </b><br /> No. of group projects: {coursePart.groupProjectCount}</p>);;
        case "background":
            return (<p><b> {coursePart.name} - {coursePart.exerciseCount} </b><br /> <i>{coursePart.description}</i><br />{coursePart.backgroundMaterial}</p>);
        case "special":
            return (<p><b> {coursePart.name} - {coursePart.exerciseCount} </b><br /> <i>{coursePart.description}</i><br /> required skills: {coursePart.requirements.join(", ")}</p>);
        default:
            assertNever(coursePart);
    }
    
}

export default Part;