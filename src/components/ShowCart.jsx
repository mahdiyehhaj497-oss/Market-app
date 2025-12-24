import { useEffect, useState } from "react"
import Carts from "./Carts";
import Loading from "./Loading";
let demo
export default function ShwoCart() {
    const [searchVal, setSearchVal] = useState("")
    const [allPosts, setAllPosts] = useState([])
  const [filtersData, setFiltersData] = useState([])
  const[isLoading,setIsLoading]=useState(true)
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
        .then((data) => setAllPosts(data))
    .finally(()=>setIsLoading(false))
    }, [])
    useEffect(() => {
        if (demo) { clearTimeout(demo) }

        demo = setTimeout(() => {
            setFiltersData(allPosts.filter(item => item.title.includes(searchVal)))
        },1000)
    },[allPosts,searchVal])
    
    return (
      <>
        <div className="bg-stone-100">
          <h1 className="font-semibold text-5xl text-[#6A0572] mx-96">
            products
          </h1>
          <input
            className="w-1/2 h-9 bg-[] p-3 mx-96 my-6 shadow rounded-lg border-2 border-[#D19A8A] "
            value={searchVal}
            onChange={(evt) => setSearchVal(evt.target.value)}
            type="text"
            placeholder="Enter your term"
          />
        </div>
        {isLoading && <Loading />}
        <div className="grid grid-cols-5 gap-4 ml-12 mt-10 mb-10 ">
          {filtersData.map((item) => (
            <Carts
              key={item.id}
              title={item.title}
              body={item.body}
              image={item.image}
              category={item.category}
              price={item.price}
            />
          ))}
        </div>
      </>
    );
}