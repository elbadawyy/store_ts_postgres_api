export function getFileNameOnly(fileName: string): string {
  return fileName.split(".")[0];
}

export function getFileExtOnly(fileName: string): string {
  return fileName.split(".")[1];
}
