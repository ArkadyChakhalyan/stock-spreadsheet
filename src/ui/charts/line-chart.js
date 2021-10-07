import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './charts.module.css';

/**
 * Line chart.
 * @param {object} props - Props.
 * @param {number} props.canvasWidth - Canvas width.
 * @param {number} props.canvasHeight - Canvas height.
 * @param {number[]} props.data - Chart data.
 * @returns {Element} LineChart component.
 */
export const LineChart = ({ data, canvasHeight, canvasWidth }) => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = setupCanvas(canvas);

        chart(context, canvasHeight, canvasWidth, data);
    }, [chart])


    return (
        <div className={styles.chart}>
            <canvas
                style={{width:canvasWidth, height:canvasHeight}}
                ref={canvasRef} />
        </div>
    );
}

const chart = (ctx, canvasHeight, canvasWidth, data) => {
    
    let lineY = 8;

    for (let i = 0; i < 6; i++) {
        const line = new Path2D('2d');
        
        line.rect(0, lineY, canvasWidth, 1);

        ctx.fillStyle = 'lightgray';
        ctx.fill(line);

        lineY += canvasHeight / 6;
    }

    let highestPoint = 0;
    let lowestPoint = data[0];
    for (let i = 0; i < data.length; i++) {
        if (data[i] > highestPoint) highestPoint = data[i];
        if (data[i] < lowestPoint) lowestPoint = data[i];
    }

    ctx.lineWidth = 1;
    if (data[0] > data[data.length - 1]) {
        ctx.strokeStyle = '#D2222D';
    } else ctx.strokeStyle = '#007000';

    let t = 3;
    let price = data[0];
    let oldPrice;

    for (let i = 0; i < data.length; i++) {
        if (data[i]) {
            
            oldPrice = price;
            price = data[i];

            ctx.beginPath();
            ctx.moveTo(t, (canvasHeight - 35) - (oldPrice - lowestPoint) / (highestPoint - lowestPoint) * (canvasHeight - 30) + 16);
            ctx.lineTo(t + 1.7, (canvasHeight - 35) - (price - lowestPoint) / (highestPoint - lowestPoint) * (canvasHeight - 30) + 16);
            ctx.stroke();

            t += 1.7;
        }
    }

    ctx.closePath();

    const currentPriceCollumnHeight = (data[data.length - 1] - lowestPoint) / (highestPoint - lowestPoint) * (canvasHeight - 16) - 15;

    ctx.font = `10pt Roboto`;
    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(+data[data.length - 1] * 100) / 100, t + 12, canvasHeight - currentPriceCollumnHeight - 16);

    ctx.beginPath();
    if (data[0] > data[data.length - 1]) {
        ctx.strokeStyle = '#D2222D';
    } else ctx.strokeStyle = '#007000';
    ctx.arc(t + 3, canvasHeight - currentPriceCollumnHeight - 20, 3, 0, 2 * Math.PI);
    ctx.stroke();

};

const setupCanvas = (canvas) => {
    let dpr = window.devicePixelRatio || 1;
    let rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    let ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return ctx;
};

LineChart.propTypes = {
    canvasHeight: PropTypes.number,
    canvasWidth: PropTypes.number,
    data: PropTypes.array,
}