# Interview Question

## Background

We have created a protoytype/first draft of a page to manage users.

Right now, we are using a static sample user. We want to get user data from the provided endpoint. But first, we want to review our approach.

## Steps

1. Feature: Using the provided endpoint, on click show all posts of a user.
   Components should be reusable. Use latest ES6 syntax to make the API call.
   Note: userId varies for each user.
   Test: Add unit tests for `<User />`
   Test: Add unit tests for `<Posts />`

   Example endpoint usage:

```js
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then((response) => response.json())
  .then((json) => console.log(json));
```

2. Feature: Write reuable custom hook to get users from end point.
   Test: Write unit tests for custom hook.

3. Feature: Show only one user posts at a time.
   Test: Write unit tests for this feature.

## Additional Steps

3. Feature: Sort users alphabetically by username

### Good to know
