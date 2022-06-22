import sharp from "sharp";
import fs from "fs";

import { getFileNameOnly, getFileExtOnly } from "./commonUtils";

export async function resizeImageAndExport(
  imageName: string,
  ExportPath: string,
  newHight: number,
  newWidth: number
): Promise<string> {
  const newImagePath: string =
    ExportPath +
    getFileNameOnly(imageName) +
    "_" +
    newHight +
    "_" +
    newWidth +
    "." +
    getFileExtOnly(imageName);

  try {
    await sharp(process.cwd() + "/src/assets/" + imageName)
      .resize(newWidth, newHight)
      .toFile(newImagePath);

    return newImagePath;
  } catch (e) {
    console.log("error catched is =>", e);
    return "";
  }
}

export function displayImage(imagePath: string):object {
  const data = fs.readFileSync(imagePath);
  return Buffer.from(data);
}

export function generateImageName(
  imageName: string,
  width: string,
  hieght: string
): string {
  return (
    process.cwd() +
    "/src/assets/" +
    getFileNameOnly(imageName) +
    "_" +
    width +
    "_" +
    hieght +
    "." +
    getFileExtOnly(imageName)
  );
}
