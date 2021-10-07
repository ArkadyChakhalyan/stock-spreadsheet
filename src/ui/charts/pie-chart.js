import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * Pie chart.
 * @param {object} props - Props.
 * @param {number} props.canvasWidth - Canvas width.
 * @param {number} props.canvasHeight - Canvas height.
 * @param {number[]} props.data - Chart data.
 * @returns {Element} PieChart component.
 */
export const PieChart = ({ canvasWidth, canvasHeight, data }) => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = setupCanvas(canvas);

        chart(context, canvasHeight, canvasWidth, data);
    }, [chart])

    return (
        <canvas
            style={{width:canvasWidth, height:canvasHeight}}
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

const setupCanvas = (canvas) => {
    let dpr = window.devicePixelRatio || 1;
    let rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    let ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return ctx;
}

PieChart.propTypes = {
    canvasHeight: PropTypes.number,
    canvasWidth: PropTypes.number,
    data: PropTypes.array,
}