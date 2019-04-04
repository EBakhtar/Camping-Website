# YelpCamp Created as part of the Web Developer BootCamp by Colt Steele https://www.udemy.com/the-web-developer-bootcamp/
This is a node express app which uses MongoDB. This site allows users to view user created Campsites and see descriptions, prices and comments from other users. Users can sign up to submit comments or their own campgrounds.
When creating a new campground, image upload is handled by cloudinary which requires an API key. In order to clone this app you must place your own API key in a .env file with the same variable names as seen in the .env_example file.
Currently location is psuedo implemented with a Mapbox set to a default location for every campsite.
There is also dummy information which appears on each campsite page.
Page styling achieved through CSS3 and Bootstrap.
