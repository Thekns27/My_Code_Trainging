
import "reflect-metadata";
import { json } from "body-parser";
import express,{Request,Response,NextFunction} from "express";
import  {AppDataSource} from './config/database';
import { User } from "./model/user";
import { authenticate, authorize } from "./middleware/auth.middleware";
import { userRepository } from "./repositories/user.repository";
import router from "./routes/user.routes";

const app = express();
const PORT = 5050;
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello Liger!");
});

app.use("/api",router);

// app.get("/api/users", async (req, res) => {
//   const users = await userRepository.findOneBy({ id: 12 });
//   return res.json(users);
// });

// app.get("/api/user", authenticate, authorize(["user", "admin"]), (req, res) => {
//   res.json({ message: `Hello user ${req.user?.id}` });
// });



//Error handling middleware

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.message);
  res.status(500).json({message : "Something went wrong!"});
});

AppDataSource.initialize()
.then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at ${PORT}!`)
    });
})
.catch(err => {
    console.error("DB init error", err);
    process.exit(1);
});
