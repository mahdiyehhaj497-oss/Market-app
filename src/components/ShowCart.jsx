import { useEffect, useState } from "react"
import Carts from "./Carts";
let demo
export default function ShwoCart() {
    const [searchVal, setSearchVal] = useState("")
    const [allPosts, setAllPosts] = useState([])
    const[filtersData,setFiltersData]=useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((data) => setAllPosts(data));
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
          <h1 className="font-semibold text-5xl text-sky-700 mx-96">
            products
          </h1>
          <input
            className="w-1/2 h-9 bg-sky-100 p-3 mx-96 my-6 shadow rounded-lg ring-1 ring-sky-400 "
            value={searchVal}
            onChange={(evt) => setSearchVal(evt.target.value)}
            type="text"
            placeholder="Enter your term"
          />
        </div>

        <div className="flex flex-wrap-reverse justify-center bg-stone-50 space-x-7 space-y-7">
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