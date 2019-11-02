This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and had ReasonML, TypeScript and SASS support added.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.

The idea is to not eject.

## Environment variables

Add these to `.env` or `.env.local`

| Environment variable       | Values                                        | Required? | Effect                               |
| -------------------------- | --------------------------------------------- | --------- | ------------------------------------ |
| `REACT_APP_ENTRY_POINT`    | one of `Reason` / `TypeScript` / `JavaScript` | Yes       | Determines initial <App /> component |
| `REACT_APP_SERVICE_WORKER` | truthy                                        | No        | Will register a service worker       |
