import { CameraProcessor } from "@/Lib/CameraProcessor";


/**
 * Draw the detected objects on the canvas.
 * 
 * @param {CameraProcessor} context - The camera processor.
 * @returns {Promise<void>}
 */
export const drawObjects = async (context: CameraProcessor) => {

    if (!context.canvas_process || !context.inferenceData.detectedOjects) {
        return;
    }

    const canvas = context.canvas_process as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        console.error('No context');
        return;
    }

    const objects = context.inferenceData.humans;

    if (!objects) {
        // console.error('No objects');
        return;
    }

    objects.forEach((object) => {
        const x = object.bbox[0];
        const y = object.bbox[1];
        const width = object.bbox[2];
        const height = object.bbox[3];

        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, width, height);
        ctx.fillStyle = 'blue';
        const text = object.class + ' ' + (object.score * 100).toFixed(2) + '%';
        ctx.fillText(text, x, y > 10 ? y - 5 : 10);
    });


}