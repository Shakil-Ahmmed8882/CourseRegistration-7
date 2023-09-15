import { useState } from "react";
import "./App.css";
import "./components/Cart/cart.css";
import Cart from "./components/Cart/Cart";
import Courses from "./components/Courses/Courses";
import { useEffect } from "react";
import Header from "./components/header/Header";
// react tost
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Available courses
  const [availableCourses, setAvailableCourses] = useState([]);
  // items in cart
  const [selectedCourse, setSelectedCourse] = useState([]);
  // cart credit hours
  const [cartCreditHours, setCartCreditHours] = useState(0);
  // remaining credit
  const [remainingCreditHours, setRemainingCreditHours] = useState(20);
  //total pricing state
  const [totalPrice, setTotalPrice] = useState(0);

  // fetching all courses here
  useEffect(() => {
    fetch("Courses.json")
      .then((res) => res.json())
      .then((data) => setAvailableCourses(data));
  }, []);

  // add selected course to the cart
  const addToCart = (course) => {
    const doubleSelectedCourse = selectedCourse.find(
      (chosenCourse) => chosenCourse.id === course.id
    );

    if (doubleSelectedCourse) {
      toast.warning("You can't enroll twice in the same course. Please choose a different one. 😊👍", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      let totalCreditHours = course.credit;
      let CollectedPrice = course.Price;
      selectedCourse.forEach((courseCredit) => {
        totalCreditHours += courseCredit.credit;
        CollectedPrice += courseCredit.Price;
      });

      if (totalCreditHours <= 20) {
        // Calculate remaining credits after updating the cart
        const remainingCredits = 20 - totalCreditHours;
        toast.success('Enrolled', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        // Update the state with the remaining credits
        setRemainingCreditHours(remainingCredits);
        setTotalPrice(CollectedPrice);
        // Update the cart and total credit hours
        setSelectedCourse([...selectedCourse, course]);
        setCartCreditHours(totalCreditHours);
      } else {
        toast.error("Credit limit reached, max is 20.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  console.log(totalPrice);
  return (
    <>
      <div className="text-center content pb-16">
        <header className="md:hidden">
          <Header
            selectedCourse={selectedCourse}
            cartCreditHours={cartCreditHours}
            remainingCreditHours={remainingCreditHours}
            totalPrice={totalPrice}></Header>
        </header>
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl pb-8 hidden md:block pt-11">
          Course Registration
        </h1>
        <div className="md:flex gap-x-7 px-4 md:px-6 lg:px-16 ">
          <Courses
            availableCourses={availableCourses}
            addToCart={addToCart}></Courses>
          <Cart
            selectedCourse={selectedCourse}
            cartCreditHours={cartCreditHours}
            remainingCreditHours={remainingCreditHours}
            totalPrice={totalPrice}></Cart>

          <ToastContainer
            position="top-right"
            autoClose={500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </div>
      </div>
    </>
  );
}

export default App;
