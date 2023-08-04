import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://www.yellowblissroad.com/hot-mexican-corn-dip/";
    let authorPhoto = "https://www.yellowblissroad.com/wp-content/uploads/2018/05/Profile-image-2-21-1200px-368x368.jpg"
    let authorName = "Kristen Maxwell"

    return (
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates}/>
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog name</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render () {
        return(
            <div>
                <div>
                <h1>Hot Mexican Corn Dip</h1>
                <p>Hot Mexican Corn Dip has all the flavors of Mexican Street Corn in a deliciously dippable format. It’s creamy and cheesy with sweet pops of roasted corn and just a touch of heat.</p>
                </div>
                <RecipeAuthor />
            </div>

        );
    }
}

export default RecipeDescription;