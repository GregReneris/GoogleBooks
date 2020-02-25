import React, {useState} from "react";
import API from "../utils/API";
import Book from "../Book"



function Search(props){

    const [searchString, setSearchString] = useState("");
    const [books, setBooks] = useState([]);
    const [booksbyid, setBooksById] = useState({})


    const handleInputChange = event => {
        setSearchString(event.target.value)
    }

    const handleFormSubmit = event => {
        event.preventDefault ();
        // Searching for Book.
        console.log (searchString);
        API.search(searchString)
            .then(res => {
                console.log(res);
                
                let booksbyid={};
                let books = res.data.items.map(item => {                    
                    let img = "";
                    if (item.volumeInfo.imageLinks){
                        img = item.volumeInfo.imageLinks.thumbnail
                    }
                    let book = {
                        id : item.id, 
                        title : item.volumeInfo.title,
                        authors: item.volumeInfo.authors,
                        desc: item.volumeInfo.description,
                        img : img,
                        link: item.volumeInfo.infoLink
                    }
                    booksbyid [book.id] = book
                    return book
                }) 
                // console.log ("************", booksbyid);    
                setBooks(books)
                setBooksById(booksbyid)                
            })
    }


    const handleSave = event => {
        event.preventDefault ()
        // console.log(event);
        const bookid = event.target.getAttribute("book");
        // console.log (bookid);
        // console.log(booksbyid);
        console.log(booksbyid[bookid])
        API.saveBook(booksbyid[bookid])
    }


    return(
        <div>
            <div>
                Search Below! <br/>
                <form onSubmit = {handleFormSubmit}>
                    <input    type="text" onChange = {handleInputChange}/>
                    <button type="submit"> Submit Search! </button>
                </form>
            </div>

            <div className = "card col-6 mx-auto mt-3">
                {books.map(book => <Book key={book.id} book={book} btn="save" onClick={handleSave}></Book>)}

            </div>
        </div>

    )


}


export default Search; 
