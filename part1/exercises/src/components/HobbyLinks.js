import classes from './HobbyLinks.module.css';

export default function HobbyLinks() {
    const hobbyLinks = ["https://seakayakexplorer.com/kayaking-st-louis-mo/", "https://trailnet.org"];
    return (
        <div className={classes.border}>
        <a href = {hobbyLinks[0]}>Best Places to Kayak in St. Louis</a>
        <p></p>
        <a href = {hobbyLinks[1]}>Trailnet</a>
        </div>
        
    );
}