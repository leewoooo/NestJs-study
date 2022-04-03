import * as express from "express";

const app: express.Express = express();
const port: number = 8000;

// router
// localhost:8000의 경로로 요청이 들어오면 해당 응답을 처리하는 router
app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req);
  // res.send("Hello Express"); // res.send()를 하지 않으면 express에서는 Client에게 Response를 하지 않음.
  res.send({
    message: "Hello",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
