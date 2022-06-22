import { resizeImageAndExport } from "../../utils/imagesUtils";

describe("Testing Image Proccessing function", () => {
    it("if all parameters are correct expect correct image path", async () => {
        const path = await resizeImageAndExport("pic.jpeg", process.cwd() + "/src/assets/thumbs/", 55, 55);
        expect(path).toEqual(process.cwd() + "/src/assets/thumbs/pic_55_55.jpeg");
    });

    it("test image is created with correct name", async () => {
        const path = await resizeImageAndExport("pic.jpeg", process.cwd() + "/src/assets/thumbs/", 44, 44);
        expect(path.split("/")[path.split("/").length -1]).toEqual("pic_44_44.jpeg");
    });
});


