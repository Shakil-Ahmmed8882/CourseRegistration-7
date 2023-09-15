import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import { useEffect } from "react";
import Header from "./components/header/Header";

export function App() {
  // Available courses
  const [availableCourses, setAvailableCourses] = useState([]);
  // items in cart
  const [selectedCourse, setSelectedCourse] = useState([]);
  // cart credit hours
  const [cartCreditHours, setCartCreditHours] = useState(0);
  // remaining credit
  const [remainingCreditHours, setRemainingCreditHours] = useState(20);

  // fetching all courses here
  useEffect(() => {
    fetch("../public/Courses.json")
      .then((res) => res.json())
      .then((data) => setAvailableCourses(data));
  }, []);

  // add selected course to the cart
  const addToCart = (course) => {
    const duplicateCourse = selectedCourse.find(
      (chosenCourse) => chosenCourse.id === course.id
    );

    if (duplicateCourse) {
      return alert(
        "Dear Student, You can't enroll twice in the same course. Try another "
      );
    } else {
      setSelectedCourse([...selectedCourse, course]);
    }
  };

  return (
    <>
      <div className="text-center content pb-16">
        <header className="md:hidden">
          <Header selectedCourse={selectedCourse}></Header>
        </header>

        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl pb-8 hidden md:block pt-11">
          Course Registration
        </h1>
        <div className="md:flex gap-x-7 px-4 md:px-6 lg:px-16 ">
          <Courses
            availableCourses={availableCourses}
            addToCart={addToCart}></Courses>
          <Cart selectedCourse={selectedCourse}></Cart>
        </div>
      </div>
    </>
  );
}
