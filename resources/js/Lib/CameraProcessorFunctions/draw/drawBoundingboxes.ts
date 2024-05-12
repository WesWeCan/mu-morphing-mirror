import { CameraProcessor } from "@/Lib/CameraProcessor";

export const drawBoundingBoxes = async (context: CameraProcessor) => {

    if (!context.canvas_process || !context.boundingBoxes) {
        console.error('No canvas or bounding boxes');
        return;
    }

    const canvas = context.canvas_process as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        console.error('No context');
        return;
    }

    for (const boundingBox of context.boundingBoxes) {
        ctx.beginPath();
        ctx.rect(boundingBox.x, boundingBox.y, boundingBox.width, boundingBox.height);
        ctx.strokeStyle = boundingBox.label.includes('_combined') ? 'green' : 'red';
        ctx.lineWidth = 5;
        ctx.stroke();

        ctx.font = '20px Arial';
        ctx.fillStyle = boundingBox.label.includes('_combined') ? 'green' : 'red';
        ctx.fillText(boundingBox.label, boundingBox.x, boundingBox.y - 10);

    }


}