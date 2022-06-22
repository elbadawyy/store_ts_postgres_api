import { Request, Response, NextFunction } from "express";
import fs from "fs";

export function validateRequest(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (
    req.query &&
    req.query.image_name &&
    req.query.width &&
    !isNaN(Number(req.query.width)) &&
    req.query.hieght &&
    !isNaN(Number(req.query.hieght))
  ) {
    if (fs.existsSync(process.cwd() + "/src/assets/" + req.query.image_name)) {
      next();
    } else {
      res.status(404).send("File Not Found");
    }
  } else {
    res.status(422).send("Fill these required value(image_name,width,hieght)");
  }
}
