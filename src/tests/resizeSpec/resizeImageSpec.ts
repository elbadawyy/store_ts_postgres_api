import { resizeImageAndExport } from "../../utils/imagesUtils";

describe("Testing Image Proccessing function", () => {
    it("if all parameters are correct expect correct image path", async () => {
        const path = await resizeImageAndExport("pic.jpeg", process.cwd() + "/src/assets/thumbs/", 55, 55);
        expect(path).toEqual(process.cwd() + "/src/assets/thumbs/pic_55_55.jpeg");
    });
});


