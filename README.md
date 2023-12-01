# My Responsive-Blog-App

#### Video Demo: <https://www.youtube.com/watch?v=VJ6nXFnXMfA>

#### Deployment website: <https://react-blog-app-50a00.web.app/>

#### Description:

* It is a responsive blog app using JavaScript as the main language, and React for the framework. For the design I use bootstrap and sass, and fontawsoome for the icons. And for the app development backend I used Firebase, for the realtime database that store and sync data in real time across all of the users' devices.

* In this blog I added several features like email authentication, search, like and comment. And I also make it responsive by making it possible for you to create a post, update and delete your blog. and lastly I included pagination in order for the user to view their post in discrete page.

* It is also Responsive and you can view it from anywhere through phone or your personal computer.

-----

## Features:

### Sign in and Sign up:

 * The project incorporates a seamless user experienced by opening the Login Navigation bar.
 * The use of firebase helps with the authentication of the user, and the toast library prompt the user that you successfully login.

 -----

 ### For Creating A Blog post:

 * Before Adding a new post you need to first Login or if you don't have yet an account just first Sign-up.
 * After creating your post it will be push to the firestore database and will be fetch in the homepage.

 -----

### Update/Edit and Delete blog:

* You can also update your blog by clicking the edit icons and also you can delete your previous blog.
* You can access all of this if you are login by your own user Id.

-----

### Discrete Blog page:

* You can also see all the blog post of all the users in the app, by clicking the Blog navigation bar.

-----

### Like and Comment specification:

* You can like and comment to a post by going to the specific blog, and the data will be saved to the firebase database.
* Of course you should first login to be able to do this task.

-----

### Homepage Content:

* The homepage consist of header with a navigation bars of Home, create, blogs, about and login.
* The main content includes a trending carousel and daily logs of the users post.
* And from the right side bar you can see the search bar, below of it are the tags of all the post that the user put.
* And you can see also the Most popular post, it has a card with a picture of specific blog, the title and the date in which the blog is posted.
* By clicking that you will be routed to the main content of the post which make it more visual appealing by using the sass and bootstrap.
