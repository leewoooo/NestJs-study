import * as express from "express";
import { router } from "./cats/cats.route";

class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
  }

  private setRoute() {
    this.app.use(router);
  }

  private setMiddleware() {
    this.app.use(express.json());
    this.setRoute();
  }

  public listen(port: number) {
    this.setMiddleware();
    this.app.listen(port, () => {
      console.log("server on...");
    });
  }
}

function init() {
  const server = new Server();
  server.listen(3000);
}
init();
