import React from "react";
import "./style.css";

function Book(props) {

    return (
        <div className = "Book card-body p-2">

            <button book={props.book.id || props.book._id} onClick={props.onClick}> {props.btn} </button>

            <h5>{props.book.title}</h5>
            <p>Written by {props.book.authors}</p>
            <img src={props.book.img} className="img-thumbnail float-left rounded mr-3 mb-2" alt="thumbnail"></img>
            <p>{props.book.desc}</p>
            

        </div>



    )

}


export default Book;