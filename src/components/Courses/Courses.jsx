import PropTypes from "prop-types";
import Course from "./course/course";
import "../Courses/courses.css";

const Courses = ({ availableCourses, addToCart }) => {
  return (
    <div className="flex-1 courses-container pt-24 md:pt-0">
      {availableCourses.map((course) => (
        <Course key={course.id} course={course} addToCart={addToCart} />
      ))}
    </div>
  );
};

// Props type validating here
Courses.propTypes = {
  availableCourses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Courses;
