import Item from "./Item"

const Fooditems = ({items}) =>{

    



    return(
        <>
            <ul key="list-group" className="list-group" > 
            { items.map((item) => 
            <Item key={item}  fooditem={item} />

                )}
            </ul>

        </>
    );
};
 
export default Fooditems