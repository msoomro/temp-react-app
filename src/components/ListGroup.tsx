import { useState } from "react";

function ListGroup() {
    let items = ["list item 1", "list item 2"];
    
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>List Group</h1>
            {/* use and logic instead of ternary operator for conciseness*/}
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item, index) => (
                    // to overcome warning that each child in a list needs a "unique key", add key tag. for now can use the item itself since each item ought to be distinct else collapse to one item still works functionally
                    <li 
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={item} 
                        onClick={() => setSelectedIndex(index)} 
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;