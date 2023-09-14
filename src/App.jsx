import { useState } from "react";
import "./App.css";
import './components/Cart/cart.css'
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import { useEffect } from "react";

function App() {
  // Available courses 
  const [availableCourses,setAvailableCourses] = useState([])
  const [selectedCourse, setSelectedCourse] = useState([])


  // fetching all courses here 
  useEffect(()=>{
    fetch('../public/Courses.json')
    .then(res => res.json())
    .then(data => setAvailableCourses(data))
  },[])

  
  // add selected course to the cart
  const addToCart = (course)=>{
   const duplicateCourse =  selectedCourse.find(chosenCourse => chosenCourse.id === course.id)
   if(duplicateCourse){
    return alert('can\'t add more than one')
   }else{
     setSelectedCourse([...selectedCourse,course])
   }
  }




  return (
    <>
    <div className="text-center py-8 content">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl pb-8">Course Registration</h1>
      <div className="md:flex gap-x-7 px-4 md:px-6 lg:px-16 ">
        <Courses
        availableCourses={availableCourses}
        addToCart={addToCart}
        ></Courses>
        <Cart
        selectedCourse={selectedCourse}
        ></Cart>

      </div>

    </div>
    </>
  );
}

export default App;
