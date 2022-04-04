import * as express from "express";
import { router as catsRouter } from "./cats/cats.route";

const app: express.Express = express();
const port: number = 8000;

// for singleton
class Server {
  public app: express.Application;

  constructor() {
    const app: express.Application = express();
    this.app = app;
  }

  private setRoute() {
    // cats router를 모듈화 하고 cats router 인스턴스를 app에 등록
    this.app.use(catsRouter);
  }

  private setMiddleware() {
    // express는 Client에게 요청이 온 Request Body를 parsing할 때 middleware를 등록해줘야 한다.
    this.app.use(express.json());
    this.setRoute();
  }

  public listen() {
    this.setMiddleware();
    this.app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
}

function init() {
  const server = new Server();
  server.listen();
}
init();

// router
// localhost:8000의 경로로 요청이 들어오면 해당 응답을 처리하는 router
// app.get("/", (req: express.Request, res: express.Response) => {
//   console.log(req);
//   // res.send("Hello Express"); // res.send()를 하지 않으면 express에서는 Client에게 Response를 하지 않음.
//   res.send({
//     message: "Hello",
//   });
// });
