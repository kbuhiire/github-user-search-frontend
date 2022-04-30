# Github User Search

This project demos how to use the [Github](https://developer.github.com/v3/search/) API.

#### HOW TO SET UP PROJECT

  Clone the `github-user-search` and `github-user-search-server` repos and run `npm install`

This will start the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Highlight of something interesting or significant to the overall implementation`
- Because a user is not required to provide Github permissions, I had to use an authentication token to be able to access the github API, but including this token in the frontend end is not safe. I had to create a `nodejs` server so that this token is safe from the public.

### `What I am most pleased or proud of with my presentation`
- The way the Github api works is that, when you call `/search/users` endpoint it returns an array of user objects that has api links to access detailed user data, with this in hindsight i looped through the returned users array, calling the `/users/userId` endpoint that returns the user details and use `Promises.all` javascript api batch these requests and send them all at once, after use a `spead operator` to combine the response from the initial request and the subsequent requests. This makes it user friendly and fast to query the Github API.

### `Improvements or Next Features that I would like to add to my Project`
- Make the application more mobile responsive
- Persist the state of the application on reloading
- Write more unit tests and integration tests
- Add support for other Languages