import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './charts.module.css';

/**
 * Line chart.
 * @param {object} props - Props.
 * @param {number[]} props.data - Chart data.
 * @returns {Element} LineChart component.
 */
export const LineChart = ({ data }) => {

    let [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const func = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', func);
        return () => {
            window.removeEventListener('resize', func);
        }
    }, [windowWidth]);

    const canvasRef = useRef(null);

    let lineChart;

    useEffect(() => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        let canvasWidth = rect.width;
        let canvasHeight = rect.height;
        const context = setupCanvas(canvas);
        lineChart = chart(context, canvasHeight, canvasWidth, data);
    }, [lineChart, windowWidth])


    return (
        <canvas
            className={styles.canvas}
            ref={canvasRef} />
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
            if (canvasWidth < 450) {
                ctx.lineTo(t + 1.1, (canvasHeight - 35) - (price - lowestPoint) / (highestPoint - lowestPoint) * (canvasHeight - 30) + 16);
            } else {
                ctx.lineTo(t + 1.7, (canvasHeight - 35) - (price - lowestPoint) / (highestPoint - lowestPoint) * (canvasHeight - 30) + 16);
            }
            ctx.stroke();
            if (canvasWidth < 450) {
                t += 1.1;
            } else {
                t += 1.7;
            }

        }
    }

    ctx.closePath();

    const currentPriceCollumnHeight = (data[data.length - 1] - lowestPoint) / (highestPoint - lowestPoint) * (canvasHeight - 16) - 15;

    ctx.font = `9pt Roboto`;
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
    let rectParent = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = (rect.height) * dpr;
    canvas.style.width = rectParent.width - 48 + 'px';
    canvas.style.height = rectParent.height - 24 + 'px';
    let ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return ctx;
}

LineChart.propTypes = {
    canvasHeight: PropTypes.number,
    canvasWidth: PropTypes.number,
    data: PropTypes.array,
}