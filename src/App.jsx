
import { useEffect,useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ShwoCart from "./components/ShowCart";

export default function App() {
  const [showWelcom, setShowWelcom] = useState(false)
  
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn")
        if (!isLoggedIn) {
          setShowWelcom(true)
          localStorage.setItem("isLoggedIn",true)
        }
      },[])
    
  
  return (
    <>
      <Navbar />
      {showWelcom && (
        <div className="fixed top-1/2 left-1/2 -translate-1/2 flex justify-center items-center h-[70vh] w-[80vh]  bg-amber-100 ">
          <button
            className="p-2 absolute top-1 left-1"
            onClick={() => setShowWelcom(false)}
          >
            X
          </button>
          welcome
        </div>
      )}
      <ShwoCart />
      <Footer />
    </>
  );
 }