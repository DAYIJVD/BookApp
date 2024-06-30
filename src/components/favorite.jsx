import BookLikes from "./bookLikes";


const Favorite = ({fav}) => {
   // eslint-disable-next-line no-constant-condition
   if(fav.length){
    return (
        <div id="fav" className={`w-90 p-1   mt-2 bg-opacity-10 bg-blue-900 rounded-md`}>
          <h1 className="ml-2">Likes</h1>  
          <BookLikes fav={fav} />
        </div>
    );
   }else{
     return null
   } 
}

export default Favorite;
