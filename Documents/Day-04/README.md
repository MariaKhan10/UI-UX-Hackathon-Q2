Objective:
The objective of Day 4 was to design and develop dynamic frontend components for displaying marketplace data fetched from Sanity CMS or APIs. The focus was on building modular, reusable, and responsive components while adhering to real-world practices to ensure scalability and usability.


________________________________________
Key Learning Outcomes:
1.	Development of dynamic frontend components to display data from Sanity CMS or APIs.
2.	Implementation of reusable and modular components.
3.	Understanding and application of state management techniques.
4.	Importance of responsive design and UX/UI best practices.
5.	Experience in replicating professional workflows for real-world projects.



________________________________________

Implemented Components:
1.	Product Listing Component:
o	Rendered product data dynamically in a grid layout.
o	Included fields like:
	Product Name
	Price
	Image
	View Details
	Add to Cart


2.	Product Detail Component:
o	Created individual product detail pages using dynamic routing in Next.js.
o	Included detailed fields such as:
	Product Description
	Price
	Image
	Rating & Reviews
	Share to Social Media



3.	Search Bar:
o	Implemented search functionality to filter products by name or category.        
 

Search By Category : 
                                                                             
4.	Cart Component:
o	Displayed added items with name and image, their quantities, the total price and Remove Option.
o	Used state management to track cart items dynamically.


5.	Checkout Flow Component:
o	Developed a multi-step form for the checkout process, including:
	Billing and Shipping Address Fields
	Mock Payment Details Implementation

 
6.	Footer and Header Components:
o	Built consistent navigation and branding elements.
o	Included links to key pages (e.g., Home, About, Contact).
o	Ensured responsiveness and accessibility.



7.	Notifications Component:
o	Integrated real-time alerts for actions like adding items to the cart, errors, or successful purchases.
o	Used toast notifications for seamless user experience.

 


8.	FAQ and Help Center Component:
o	Added a  FAQ section.
o	Included contact forms for additional support in contact section.     

                                                   
 

________________________________________


Steps Taken to Build and Integrate Components:
1.	Setup:
o	Established a connection between the Next.js project and Sanity CMS.
o	Fetched and tested data to confirm availability.
2.	Development:
o	Reusable Component Creation:
	Designed modular components such as ProductCard
	Passed data via props to ensure flexibility and reusability.
o	State Management:
	Managed global and local state using React’s useState and useContext hooks.
	Ensured smooth data flow between components.
o	Styling:
	Used Tailwind CSS for responsive designs.
	Focused on maintaining a professional and uniform appearance.
3.	Testing:
o	Conducted thorough testing for responsiveness and functionality across various devices and browsers.
o	Debugged and resolved issues related to API integration and dynamic routing.
________________________________________
Challenges and Solutions:
1.	Challenge: Managing dynamic data rendering from Sanity CMS.
o	Solution: Utilized Next.js’s getServerSideProps to fetch and pre-render data efficiently.
2.	Challenge: Implementing state management for cart and checkout functionality.
o	Solution: Used React Context API to manage the global state and ensure data consistency.
3.	Challenge: Ensuring responsiveness for all components.
o	Solution: Leveraged Tailwind CSS’s utility classes and media queries to create responsive layouts.
________________________________________
Best Practices Followed:
1.	Modular and reusable components to ensure scalability.
2.	State management with React hooks for efficient data handling.
3.	Responsive designs following UX/UI best practices.
4.	Performance optimization through lazy loading of images and pagination.
________________________________________
Expected Output:
1.	A fully functional product listing page displaying dynamic data from Sanity CMS.
2.	Individual product detail pages implemented using dynamic routing.
3.	Advanced search functionality for filtering products.
4.	A cart component with dynamic state management.
5.	A multi-step checkout process with mock payment implementation.
6.	Consistent and responsive footer and header components.
7.	Notifications and FAQ sections for enhanced user experience.
________________________________________







Code Snippets:
1.	ProductCard Component:
 
2.	ProductDetail Component :

3.	Cart Component:
 
4.	Search Bar:

 

________________________________________
Screenshots and Screen Recordings:
(Include visuals of the implemented components such as the product listing page, product detail pages,  the cart component and search bar.)
________________________________________
Conclusion:
By following the outlined steps and best practices, the dynamic frontend components for the marketplace were successfully developed and integrated. The components are modular, reusable, and responsive, providing a professional and scalable solution for real-world projects.


Self-Validation Checklist: 

Frontend Component Development	Styling and Responsiveness	Code Quality	Documentation and Submission	Final Review
✔	✔	✔	✔	✔

Professional Practices Emphasized:
 • Modular and reusable component design.
 • State management and dynamic data binding.
 • Responsive and user-friendly UI design. 
• Thorough documentation for code and processes.

Prepared by: Maria Khan
Date : 19-Jan-2024
