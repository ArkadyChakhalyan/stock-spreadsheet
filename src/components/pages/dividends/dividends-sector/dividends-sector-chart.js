import React, { useRef, useEffect } from 'react';

export const DividendsSectorChart = ({ stocks }) => {
    const canvasRef = useRef(null);

    let paid = {};

    stocks.map((item) => {
        if (paid[item.sector]) paid[item.sector] += Math.round(item.dividendRate * item.shares * 100) / 100;
        else paid[item.sector] = Math.round(item.dividendRate * item.shares * 100) / 100;
    });

    paid = sort(paid);

    const canvasHeight = 587;
    const canvasWidth = 612;

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

const chart = (ctx, canvasHeight, canvasWidth, data) => {

    let numberOfRows = 0;

    let longestRow;
    let largestDividend = 0;

    for (let key in data) {
        numberOfRows++;
        if (data[key] > largestDividend) {
            largestDividend = data[key];
            longestRow = key;
        }
    }

    let lineX = canvasHeight - 1;
    const scales = scaleData(data, longestRow);

    const textMarginBottom = 1;
    const marginBottom = textMarginBottom + 24;
    let textMiddle;

    for (let i = 0; i < scales.length; i++) {

        ctx.font = '11pt Roboto';
        ctx.fillStyle = 'rgb(102, 102, 102)';

        if (scales[i] > 999) {
            textMiddle = ctx.measureText(`$${Math.round((scales[i] / 1000) * 10) / 10}k`).width / 2 - 1;
            ctx.fillText(`$${Math.round(scales[i] / 1000 * 10) / 10}k`, canvasWidth - lineX - textMiddle, canvasHeight - textMarginBottom);
        } 
        else if (scales[i] === 0) {
            textMiddle = ctx.measureText(0).width / 2 - 1;
            ctx.fillText(0, canvasWidth - lineX - textMiddle, canvasHeight - textMarginBottom);
        } else {
            textMiddle = ctx.measureText(`$${Math.round(scales[i])}`).width / 2 - 1;
            ctx.fillText(`$${Math.round(scales[i])}`, canvasWidth - lineX - textMiddle, canvasHeight - textMarginBottom);
        }

        const line = new Path2D('2d');

        if (i === 0) {
            line.rect(canvasWidth - lineX, 0, 2, canvasHeight - marginBottom);

            ctx.fillStyle = 'rgb(102, 102, 102)';
            ctx.fill(line);
        } else {
            line.rect(canvasWidth - lineX, 0, 1, canvasHeight - marginBottom);

            ctx.fillStyle = 'lightgray';
            ctx.fill(line);
        }

        lineX -= canvasWidth / 9;
    }
    
    let padding = 20;
    const inBetween = 4

    let rowHeight = (canvasHeight - marginBottom - padding - inBetween * numberOfRows - 25) / numberOfRows;
    
    if (numberOfRows < 8) {
        rowHeight = 88;
        padding = (canvasHeight - rowHeight * numberOfRows - inBetween * numberOfRows - 25) / 2;
    }
    
    for (let key in data) {

        const row = new Path2D('2d');
        
        let rowWidth = canvasWidth - canvasWidth / 9;

        rowWidth = data[key] / scales[scales.length - 1] * rowWidth - 1;
        row.rect(28, padding, rowWidth, rowHeight);

        ctx.fillStyle = 'dodgerblue';
        ctx.fill(row);

        const font = (numberOfRows) => {
            switch (numberOfRows) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    return 18;
                case 8:
                    return 17;
                case 9:
                    return 16;
                case 10:
                    return 15;
                case 11:
                    return 14;
            }
        }

        ctx.font = `${font(numberOfRows)}pt Roboto`;
        ctx.fillStyle = 'white';
        if (rowWidth > ctx.measureText(key).width + 20) {
            ctx.fillText(key, rowWidth - ctx.measureText(key).width + 16, (rowHeight + 16) / 2 + padding);
        }

        padding += rowHeight + inBetween;
    }


    // for (let key in paid) {
    //     const dividendsPaid = new Path2D('2d');
    //     let width = 562;
    //     if (key === high) {
    //         dividendsPaid.rect(8, y, width, height);
    //     } else {
    //         width = paid[key] / paid[high] * width;
    //         dividendsPaid.rect(8, y, width, height);
    //     }
    //     ctx.fillStyle = 'dodgerblue';
    //     ctx.fill(dividendsPaid);

      


    //     y += height + 4;
    // }

};

const sort = (obj) => {

    let arr = [];

    for (let key in obj) {
        arr.push([key, obj[key]]);
    }

    arr.sort((a, b) => {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        return 0;
    });

    let newObj = {};

    for (let i = 0; i < arr.length; i++) {
        newObj[arr[i][0]] = arr[i][1];
    }

    return newObj;
};

const scaleData = (data, idx) => {
    let scales = [0];
    for (let i = Math.ceil(data[idx]); ; i++) {
        if (i > 999) {
            if (i % 1000 === 0) {
                for (let j = 1; j < 8; j++) {
                    scales.push(i / 8 * j);
                }
                scales.push(i);
                break;
            }
        } else {
            if (i % 5 === 0) {
                for (let j = 1; j < 8; j++) {
                    scales.push(i / 8 * j);
                }
                scales.push(i);
                break;
            }
        }
    }
    return scales;
};