import './cart.css'
import PropTypes from 'prop-types'
const Cart = ({selectedCourse}) => {
      return (
            <div className="cart cart-sticky text-left bg-[#05bfdbb3] w-72 hidden md:block">
                  <h1 className='py-3 text-1xl text-white font-bold'>Credit Hour Remaining 7 hr</h1>
                  <hr className=' mt-2 py-1'/>
                  <div>
                  <h1 className='text-2xl font-bold text-white'>Course Name</h1>
                  <ul className='cart-list'>
                        {
                              selectedCourse.map(course => <li key={course.id}>{course.course_name}</li> )
                        }
                        
                  </ul>
                  <hr className='py-2 mt-6' />
                  <div className='text-white space-y-1 pb-4 '>

                  <li>Total Credit Hour : <strong>12</strong></li>
                  <li>Total Price: <strong>434 USD</strong></li>
                        
                        
                  </div>
                  </div>
            </div>

      );
};

Cart.propTypes = {
          selectedCourse: PropTypes.string.isRequired, 
}
    

export default Cart;