import React, { useEffect, useRef } from "react";
import * as fabric from 'fabric';

const Canvas = () => {
    const canvasRef = useRef<fabric.Canvas | null>(null);

    useEffect(() => {
        const canvas = new fabric.Canvas("drawingCanvas", {
            isDrawingMode: true,
        });
        canvasRef.current = canvas;

        return () => {
            canvas.dispose();
        };
    }, []);

    return <canvas id="drawingCanvas" width={800} height={500} style={{ border: "1px solid black" }} />;
};

export default Canvas;
