# Shopify Frontend Challenge Fall 2021

[View the completed challenge](https://katevlaar.github.io/ShopifyFrontendChallengeFall2021/)

### Design ###
The design process started with making a [Mockup in Figma](https://www.figma.com/file/1MZxS4x5ihMfi2bap6EI7E/ShopifyFrontendChallenge?node-id=0%3A1). I payed close attention to existing styles across existing Shopify websites to create an appealing and consistent experience for users. 

### Features ###
The user may use the search bar to query movie titles from OMDB. A loading indicator is used while results are being fetched to assure the user that the application is working. Results are nominated by clicking the nominate button or star icon, and appear in order under the nominations header. Nominations can be removed by clicking the minus icon to the left of each nomination.  

### Development ###
The application was built off of a Create-React-App. React was used to modularize the necessary components to construct the user interface hierarchy and CSS was used to style each component. The application is responsive for mobile devices.

### Libraries ###
- Axios: Used for fetching results from the OMDB API
- react-responsive: Used for querying device type in React
