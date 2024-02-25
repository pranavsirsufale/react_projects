
const ErrorMessage = ({items}) => {
    // let fooditems = ['dal','margritta pizza','orio cake','pie chocolate']
    // let fooditems = []
    return (
        <>
       { items.length === 0 && <h3 >
            I am still hungry 
        </h3>}
        </>
    )
}

export default ErrorMessage
