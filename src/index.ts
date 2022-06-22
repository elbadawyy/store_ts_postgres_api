import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import { resizeImage } from "./controllers/imagesControllers";
import { validateRequest } from "./middlewares/imagesMiddleware";

dotenv.config();
const PORT = process.env.PORT || 3030;

// create an instance server
const app: Application = express();

// HTTP request logger middleware
app.use(morgan("dev"));

// add routing for / path
app.get("/", (req: Request, res: Response): void => {
  res.json({
    message: "Welcome to image proccessing app",
  });
});

// http://localhost:3000/api/images?image_name=pic.jpg&hieght=1&width=55

// add routing for / path
app.get("/api/images", validateRequest, resizeImage);

// start express server
app.listen(PORT, (): void => {
  console.log(`Server is starting at port:${PORT}`);
});
export default app;
