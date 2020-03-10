# IcóSocial RESTful API

This is the REST API project for the Icósocial platform.

## Development environment

Everything you need to start contributing to the development of this API.

### Project Development Settings

1 - Download [VSCode](https://code.visualstudio.com/).
2 - Download the extensions: _ESLint_, _Prettier_ and _EditorConfig_.
3 - Install [Node](https://nodejs.org/en/) or [NVM-unix](https://github.com/nvm-sh/nvm), [NVM-win](https://github.com/coreybutler/nvm-windows)
and follow the steps to run Node and npm.
4 - Install [YARN](https://classic.yarnpkg.com/pt-BR/docs/install)
5 - Run ```yarn``` or ```yarn install``` in the project folder
6 - Create a file named ```.env``` and copy the contents of the ```.env.example``` file and change / add the values ​​according to your environment settings.
7 - Opening the project in VSCode and from then on it is just joy.
8 - Run ```yarn dev``` to start the application.

### Environment variables

List of environment variables used in the .env file

| Variables | Description                                             |
|-----------|---------------------------------------------------------|
| NODE_ENV  | Defines the environment [development, test, production] |
| PORT      | Defines the port used by the application                |
| MONGO_URL | Defines the access url to the MongoDB                   |
