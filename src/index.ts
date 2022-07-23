import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import * as productsController  from "./controllers/productsController";
import * as ordersController  from "./controllers/ordersControllers";
import * as usersController  from "./controllers/usersController";

dotenv.config();
const PORT = process.env.PORT || 3030;

// create an instance server
const app: Application = express();

// HTTP request logger middleware
app.use(morgan("dev"));

// add routing for / path
app.get("/", (req: Request, res: Response): void => {
  res.json({
    message: "Welcome to store app api",
  });
});

//products
app.get("/products",  productsController.index);
app.get("/products/:productId",productsController.show);
app.post("/products",productsController.create);
app.put("/products/:productId", productsController.update);
app.delete("/product/:productId", productsController.remove)



//users
app.get("/users",  usersController.index);
app.get("/users/:productId",usersController.show);
app.post("/users",usersController.create);
app.put("/users/:userId", usersController.update);
app.delete("/users/:userId", usersController.remove)

//orders
app.get("/orders",  ordersController.index);
app.get("/orders/:productId",ordersController.show);
app.post("/orders",ordersController.create);
app.put("/orders/:ordersId", ordersController.update);
app.delete("/orders/:orderId", ordersController.remove)


// start express server
app.listen(PORT, (): void => {
  console.log(`Server is starting at port:${PORT}`);
});
export default app;
