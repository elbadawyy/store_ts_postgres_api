export function getFileNameOnly(fileName: string) {
  return fileName.split(".")[0];
}

export function getFileExtOnly(fileName: string) {
  return fileName.split(".")[1];
}
