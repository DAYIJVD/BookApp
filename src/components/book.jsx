import { useState } from "react";


const Book = (props) => {
    const {
        author,
        country,
        image,
        language,
        link,
        pages,
        title,
        year,
       id 
      }=props.book;
const [like,setLike]=useState(false)
    return (
        <>
 <div className="bg-blue-900 bg-opacity-5 w-full shadow-lg mt-2 rounded-lg p-2 mb-4 flex">
            <img src={`./src/assets/${image}`} alt="Map2" className=" w-48  rounded-t-lg mr-4"/>
            <div className='flex relative  flex-col  justify-between'>
              <div>
               <h1 style={{fontSize:"35px"}}>{title}</h1>
                <p style={{fontSize:"15px"}}>{author}</p>
                <p style={{fontSize:"10px"}}>{pages} pages</p>
                <p style={{fontSize:"12px"}}>{language}-{year}</p>
                <a style={{color:"blue",fontSize:"14px",cursor:"pointer"}} href={link}>more...</a>
              </div>

              <button onClick={(e)=>{
                // eslint-disable-next-line react/prop-types
                if(props.Fav.findIndex(item => item.id == e.target.name) == -1) {
                    props.setFave(fav=>{
                      return[...fav,props.book]
                })
                setLike(i=>!i)
                setTimeout(()=>{
                    setLike(i=>!i)
                },500)
                }else{
                    alert("in book liked")
                    
                }

              }} name={id} className="absolute bottom-0 left-0 bg-indigo-500 hover:bg-red-400 focus:outline-black rounded-tl-full rounded-br-full outline-none focus-none text-white text-sm text-center self-center px-8  py-2 m-2">{like?"Liked!":"Like"}</button>
            </div>
        </div>

        </>
    );
    
}

export default Book;
