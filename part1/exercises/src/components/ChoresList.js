import classes from './ChoresList.module.css';

export default function ChoresList () {
   return <div>
      <h3 className = {classes.choresHeading}>Chore List</h3>
      <ol>
            <li className={classes.choresText}>Dishes</li>
            <li className={classes.choresText}>Vacuum</li>
            <li className={classes.choresText}>Trash</li>
         </ol>
   </div>;
}