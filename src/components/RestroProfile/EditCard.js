import { React } from "react";
import classes from './EditCard.module.css'
import { Link } from 'react-router-dom'

const EditCard = () => {
    return (
        <>
            <div className={classes.card}>
                <div>
                    <Link to="/editrestoprofile">
                        <button className="restro-btn">Edit Profile</button>
                    </Link>
                </div>
                <div>
                    <Link to="/editrestoprofile">
                        <button className="restro-btn">Add Items</button>
                    </Link>
                </div>
                <div>
                    <Link to="/editrestoprofile">
                        <button className="restro-btn">Edit Menu</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default EditCard;