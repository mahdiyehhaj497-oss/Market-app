
export default function Navbar() {
 
  return (
    <>
      <div className=" flex  px-6 py-2 bg-sky-100">
        <img className="h-10" src="src/assets/org.svg" />
        <h1 className=" text-sky-800 text-3xl font-serif font-bold ">
          ELEGANT WEAR
        </h1>
        <div className=" ml-auto item-center  ">
        
          <ul className="flex gap-6 font-serif ">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Sing In </li>
          </ul>
        </div>
       
      </div>
    </>
  );
}