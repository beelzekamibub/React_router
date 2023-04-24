import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    const style = {
        display: "grid"
    }
    return (
        <>
            <div>Blog List</div>
            <div className="grid_container_for_books" style={style}>
                <div className="Grid_item_for_book">
                    <Link to="/Post/1">book 1</Link>
                    {/* this 1 in the to attribute can be parsed in the postdetails component which the browser router routes is defined to take us to */}
                </div>
                <div className="Grid_item_for_book">
                    <Link to="/Post/2">book 2</Link>
                </div>
                <div className="Grid_item_for_book">
                    <Link to="/Post/3">book 3</Link>
                </div>
            </div>

        </>

    )
}

export default Home