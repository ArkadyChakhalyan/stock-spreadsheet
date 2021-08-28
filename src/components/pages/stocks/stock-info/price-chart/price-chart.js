import React, { useRef, useEffect } from 'react';
import styles from './price-chart.module.css';

export const PriceChart = ({ stock }) => {

    const data = stock.chartData;

    const canvasRef = useRef(null);

    const canvasHeight = 140;
    const canvasWidth = 502;

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        chart(context, canvasHeight, canvasWidth, data, stock);
    }, [chart])


    return (
        <div className={styles.chart}>
            <canvas
                width={canvasWidth}
                height={canvasHeight}
                ref={canvasRef} />
        </div>
    );
}

const chart = (ctx, canvasHeight, canvasWidth, data, stock) => {

    let lineY = 8;

    for (let i = 0; i < 6; i++) {
        const line = new Path2D('2d');
        
        line.rect(0, lineY, canvasWidth, 1);

        ctx.fillStyle = 'lightgray';
        ctx.fill(line);

        lineY += canvasHeight / 6;
    }

    let highestPoint = 0;
    let lowestPoint = data[0].close;
    for (let key in data) {
        if (data[key].close > highestPoint) highestPoint = data[key].close;
        if (data[key].close < lowestPoint) lowestPoint = data[key].close;
    }

    ctx.lineWidth = 2;
    if (stock.currentPrice < data[data.length - 1]) {
        ctx.strokeStyle = '#D2222D';
    } else ctx.strokeStyle = '#007000';

    let t = 3;
    let price = data[0].close;
    let oldPrice;

    for (let key in data) {
        if (data[key].close) {

            oldPrice = price;
            price = data[key].close;

            ctx.beginPath();
            ctx.moveTo(t, (oldPrice - lowestPoint) / (highestPoint - lowestPoint) * (canvasHeight - 30) + 16);
            ctx.lineTo(t + 2.5, (price - lowestPoint) / (highestPoint - lowestPoint) * (canvasHeight - 30) + 16);
            ctx.stroke();

            t += 1.7;
        }
    }

    ctx.closePath();

    const currentPriceCollumnHeight = (data[0].close - lowestPoint) / (highestPoint - lowestPoint) * (canvasHeight - 16) - 15;

    ctx.font = `11pt Roboto`;
    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(+data[0].close * 100) / 100, t + 10, canvasHeight - currentPriceCollumnHeight - 12);

    ctx.beginPath();
    if (stock.currentPrice < data[data.length - 1]) {
        ctx.strokeStyle = '#D2222D';
    } else ctx.strokeStyle = '#007000';
    ctx.arc(t + 1, canvasHeight - currentPriceCollumnHeight - 15, 3, 0, 2 * Math.PI);
    ctx.stroke();

};