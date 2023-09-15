import { useState } from "react";
import "./App.css";
import './components/Cart/cart.css'
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import { useEffect } from "react";
import Header from "./components/header/Header";

// react alert importing 
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

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
    return alert('Dear Student, You can\'t enroll twice in the same course. Try another ') 
   }else{
     setSelectedCourse([...selectedCourse,course])
   }
  }

  return (
    <>
    <div className="text-center content">
      <header className="md:hidden"><Header selectedCourse={selectedCourse}></Header></header>

        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl pb-8 hidden md:block pt-11">Course Registration</h1>
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
