import React, { useEffect, useRef } from 'react';
import styles from './sales-chart.module.css';

export const SalesChart = ({ stock }) => {

    const canvasRef = useRef(null);

    const { yearly } = stock;

    let years = 0;
    for (let key in yearly) {
        if (yearly[key]) years++;
    }

    if (years < 1 || !yearly) {
        return (
            <p>No financial data yet</p>
        )
    } 

    const canvasWidth = 550;
    const canvasHeight = 240;

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        chart(context, canvasHeight, canvasWidth, yearly);
    }, [chart])

    return (
        <div className={styles.container}>
            <p className={styles.group}>Financials</p>
            <span className={styles.label}>
                <span className={styles.line}><div className={styles.revenue} /><p>Revenue</p></span>
                <span className={styles.line}><div className={styles.earnings} /><p>Earnings</p></span>
            </span>
            <canvas
                width={canvasWidth}
                height={canvasHeight}
                ref={canvasRef} />
        </div>
    )
};

const chart = (ctx, canvasHeight, canvasWidth, data) => {

    let numberOfYears = 0;

    for (let key in data) {
        if (data[key]) numberOfYears++;
    }
    let inBetween = 80;
    let paddingBottom = 40;

    let zeroHeight = 1;

    let highestCollumnIdx;
    let largestRevenue = 0;
    let lowestPoint = 0;

    for (let key in data) {
        if (data[key].revenue > largestRevenue) {
            largestRevenue = data[key].revenue;
            highestCollumnIdx = key;
        }
        if (data[key].earnings < lowestPoint) {
            lowestPoint = data[key].earnings;
        }
    }

    let top;
    let lineY = canvasHeight - paddingBottom;
    const scales = scaleData(data, highestCollumnIdx, lowestPoint);

    let textWidth = ctx.measureText(`${scales[scales.length - 1]}M`).width + 8;
    if (scales[scales.length - 1] > 999) {
        textWidth = ctx.measureText(`${Math.round(scales[scales.length - 1] / 1000)}B`).width  + 8;
    }
    
    for (let i = 0; i < scales.length; i++) {
        
        ctx.font = `8pt Roboto`;
        ctx.fillStyle = 'rgb(102, 102, 102)';

        if (scales[i] > 999 || -scales[i] > 999) {

            const textStart = textWidth - ctx.measureText(`${Math.round(scales[i] / 1000)}B`).width

            ctx.fillText(`${Math.round(scales[i] / 1000)}B`, textStart, lineY);

        }
        else if (scales[i] === 0) {
            const textStart = textWidth - ctx.measureText(`${scales[i]}`).width
            
            ctx.fillText(0, textStart, lineY);

        } else {
            const textStart = textWidth - ctx.measureText(`${scales[i]}M`).width

            ctx.fillText(`${scales[i]}M`, textStart, lineY);
        }

        const lineStart = textWidth + 12;

        const line = new Path2D('2d');

        if (scales[scales.length - 1]) top = lineY - 4;

        if (scales[i] === 0) {

            zeroHeight = lineY - 4;

            line.rect(lineStart, zeroHeight, canvasWidth - lineStart, 2);

            ctx.fillStyle = 'rgb(102, 102, 102)';
            ctx.fill(line);
        } else {
            line.rect(lineStart, lineY - 4, canvasWidth - lineStart, 1);

            ctx.fillStyle = 'lightgray';
            ctx.fill(line);
        }

        lineY -= (canvasHeight - paddingBottom) / scales.length;
    }

    const collumnWidth = 40;
    const margin = 44;
    
    let padding = (canvasWidth - (margin + collumnWidth) * numberOfYears - textWidth) / numberOfYears;

    for (let key in data) {

        const collumnSales = new Path2D('2d');

        let collumnHeight = canvasHeight - (canvasHeight - zeroHeight) - top;

        collumnHeight = data[key].revenue / scales[scales.length - 1] * collumnHeight;
        collumnSales.rect(padding + textWidth, zeroHeight - collumnHeight, collumnWidth, collumnHeight);

        ctx.fillStyle = '#238823';
        ctx.fill(collumnSales);

        const collumnEarnings = new Path2D('2d');

        ctx.fillStyle = 'dodgerblue';
        ctx.fill(collumnEarnings);

        if (data[key].earnings < 0) {
            collumnHeight = (data[key].earnings / data[key].revenue) * collumnHeight;
            collumnEarnings.rect(padding + textWidth + margin, zeroHeight + 2 - collumnHeight, collumnWidth, collumnHeight);
        } else {
            collumnHeight = (data[key].earnings / data[key].revenue) * collumnHeight;
            collumnEarnings.rect(padding + textWidth + margin, zeroHeight - collumnHeight, collumnWidth, collumnHeight);
        }

        ctx.fillStyle = 'dodgerblue';
        ctx.fill(collumnEarnings);

        ctx.font = `9pt Roboto`;
        ctx.fillStyle = 'rgb(102, 102, 102)';

        ctx.fillText(data[key].date, padding + textWidth + (collumnWidth + margin) / 2 - ctx.measureText(data[key].date).width / 2, canvasHeight - 12);

        padding += collumnWidth + inBetween;
    }

};

const scaleData = (data, idx, low) => {
    let scales = [0];
    for (let i = Math.ceil(data[idx].revenue); ; i++) {
        if (i > 9999) {
            if (i % 10000 === 0) {
                for (let j = 1; j < 8; j++) {
                    scales.push(Math.round(i / 8 * j));
                }
                scales.push(i);
                break;
            }
        } else {
            if (i % 10 === 0) {
                for (let j = 1; j < 8; j++) {
                    scales.push(Math.round(i / 8 * j));
                }
                scales.push(i);
                break;
            }
        }
    }

    const scalesCopy = [...scales];

    for (let i = 0; i < scalesCopy.length; i++) {
        if (scalesCopy[i] < -low && scales[i] != 0) {
            scales.unshift(-scalesCopy[i]);
        }
    }

    return scales;
};