import "./course.css";
// Import PropTypes
import PropTypes from "prop-types";

const Course = ({ course, addToCart }) => {
  const { img, course_name, description, Price, credit } = course;
  // here is each individual card is created
  return (
    <div className="bg-base-100 h-max-[400px] shadow-lg rounded-xl">
      <figure>
        <img
          className="rounded-tr-lg w-full h-[150px] object-cover rounded-tl-lg"
          src={img}
          alt="Shoes"
        />
      </figure>
      <div className="card-body bg-white pt-3 pb-4 px-5 rounded-lg text-left">
        <h2 className="card-title font-bold text-xl">{course_name}</h2>
        <p className="text-[#5c5c5cd2]">{description}</p>
        <div className="flex justify-between py-[3px]">
          <p className="flex items-center space-x-1">
            {" "}
            <img className="mr-2 w-5" src="/img/icons8-dollar-64.png" />
            Price: <strong>{Price}</strong>
          </p>
          <p className="flex items-center space-x-1">
            <img className="mr-2 w-5" src="/img/icons8-book-64.png" alt="" />{" "}
            Credit: <strong>{credit}hr</strong>{" "}
          </p>
        </div>
        <div className="pt-2">
          <button
            onClick={() => addToCart(course)}
            className="w-full p-1 active:scale-90 button-active
                hover:bg-[#39c6db] text-[19px]  rounded-lg bg-[#05BFDB] text-white">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

// Defining PropTypes here
Course.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    course_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    Price: PropTypes.number.isRequired,
    credit: PropTypes.string.isRequired,
    addToCart: PropTypes.func,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Course;
