import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();
const port: number = 8000;

// express는 Client에게 요청이 온 Request Body를 parsing할 때 middleware를 등록해줘야 한다.
app.use(express.json());

// router
// localhost:8000의 경로로 요청이 들어오면 해당 응답을 처리하는 router
// app.get("/", (req: express.Request, res: express.Response) => {
//   console.log(req);
//   // res.send("Hello Express"); // res.send()를 하지 않으면 express에서는 Client에게 Response를 하지 않음.
//   res.send({
//     message: "Hello",
//   });
// });

// cats의 전체를 조회하는 router
app.get("/cats", (req: express.Request, res: express.Response) => {
  try {
    const cats = Cat;
    res.status(200).send({
      success: true,
      data: cats,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// cat의 Id를 받아 해당하는 cat을 response
app.get("/cats/:id", (req: express.Request, res: express.Response) => {
  try {
    const cats = Cat;
    const selected = cats.find((cat) => cat.id == req.params.id);
    res.status(200).send({
      success: true,
      data: selected,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

// requestBody를 받아 cat을 등록
app.post("/cats", (req: express.Request, res: express.Response) => {
  try {
    const cat = req.body as CatType;
    Cat.push(cat);
    res.status(200).send({
      success: true,
      data: cat,
    });
  } catch (error: any) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
