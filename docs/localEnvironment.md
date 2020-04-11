# How to Run the application locally

Assuming you have [Node](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) in installed in your machine: 

```yarn && yarn build && yarn start```

should be everything you need to run the project locally.

--- 

### Running the frontend only

You can also just run the frontend since you can toggle on the API mock and not communicate with the backend at all.

It's faster to iterate on the application since Hot Module Reload is in place. 

```yarn --cwd ./frontend start```

--- 

### Iterating on a single component with Storybook

```yarn --cwd ./frontend storybook```

---

### Running the frontend with HMR and integrated backend

Coming soon