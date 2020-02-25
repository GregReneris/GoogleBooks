import React, {useState, useEffect} from "react";
import API from "../utils/API";
import Book from "../Book"



function Saved(props){

    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        
        API.getBooks().then(res =>{
            setBooks(res.data)
        
        });
    
      }, [])
    
    
    
    
    

  
    const handleDelete = event => {
        event.preventDefault ()
        // console.log(event);
        const bookid = event.target.getAttribute("book");
        console.log ("delete",bookid);

        // console.log(booksbyid[bookid])
        API.deleteBook(bookid)
        .then(res => {
            console.log("here after dlte book response")
            API.getBooks().then(books => {
                console.log("this is the books data:",books.data)
                setBooks(books.data)
            })
        })
    }

    


    return(
        <div>
            <div>
                Saved Below! <br/>
            </div>

            <div className = "card col-6 mx-auto mt-3">
                {books.map(book => <Book key={book._id} book={book} btn="delete" onClick={handleDelete}></Book>)}

            </div>
        </div>

    )


}


export default Saved; 
