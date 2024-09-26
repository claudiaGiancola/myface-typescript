# MyFace

Building a mobile-first, responsive social network using Embedded JavaScript templates (EJS).

## Getting started.

To get setup, download this code, and then run the following commands in the root directory of the app.

```shell
npm install
npm run migrate
npm run seed
```

- `npm install` downloads all the libraries that we depend on.
- `npm run migrate` setups a database for us to use.
- `npm run seed` adds some sample data to our database.

Once you have run all of those, we can simply start the app with

```shell
npm start
```

This should start the app, and we can see it by going to http://localhost:3001 in the browser.

To update the application, just change any of the code, save it, and the app should automatically update.
Just refresh the page to see the impact of your changes.

### Resetting the data

If you ever need to reset the database, then:

- stop the app
- delete the `dev.sqlite3` file.
- run `npm run migrate` and `npm run seed` again to re-make and re-populate the database.

### Development

Goals:
- Semantic HTML
- CSS
- The DOM
- Progressive Enhancement
- Responsive Design
- Embedded JavaScript templates (EJS)
- Express (fast, unopinionated, minimalist web framework for Node.js)

Main features:
- View a feed of all the posts on the site
- View each user’s profile, and see their activity
- Like or dislike any of the posts
- Create new posts and new users

1. HTML (Getting almost all of the functionality of our site from HTML alone)
- Return all of the content from the posts
- Link to the next and previous pages
- Use a form to create a new post > Validation Errors (client side + server side)
- Screen Readers (e.g. NDVA)
- Liking a Post
- Fill in the other pages

2. CSS
- Using mobile first design
- Implementing a Design

3. JavaScript
- Button (in the "post_list" page) to set the background colour on each of the posts to be a random colour
- Animated Off-Canvas Menu
- More Form Validation (disable the submit button until all the fields are valid, add validation for the username field)
- Add "like" and "dislike" buttons to the posts so that clicking these buttons submits the "like" to the app, and updates the displayed liked count without requiring the browser to refresh the page
