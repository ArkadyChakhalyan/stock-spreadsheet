import React, { useEffect, useRef } from 'react';

export const Monthly = ({ dividends }) => {

    const canvasRef = useRef(null);

    const paid = paidByMonth(dividends);

    const canvasWidth = 1100;
    const canvasHeight = 264;

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        chart(context, canvasHeight, canvasWidth, paid);
    }, [chart])

    return (
        <canvas
            width={canvasWidth}
            height={canvasHeight}
            ref={canvasRef} />
    )
}

const paidByMonth = (dividends) => {
    let paid = [];

    for (let i = 0; i < dividends.length; i++) {
        for (let j = 0; j < dividends[i][1].length; j++) {
            paid.push(dividends[i][1][j][1].slice(1));
        }
    }

    const date = new Date();
    const currentMonth = date.getMonth();
    const month = 12 - currentMonth;
    paid.splice(paid.length - month);

    for (let i = 0; i < paid.length; i++) {
        if (paid[i] > 0) {
            paid = paid.splice(i);
            break;
        }
    }

    return paid;
};

const scaleData = (data, idx) => {
    let scales = [0];
    for (let i = Math.ceil(data[idx]); ; i++) {
        if (i > 1000) {
            if (i % 1000 === 0) {
                for (let j = 1; j < 5; j++) {
                    scales.push(i / 5 * j);
                }
                scales.push(i);
                break;
            }
        } else {
            if (i % 10 === 0) {
                for (let j = 1; j < 5; j++) {
                    scales.push(i / 5 * j);
                }
                scales.push(i);
                break;
            }
        }
    }
    return scales;
};

const chart = (ctx, canvasHeight, canvasWidth, data) => {

    const numberOfCollumns = data.length;

    let padding = 16;
    let inBetween = 4;
    if (data.length > 30) inBetween = 2;
    else if (data.length > 50) inBetween = 1;
    else if (data.length > 100) inBetween = 0.5;

    let highestCollumnIdx;
    let largestDividend = 0;

    for (let i = 0; i < numberOfCollumns; i++) {
        if (+data[i] > largestDividend) {
            largestDividend = data[i];
            highestCollumnIdx = i;
        }
    }

    let lineY = canvasHeight - 1;
    const scales = scaleData(data, highestCollumnIdx);
    let textWidth = ctx.measureText(`$${scales[scales.length - 1]}`).width + 10;
    if (scales[scales.length - 1] > 999) {
        textWidth = ctx.measureText(`$${Math.round(scales[scales.length - 1] / 1000 * 10) / 10}k`).width + 25;
    }

    for (let i = 0; i < scales.length; i++) {

        ctx.font = `10pt Roboto`;
        ctx.fillStyle = 'rgb(102, 102, 102)';

        if (scales[i] > 999) {

            const textStart = textWidth - ctx.measureText(`$${Math.round(scales[i] / 1000 * 10) / 10}k`).width

            ctx.fillText(`$${Math.round(scales[i] / 1000 * 10) / 10}k`, textStart, lineY);

        } 
        else if (scales[i] === 0) {

            const textStart = textWidth - ctx.measureText(0).width;

            ctx.fillText(0, textStart, lineY);

        } else {
            const textStart = textWidth - ctx.measureText(`$${scales[i]}`).width

            ctx.fillText(`$${scales[i]}`, textStart, lineY);
        }

        const lineStart = textWidth + 8;

        const line = new Path2D('2d');

        if (i === 0) {
            line.rect(lineStart, lineY - 5, canvasWidth - lineStart, 2);

            ctx.fillStyle = 'rgb(102, 102, 102)';
            ctx.fill(line);
        } else {
            line.rect(lineStart, lineY - 5, canvasWidth - lineStart, 1);

            ctx.fillStyle = 'lightgray';
            ctx.fill(line);
        }

        lineY -= canvasHeight / 6;
    }

    let collumnWidth = (canvasWidth - textWidth + 10 - padding * 2 - numberOfCollumns * inBetween) / numberOfCollumns;

    if (numberOfCollumns < 6) {
        collumnWidth = 160;
        padding = (canvasWidth - collumnWidth * numberOfCollumns - inBetween * numberOfCollumns) / 2;
    }

    for (let i = 0; i < numberOfCollumns; i++) {

        const collumn = new Path2D('2d');

        let collumnHeight = canvasHeight - canvasHeight / 6;

        collumnHeight = data[i] / scales[scales.length - 1] * collumnHeight;
        collumn.rect(padding + textWidth, canvasHeight - 6 - collumnHeight, collumnWidth, collumnHeight);

        ctx.fillStyle = 'dodgerblue';
        ctx.fill(collumn);

        padding += collumnWidth + inBetween;
    }

};