import Item from "./Item"

const Fooditems = ({items}) =>{

    



    return(
        <>
            <ul key="list-group" className="list-group" > 
            { items.map((items) => 
            <Item key={items}  foodItems={items} handleByButton={()=> console.log(`${items} bought`)} />

                )}
            </ul>

        </>
    );
};
 
export default Fooditems