<<<<<<< HEAD
import './bootstrap';
=======
import 'dotenv/config';
>>>>>>> 2ecbef07ecb53fdbe43c3e62a7af3bc0539d34e8

import express from 'express';

import routes from './routes';
<<<<<<< HEAD
import './database';
=======
>>>>>>> 2ecbef07ecb53fdbe43c3e62a7af3bc0539d34e8

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
