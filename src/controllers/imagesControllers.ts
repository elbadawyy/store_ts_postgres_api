import { Request, Response } from "express";
import fs from "fs";

import {
  resizeImageAndExport,
  displayImage,
  generateImageName,
} from "../utils/imagesUtils";

export async function resizeImage(req: Request, res: Response): Promise<void> {
  let newImagePath: string = generateImageName(
    req.query.image_name as string,
    req.query.width as string,
    req.query.hieght as string
  );

  if (!fs.existsSync(newImagePath)) {
    newImagePath = (await resizeImageAndExport(
      req.query.image_name as unknown as string,
      process.cwd() + "/src/assets/thumbs/",
      parseInt(req.query.hieght as string),
      parseInt(req.query.width as string)
    )) as string;
  }
  const newImageContent = displayImage(newImagePath as string);
  if (newImageContent) {
    res.setHeader("content-type", "image/jpeg");
    res.status(200).send(newImageContent);
  } else res.status(500).send("Something went wrong");
}
