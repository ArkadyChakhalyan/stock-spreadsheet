import React, { useEffect, useRef, useState } from 'react';
import styles from './charts.module.css'
import PropTypes from 'prop-types';

/**
 * Collumn chart.
 * @param {object} props - Props.
 * @param {number[] | object} props.data - Chart data.
 * @param {Function} props.scaleData - Scale data for chart.
 * @param {boolean} props.double - True for charts with double collumns.
 * @param {boolean} props.horizontal - True for horizontal collumns.
 * @returns {Element} CollumnChart component.
 */
export const  CollumnChart = ({ data, scaleData, double, horizontal })  => {

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

    let chart;

    useEffect(() => {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        let canvasWidth = rect.width;
        let canvasHeight = rect.height;
        const context = setupCanvas(canvas);
        
        if (horizontal) chart = chartHorizontal(context, canvasHeight, canvasWidth, scaleData, data);
        else if (double) chart = chartDouble(context, canvasHeight, canvasWidth, scaleData, data);
        else chart = chartVertical(context, canvasHeight, canvasWidth, scaleData, data);

    }, [chart, windowWidth])

    return (
        <canvas
            className={styles.canvas}
            ref={canvasRef} />
    )
};

const chartVertical = (ctx, canvasHeight, canvasWidth, scaleData, data) => {
    
    const numberOfCollumns = data.length;

    let padding = 16;
    let inBetween = 4;
    if (data.length > 30) inBetween = 2;
    else if (data.length > 50) inBetween = 1;
    else if (data.length > 100) inBetween = 0.5;

    let highestCollumnIdx;
    let largestNum = 0;

    for (let i = 0; i < numberOfCollumns; i++) {
        if (+data[i] > largestNum) {
            largestNum = data[i];
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

    if (numberOfCollumns < 6 && canvasWidth < 450) {
        collumnWidth = 90;
        padding = (canvasWidth - collumnWidth * numberOfCollumns - inBetween * numberOfCollumns) / 2;
    }
    else if (numberOfCollumns < 6) {
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

const chartHorizontal = (ctx, canvasHeight, canvasWidth, scaleData, data) => {

    let numberOfRows = 0;

    let longestRow;
    let largestNum = 0;

    for (let key in data) {
        numberOfRows++;
        if (data[key] > largestNum) {
            largestNum = data[key];
            longestRow = key;
        }
    }

    let lineX = canvasWidth - 16;
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
        row.rect(18, padding, rowWidth, rowHeight);

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
                    return 17;
                case 8:
                    return 16;
                case 9:
                    return 15;
                case 10:
                    return 14;
                case 11:
                    return 13;
            }
        }

        ctx.font = `${font(numberOfRows)}pt Roboto`;
        ctx.fillStyle = 'white';
        if (rowWidth > ctx.measureText(key).width + 20) {
            ctx.fillText(key, rowWidth - ctx.measureText(key).width, (rowHeight + 16) / 2 + padding);
        }

        padding += rowHeight + inBetween;
    }
    
};

const chartDouble = (ctx, canvasHeight, canvasWidth, scaleData, data) => {

    let numberOfCollumns = 0;

    for (let key in data) {
        if (data[key]) numberOfCollumns++;
    }
    
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

    let collumnWidth = 40;
    let margin = 44;
    let inBetween = 80;

    if (canvasWidth < 450) {
        collumnWidth = 20;
        margin = 24;
        inBetween = 60;
    }
    
    let padding = (canvasWidth - textWidth - (margin + collumnWidth) * numberOfCollumns) / numberOfCollumns;
    

    for (let key in data) {

        const collumnOne = new Path2D('2d');

        let collumnHeight = canvasHeight - (canvasHeight - zeroHeight) - top;

        collumnHeight = data[key].revenue / scales[scales.length - 1] * collumnHeight;
        collumnOne.rect(padding + textWidth, zeroHeight - collumnHeight, collumnWidth, collumnHeight);

        ctx.fillStyle = '#238823';
        ctx.fill(collumnOne);

        const collumnTwo = new Path2D('2d');

        ctx.fillStyle = 'dodgerblue';
        ctx.fill(collumnTwo);

        if (data[key].earnings < 0) {
            collumnHeight = (data[key].earnings / data[key].revenue) * collumnHeight;
            collumnTwo.rect(padding + textWidth + margin, zeroHeight + 2 - collumnHeight, collumnWidth, collumnHeight);
        } else {
            collumnHeight = (data[key].earnings / data[key].revenue) * collumnHeight;
            collumnTwo.rect(padding + textWidth + margin, zeroHeight - collumnHeight, collumnWidth, collumnHeight);
        }

        ctx.fillStyle = 'dodgerblue';
        ctx.fill(collumnTwo);

        ctx.font = `9pt Roboto`;
        ctx.fillStyle = 'rgb(102, 102, 102)';

        ctx.fillText(data[key].date, padding + textWidth + (collumnWidth + margin) / 2 - ctx.measureText(data[key].date).width / 2, canvasHeight - 8);

        padding += collumnWidth + inBetween;
    }

};

const setupCanvas = (canvas) => {
    let dpr = window.devicePixelRatio || 1;
    let rect = canvas.getBoundingClientRect();
    let rectParent = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = rectParent.width + 'px';
    canvas.style.height = rectParent.height + 'px';
    let ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    return ctx;
}

CollumnChart.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.object,
        PropTypes.array,
    ]),
    scaleData: PropTypes.func,
    double: PropTypes.bool,
    horizontal: PropTypes.bool
}
