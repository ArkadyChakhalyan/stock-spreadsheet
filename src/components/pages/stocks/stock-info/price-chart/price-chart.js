import React, { useRef, useEffect } from 'react';
import styles from './price-chart.module.css';

export const PriceChart = ({ stock }) => {

    //     fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=AAPL&region=US", {
    // 	"method": "GET",
    // 	"headers": {
    // 		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    // 		"x-rapidapi-key": "2d223f7ed3msh31a354bc2e0981fp1cad94jsn2995c8dcda59"
    // 	}
    // })
    //     .then((response) => response.json())
    //     .then((stock) => console.log(stock))


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

            t += 2.2;
        }
    }

    ctx.closePath();

    const currentPriceCollumnHeight = (+stock.currentPrice - lowestPoint) / (highestPoint - lowestPoint) * (canvasHeight - 16) - 15;

    ctx.font = `11pt Roboto`;
    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(+stock.currentPrice * 100) / 100, t + 10, canvasHeight - currentPriceCollumnHeight - 12);

    ctx.beginPath();
    if (stock.currentPrice < data[data.length - 1]) {
        ctx.strokeStyle = '#D2222D';
    } else ctx.strokeStyle = '#007000';
    ctx.arc(t + 1, canvasHeight - currentPriceCollumnHeight - 15, 3, 0, 2 * Math.PI);
    ctx.stroke();

};