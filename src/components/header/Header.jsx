import PropTypes from 'prop-types'
import '../Cart/cart.css'
const Header = ({selectedCourse}) => {
      console.log(selectedCourse)
  return (
    <div>
      <div className="navbar bg-base-100 fixed shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{selectedCourse.length}</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card cart-list card-compact dropdown-content text-[12px] sm:text-[16px] w-[300px] sm:w-[500px] overflow-auto h-[80vh] bg-[#05bfdbef] ">
                                   <h1 className='py-3 text-1xl text-white font-bold'>Credit Hour Remaining 7 hr</h1>
                  <hr className=' mt-2 py-1'/>
                                          {
                              selectedCourse.map(course => <li key={course.id}>{course.course_name}</li> )
                        }
                                         <div className='text-white space-y-1 pb-4 '>
                  </div>
                  <h2>Total Credit Hour : <strong>12</strong></h2>
                  <h2>Total Price: <strong>434 USD</strong></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

Header.propTypes = {
      selectedCourse: PropTypes.string.isRequired, 
}

export default Header;
