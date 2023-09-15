import PropTypes from "prop-types";
import "../Cart/cart.css";
const Header = ({
  selectedCourse,
  cartCreditHours,
  remainingCreditHours,
  totalPrice,
}) => {
  return (
    <div>
      <div className="navbar bg-white  fixed shadow-sm pl-3">
        <div className="flex-1">
          <img
            className="w-14"
            src="https://i.ibb.co/r6BnbmW/1-P6-Umryy9s-q-Cd-Lki-YZga9w-removebg-preview.png"
            alt="ph"
          />
        </div>
        <div className="flex-none pr-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#05BFDB">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span
                  className={`badge badge-sm indicator-item ${
                    selectedCourse.length
                      ? "bg-red-500"
                      : "bg-gray-300 text-black"
                  } w-2 p-2 text-white`}>
                  {selectedCourse.length}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] text-left card cart-list card-compact dropdown-content text-[12px] sm:text-[16px] w-[94vw] sm:w-[80vw] overflow-auto h-[80vh] bg-[#05bfdbef] ">
              <h1 className="py-3 text-1xl text-white text-[17px] sm:text-[20px] font-bold">
                Credit Hour Remaining {remainingCreditHours} hr
              </h1>
              <hr className=" mt-2 py-1" />
              {selectedCourse.map((course) => (
                <li key={course.id}>{course.course_name}</li>
              ))}
              <hr
                className={`${
                  selectedCourse.length ? "block" : "hidden"
                } py-2 mt-3`}
              />

              <div className="text-black bg-[#ffffff30] text-[17px] space-y-1 py-3 p-2">
                <h2>
                  Total Credit Hour :{" "}
                  <strong className="text-white">{cartCreditHours}</strong>
                </h2>
                <h2>
                  Total Price:{" "}
                  <strong className="text-white">{totalPrice} USD</strong>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  selectedCourse: PropTypes.string.isRequired,
  cartCreditHours: PropTypes.number.isRequired,
  remainingCreditHours: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default Header;
