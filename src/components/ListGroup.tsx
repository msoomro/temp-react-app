
function ListGroup() {
    let items = ["list item 1", "list item 2"];
    items = [];
    
    
    return (
        <>
            <h1>List Group</h1>
            {items.length === 0 ? <p>No item found</p> : null}
            <ul className="list-group">
                {items.map(item => (
                    // to overcome warning that each child in a list needs a "unique key", add key tag. for now can use the item itself since each item ought to be distinct else collapse to one item still works functionally
                    <li key={item} className="list-group-item">{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;