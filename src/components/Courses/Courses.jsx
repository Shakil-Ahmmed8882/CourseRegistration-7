import Course from "./course/course";
import '../Courses/courses.css'
import PropTypes from 'prop-types'
const Courses = ({availableCourses}) => {
      return (
            <div className="flex-1 courses-container">
                  {
                        availableCourses.map(course => <Course key={course.id}
                        course={course}
                        ></Course>)
                  }
 
            </div>
      );
};

Courses.propTypes = {
      availableCourses: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired, 
        })
      ).isRequired,
    };
    
export default Courses;