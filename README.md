# Course Registration

## Introduction

This is a course registration system designed for programming enthusiasts. It allows users to browse and register for programming courses, view credit hours, and track their progress.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:https://github.com/programming-hero-web-course2/my-course-roster-Shakil-Ahmmed8882
2. Navigate to the project folder.
3. Run `npm install` to install dependencies.

## Features

| Course Selection | Cart Management | Credit Hour Tracking |
| ---------------- | --------------- | -------------------- |

- **Browse and select from a variety of programming courses.** Explore a diverse range of programming courses to suit your interests and goals.

- **Easily add courses to your cart:** Streamline your course selection process by effortlessly adding courses to your cart.

- **Credit Hour Tracking:** Keep track of your credit hours with real-time updates as you add courses to your cart, while staying within the 20 credit hour limit to ensure an optimal course load.

## State Management

In this project, state management is crucial for handling the course selection process and maintaining a smooth user experience. Here's how I managed state:

1. **Selected Courses:**

   - I use a state variable, `selectedCourses`, to keep track of the courses a user has selected.
   - When a user selects a course, it is added to this array.
   - When a course is deselected, it is removed from the array.
   - The selected courses are dynamically displayed in the cart on the right side of the screen.

2. **Remaining Credit Hours:**
   - Another state variable, `remainingCreditHours`, is employed to enforce a credit hours limit of 20.
   - As courses are selected, the credit hours for those courses are deducted from this total.
   - Users are prevented from selecting additional courses if they reach the 20-hour limit.

By managing state in this manner, I ensure that users can easily track their course selections, credit hours, and stay within the credit limit.

## Code Samples

---

![Caption 1](https://i.ibb.co/mb1xy1j/Screenshot-227.png) Snippet 1

---

![Caption 2](https://i.ibb.co/0MwrtT6/Screenshot-228.png) Snippet 2

## Usage

1. Visit the application in your web browser.
2. Browse the available courses.

## Configuration

- The project does not require additional configuration.

## Contributing

We welcome contributions from the community. To contribute, follow these guidelines:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Submit a pull request.

## License

This project can do or can't rules www.License.com

## Contact Information

For questions or feedback, please contact me at [shakil-ahmmed8882@gmail.com](shakilahmme8882@gmail.com).

## Acknowledgments

- This project uses [React](https://reactjs.org/) for the front-end.
- Thanks to [chatGPT](https://chat.openai.com//) for course data.

## Troubleshooting

If you encounter any issues, please refer to our [troubleshooting guide](TROUBLESHOOTING.md).

## Thank You

Thank you for exploring our course registration system. We value your interest and hope this project proves useful for programming enthusiasts like you. If you have any further questions or suggestions, please don't hesitate to reach out. Your feedback is precious in helping us improve this application.

Happy coding!
