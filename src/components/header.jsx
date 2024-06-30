import {books} from "../constants/mockData"
const Header = ({searchBook,setSearch,setBooks}) => {
    const searchHandler=(e)=>{
      const  value=e.target.value;
        setSearch(value);
    if(value){
        setBooks(books=>books.filter(i=>i.title.toLowerCase().includes(value)))
    
    }else{
        setBooks(books)
    }
    }
    return (
        <>
<section className="w-full rounded-md">
    <div id='bg' className="w-full rounded-xl   bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center ">

        <div>
            <h1 className="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-semibold bg-gray-800 p-2 rounded-md bg-opacity-80 rounded-sm">Book App For You</h1>
        </div>
        <div className="w-full mx-auto">
            <form>
                <div className="xl:w-1/2 lg:w-[60%] md:w-[70%] sm:w-[70%] xs:w-[90%] mx-auto flex gap-2 md:mt-6 xs:mt-4 mx-4">
                    <input type="text" value={searchBook} onChange={searchHandler} className="border-none text-gray-700 focus:outline-none w-full p-2 rounded-md text-sm "
                            placeholder="search book" />
                    <button type="submit" disabled className="px-[10px] p-3 bg-opacity-30 bg-blue-500 text-sm text-white rounded-md cursor-default font-semibold">Please Search</button>
                </div>
            </form>
        </div>
    </div>
</section>
        </>
    );
}

export default Header;
