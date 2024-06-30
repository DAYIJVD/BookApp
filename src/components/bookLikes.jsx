
const BookLikes = ({
fav
}) => {
    return (
        <>
                <div className="ml-1 mt-1 grid grid-cols-2  gap-1 " >
                
                {fav.map(i=><div   className="text-center mb-1 w-full rounded-md bg-opacity-20 bg-blue-900" key={i.id}><img src={i.image}  alt="Map 2" style={{width:"130px",height:"170px"}}  className="   rounded-t-lg mr-14"/>
                    <span style={{fontSize:"12.5px"}}  className="text-white text-base">
          {   i.title.substring(0,10)}...
            </span>
                </div>)}


                </div>
       

        </>   
       
    );
}

export default BookLikes;
