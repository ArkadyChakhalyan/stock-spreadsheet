import React, { useEffect, useRef } from 'react';

export const AllocationContryChart = ({ allocationContry }) => {

    const canvasRef = useRef(null);

    const canvasWidth = 830;
    const canvasHeight = 570;

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        chart(context, canvasHeight, canvasWidth, allocationContry);
    }, [chart])

    return (
        <canvas
            width={canvasWidth}
            height={canvasHeight}
            ref={canvasRef} />
    )
}

const chart = (ctx, canvasHeight, canvasWidth, data) => {

    const x = canvasWidth / 2;
    const y = canvasHeight / 2;

    let color;
    const colors = [
        '#003f5c',
        '#d45087',
        '#2f4b7c',
        '#39CCCC',
        '#665191',
        '#a05195',
        '#f95d6a',
        '#ff7c43',
        '#ffa600',
        '#3D9970',
        '#001F3F',
        '#85144B'
    ];

    let startAngle;
    let endAngle;

    for (let i = 0; i < data.length; i++) {
        color = colors[i];
        startAngle = calculateStart(data, i);
        endAngle = calculateEnd(data, i);

        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.moveTo(x, y);
        ctx.arc(x, y, y - 70, startAngle, endAngle);
        ctx.fill();
    }
};

const calculateStart = (data, idx) => {
    if (idx === 0) return 0;
    return calculateEnd(data, idx - 1);
};

const calculateEnd = (data, idx) => {
    return degreeToRadians(calculateEndAngle(data, idx));
};

const  calculateEndAngle = (data, idx) => {
    let angle = parseFloat(data[idx][1]) / 100 * 360;
    let inc = (idx === 0) ? 0 : calculateEndAngle(data, idx - 1);

    return angle + inc;
}

const degreeToRadians = (angle) => {
    return angle * Math.PI / 180;
}