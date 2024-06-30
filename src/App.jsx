import { useState } from "react";
import Book from "./components/book";
import Favorite from "./components/favorite";
import Header from "./components/header";
import {books} from "./constants/mockData"
function App() {
  const [fav,setFave]=useState([])
  const [searchBook,setSearch]=useState("")
  const [booksData,setBooks] =useState(books);
  console.log(booksData);
  return (
    <>
     <Header  searchBook={searchBook} setSearch={setSearch} setBooks={setBooks}/>
     <div className="flex gap-4 flex-row-reverse">
      <Favorite fav={fav}/>
      <div className="w-full">
     {booksData.map((i)=><Book key={i.id} setFave={setFave} Fav={fav}
     book={i}
     />)} 
     {!booksData.length&&<h1>not found :(</h1>}
      </div>
     
     </div>
    
    </>
  );
}

export default App;
