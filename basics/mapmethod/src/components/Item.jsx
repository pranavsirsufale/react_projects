import styles from "./item.module.css"
const Item = ( {foodItems , handleByButton } ) =>{
   

    // let{fooditem}= props;
    return (
        <li className={`${styles["kg-item"]} list-group-item`} style={{listStyle:'none'}} ><span className="kg-span">{foodItems}</span>
        <button className={`${styles.button} btn btn-info`} 
        onClick={handleByButton}> Buy </button></li>
    )
}

export default Item