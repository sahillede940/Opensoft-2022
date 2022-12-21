import { React , useEffect , useState } from "react";
import classes from './StatusCard.module.css'
import { getHours , getMinutes } from 'date-fns';

const StatusCard = () => {
    const restaurantData = JSON.parse(localStorage.getItem("restaurant_data"));
    const [opens, setOpens] = useState(0);
    const [closes, setCloses] = useState(0);
    const [current, setCurrent] = useState(0);
    
    const getTime = (t) => {
        t = new Date(t);
        let tm = getMinutes(t) + 60 * getHours(t);
        return tm;
    };
    useEffect(() =>  {
        setOpens(getTime(restaurantData.opening_time));
        setCloses(getTime(restaurantData.closing_time));
        setCurrent(getTime(new Date()));        
    } , []);
    
    return (
        <>
            <div className={classes.card}>
                <div className={classes.heading}>
                    Restaurant Status
                </div>
                <div className={classes.statusbar}>
                    {/* assumption taken that restaurant closes before midnight */}
                    {(current >= opens && current <= closes) ? <span className={classes.open}>
                        Open
                    </span> :
                    <span className={classes.close}>
                        Closed
                    </span>}
                </div>
                <div className={classes.order}>
                    <span className={classes.title}>
                        Total Orders Compeleted
                    </span>
                    <span className={classes.number}>
                        1500
                    </span>
                </div>

            </div>
        </>
    );
}

export default StatusCard;