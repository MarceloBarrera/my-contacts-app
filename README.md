This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br /> See the section
about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br /> It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is
ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can
`eject` at any time. This command will remove the single build dependency from
your project.

Instead, it will copy all the configuration files and the transitive
dependencies (webpack, Babel, ESLint, etc) right into your project so you have
full control over them. All of the commands except `eject` will still work, but
they will point to the copied scripts so you can tweak them. At this point
you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for
small and middle deployments, and you shouldn’t feel obligated to use this
feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in the
[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Notes

- Run cypress e2e testing `yarn cypress:run` or `yarn cypress:open`
- App could run locally happily with MSW, when running `yarn start:msw`, useful when api is down or if we only have a contract api.
- Validation need more requirements :) some validation has been added when adding a Contact, but more could be done.
- DOB needs validation and formatting. I would probably use date-fns.
- Avatar editor would need a File Library to do it properly. At the moment the Avatar can be change only randomly when clicking edit button :)
- Handling errors when calling API could be more friendly, for example show a message to the user when something is wrong. This approach is only done with one endpoint at the moment “getContacts”.
- Need more thoughts on performance.
- App is deployed here: https://heroic-biscuit-8f40e8.netlify.app/

```
{
    "name": "Marcelo Barrera",
    "email": "marcelodarmis@gmail.com",
    "bio": "Seasoned, passionate and open-minded software developer with many years of commercial experience implementing full stack application systems.",
    "hobbies": [ "Cycling", "Football", "Reading"],
    "interests": [ "Clean code", "Scalability", "Reusability", "Testability", "Always learning new things"],
    "humble": true,
    "curious": true,
    "easygoing": true,
    "foosball_champion": true,
    "adaptable": true,
    "team_player": true,
    "github_url": "https://github.com/MarceloBarrera",
    "stack_overflow_url": "https://stackoverflow.com/users/2789024/darmis",
    "linkedin_url": "https://www.linkedin.com/in/marcelobarrera/",
    "hireable": null
}
```
