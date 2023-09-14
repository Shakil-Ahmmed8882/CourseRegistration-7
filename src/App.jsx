import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import { useEffect } from "react";

function App() {
  // Available courses 
  const [availableCourses,setAvailableCourses] = useState([])




  // fetching all courses here 
  useEffect(()=>{
    fetch('../public/Courses.json')
    .then(res => res.json())
    .then(data => setAvailableCourses(data))
  },[])

  console.log(availableCourses)




  return (
    <>
    <div className="text-center py-8">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl pb-8">Course Registration</h1>
      <div className="md:flex gap-x-7 px-4 md:px-6 lg:px-16 ">
        <Courses
        availableCourses={availableCourses}
        ></Courses>
        <Cart></Cart>

      </div>

    </div>
    </>
  );
}

export default App;
