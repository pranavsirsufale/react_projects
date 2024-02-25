const Item = (props) =>{
    let{fooditem}= props;
    return (
        <li className="list-group-item kg-item" style={{listStyle:'none'}} ><span className="kg-span">{fooditem}</span></li>
    )
}

export default Item