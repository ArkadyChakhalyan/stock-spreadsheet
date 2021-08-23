import React, { useRef, useEffect } from 'react';

export const PriceChart  ({ stock }) => {

    //     fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=AAPL&region=US", {
    // 	"method": "GET",
    // 	"headers": {
    // 		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    // 		"x-rapidapi-key": "2d223f7ed3msh31a354bc2e0981fp1cad94jsn2995c8dcda59"
    // 	}
    // })
    //     .then((response) => response.json())
    //     .then((stock) => console.log(stock))


    const data = {
        0: { date: 1629736406, close: 149.95159912109375 },
        1: { date: 1629466200, close: 148.19000244140625 },
        2: { date: 1629379800, close: 146.6999969482422 },
        3: { date: 1629293400, close: 146.36000061035156 },
        4: { date: 1629207000, close: 150.19000244140625 },
        5: { date: 1629120600, close: 151.1199951171875 },
        6: { date: 1628861400, close: 149.10000610351562 },
        7: { date: 1628775000, close: 148.88999938964844 },
        8: { date: 1628688600, close: 145.86000061035156 },
        9: { date: 1628602200, close: 145.60000610351562 },
        10: { date: 1628515800, close: 146.08999633789062 },
        11: { date: 1628256600, close: 146.13999938964844 },
        12: { amount: 0.22, date: 1628256600, type: "DIVIDEND", data: 0.22 },
        13: { date: 1628170200, close: 147.05999755859375 },
        14: { date: 1628083800, open: 147.27000427246094, high: 147.7899932861328, low: 146.27999877929688, close: 146.9499969482422 },
        15: { date: 1627997400, open: 145.80999755859375, high: 148.0399932861328, low: 145.17999267578125, close: 147.36000061035156 },
        16: { date: 1627911000, open: 146.36000061035156, high: 146.9499969482422, low: 145.25, close: 145.52000427246094 },
        17: { date: 1627651800, open: 144.3800048828125, high: 146.3300018310547, low: 144.11000061035156, close: 145.86000061035156 },
        18: { date: 1627565400, open: 144.69000244140625, high: 146.5500030517578, low: 144.5800018310547, close: 145.63999938964844 },
        19: { date: 1627479000, open: 144.80999755859375, high: 146.97000122070312, low: 142.5399932861328, close: 144.97999572753906 },
        20: { date: 1627392600, open: 149.1199951171875, high: 149.2100067138672, low: 145.5500030517578, close: 146.77000427246094 },
        21: { date: 1627306200, open: 148.27000427246094, high: 149.8300018310547, low: 147.6999969482422, close: 148.99000549316406 },
        22: { date: 1627047000, open: 147.5500030517578, high: 148.72000122070312, low: 146.9199981689453, close: 148.55999755859375 },
        23: { date: 1626960600, open: 145.94000244140625, high: 148.1999969482422, low: 145.80999755859375, close: 146.8000030517578 },
        24: { date: 1626874200, open: 145.52999877929688, high: 146.1300048828125, low: 144.6300048828125, close: 145.39999389648438 },
        25: { date: 1626787800, open: 143.4600067138672, high: 147.10000610351562, low: 142.9600067138672, close: 146.14999389648438 },
        26: { date: 1626701400, open: 143.75, high: 144.07000732421875, low: 141.6699981689453, close: 142.4499969482422 },
        27: { date: 1626442200, open: 148.4600067138672, high: 149.75999450683594, low: 145.8800048828125, close: 146.38999938964844 },
        28: { date: 1626355800, open: 149.24000549316406, high: 150, low: 147.08999633789062, close: 148.47999572753906 },
        29: { date: 1626269400, open: 148.10000610351562, high: 149.57000732421875, low: 147.67999267578125, close: 149.14999389648438 },
        30: { date: 1626183000, open: 144.02999877929688, high: 147.4600067138672, low: 143.6300048828125, close: 145.63999938964844 },
        31: { date: 1626096600, open: 146.2100067138672, high: 146.32000732421875, low: 144, close: 144.5 },
        32: { date: 1625837400, open: 142.75, high: 145.64999389648438, low: 142.64999389648438, close: 145.11000061035156 },
        33: { date: 1625751000, open: 141.5800018310547, high: 144.05999755859375, low: 140.6699981689453, close: 143.24000549316406 },
        34: { date: 1625664600, open: 143.5399932861328, high: 144.88999938964844, low: 142.66000366210938, close: 144.57000732421875 },
        35: { date: 1625578200, open: 140.07000732421875, high: 143.14999389648438, low: 140.07000732421875, close: 142.02000427246094 },
        36: { date: 1625232600, open: 137.89999389648438, high: 140, low: 137.75, close: 139.9600067138672 },
        37: { date: 1625146200, open: 136.60000610351562, high: 137.3300018310547, low: 135.75999450683594, close: 137.27000427246094 },
        38: { date: 1625059800, open: 136.1699981689453, high: 137.41000366210938, low: 135.8699951171875, close: 136.9600067138672 },
        39: { date: 1624973400, open: 134.8000030517578, high: 136.49000549316406, low: 134.35000610351562, close: 136.3300018310547 },
        40: { date: 1624887000, open: 133.41000366210938, high: 135.25, low: 133.35000610351562, close: 134.77999877929688 },
        41: { date: 1624627800, open: 133.4600067138672, high: 133.88999938964844, low: 132.80999755859375, close: 133.11000061035156 },
        42: { date: 1624541400, open: 134.4499969482422, high: 134.63999938964844, low: 132.92999267578125, close: 133.41000366210938 },
        43: { date: 1624455000, open: 133.77000427246094, high: 134.32000732421875, low: 133.22999572753906, close: 133.6999969482422 },
        44: { date: 1624368600, open: 132.1300048828125, high: 134.0800018310547, low: 131.6199951171875, close: 133.97999572753906 },
        45: { date: 1624282200, open: 130.3000030517578, high: 132.41000366210938, low: 129.2100067138672, close: 132.3000030517578 },
        46: { date: 1624023000, open: 130.7100067138672, high: 131.50999450683594, low: 130.24000549316406, close: 130.4600067138672 },
        47: { date: 1623936600, open: 129.8000030517578, high: 132.5500030517578, low: 129.64999389648438, close: 131.7899932861328 },
        48: { date: 1623850200, open: 130.3699951171875, high: 130.88999938964844, low: 128.4600067138672, close: 130.14999389648438 },
        49: { date: 1623763800, open: 129.94000244140625, high: 130.60000610351562, low: 129.38999938964844, close: 129.63999938964844 },
        50: { date: 1623677400, open: 127.81999969482422, high: 130.5399932861328, low: 127.06999969482422, close: 130.47999572753906 },
        51: { date: 1623418200, open: 126.52999877929688, high: 127.44000244140625, low: 126.0999984741211, close: 127.3499984741211 },
        52: { date: 1623331800, open: 127.0199966430664, high: 128.19000244140625, low: 125.94000244140625, close: 126.11000061035156 },
        53: { date: 1623245400, open: 127.20999908447266, high: 127.75, low: 126.5199966430664, close: 127.12999725341797 },
        54: { date: 1623159000, open: 126.5999984741211, high: 128.4600067138672, low: 126.20999908447266, close: 126.73999786376953 },
        55: { date: 1623072600, open: 126.16999816894531, high: 126.31999969482422, low: 124.83000183105469, close: 125.9000015258789 },
        56: { date: 1622813400, open: 124.06999969482422, high: 126.16000366210938, low: 123.8499984741211, close: 125.88999938964844 },
        57: { date: 1622727000, open: 124.68000030517578, high: 124.8499984741211, low: 123.12999725341797, close: 123.54000091552734 },
        58: { date: 1622640600, open: 124.27999877929688, high: 125.23999786376953, low: 124.05000305175781, close: 125.05999755859375 },
        59: { date: 1622554200, open: 125.08000183105469, high: 125.3499984741211, low: 123.94000244140625, close: 124.27999877929688 },
        60: { date: 1622208600, open: 125.56999969482422, high: 125.80000305175781, low: 124.55000305175781, close: 124.61000061035156 },
        61: { date: 1622122200, open: 126.44000244140625, high: 127.63999938964844, low: 125.08000183105469, close: 125.27999877929688 },
        62: { date: 1622035800, open: 126.95999908447266, high: 127.38999938964844, low: 126.41999816894531, close: 126.8499984741211 },
        63: { date: 1621949400, open: 127.81999969482422, high: 128.32000732421875, low: 126.31999969482422, close: 126.9000015258789 },
        64: { date: 1621863000, open: 126.01000213623047, high: 127.94000244140625, low: 125.94000244140625, close: 127.0999984741211 },
        65: { date: 1621603800, open: 127.81999969482422, high: 128, low: 125.20999908447266, close: 125.43000030517578 },
        66: { date: 1621517400, open: 125.2300033569336, high: 127.72000122070312, low: 125.0999984741211, close: 127.30999755859375 },
        67: { date: 1621431000, open: 123.16000366210938, high: 124.91999816894531, low: 122.86000061035156, close: 124.69000244140625 },
        68: { date: 1621344600, open: 126.55999755859375, high: 126.98999786376953, low: 124.77999877929688, close: 124.8499984741211 },
        69: { date: 1621258200, open: 126.81999969482422, high: 126.93000030517578, low: 125.16999816894531, close: 126.2699966430664 },
        70: { date: 1620999000, open: 126.25, high: 127.88999938964844, low: 125.8499984741211, close: 127.44999694824219 },
        71: { date: 1620912600, open: 124.58000183105469, high: 126.1500015258789, low: 124.26000213623047, close: 124.97000122070312 },
        72: { date: 1620826200, open: 123.4000015258789, high: 124.63999938964844, low: 122.25, close: 122.7699966430664 },
        73: { date: 1620739800, open: 123.5, high: 126.2699966430664, low: 122.7699966430664, close: 125.91000366210938 },
        74: { date: 1620653400, open: 129.41000366210938, high: 129.5399932861328, low: 126.80999755859375, close: 126.8499984741211 },
        75: { date: 1620394200, open: 130.85000610351562, high: 131.25999450683594, low: 129.47999572753906, close: 130.2100067138672 },
        76: { amount: 0.22, date: 1620394200, type: "DIVIDEND", data: 0.22 },
        77: { date: 1620307800, open: 127.88999938964844, high: 129.75, low: 127.12999725341797, close: 129.74000549316406 },
        78: { date: 1620221400, open: 129.1999969482422, high: 130.4499969482422, low: 127.97000122070312, close: 128.10000610351562 },
        79: { date: 1620135000, open: 131.19000244140625, high: 131.49000549316406, low: 126.69999694824219, close: 127.8499984741211 },
        80: { date: 1620048600, open: 132.0399932861328, high: 134.07000732421875, low: 131.8300018310547, close: 132.5399932861328 },
        81: { date: 1619789400, open: 131.77999877929688, high: 133.55999755859375, low: 131.07000732421875, close: 131.4600067138672 },
        82: { date: 1619703000, open: 136.47000122070312, high: 137.07000732421875, low: 132.4499969482422, close: 133.47999572753906 },
        83: { date: 1619616600, open: 134.30999755859375, high: 135.02000427246094, low: 133.0800018310547, close: 133.5800018310547 },
        84: { date: 1619530200, open: 135.00999450683594, high: 135.41000366210938, low: 134.11000061035156, close: 134.38999938964844 },
        85: { date: 1619443800, open: 134.8300018310547, high: 135.05999755859375, low: 133.55999755859375, close: 134.72000122070312 },
        86: { date: 1619184600, open: 132.16000366210938, high: 135.1199951171875, low: 132.16000366210938, close: 134.32000732421875 },
        87: { date: 1619098200, open: 133.0399932861328, high: 134.14999389648438, low: 131.41000366210938, close: 131.94000244140625 },
        88: { date: 1619011800, open: 132.36000061035156, high: 133.75, low: 131.3000030517578, close: 133.5 },
        89: { date: 1618925400, open: 135.02000427246094, high: 135.52999877929688, low: 131.80999755859375, close: 133.11000061035156 },
        90: { date: 1618839000, open: 133.50999450683594, high: 135.47000122070312, low: 133.33999633789062, close: 134.83999633789062 },
        91: { date: 1618579800, open: 134.3000030517578, high: 134.6699981689453, low: 133.27999877929688, close: 134.16000366210938 },
        92: { date: 1618493400, open: 133.82000732421875, high: 135, low: 133.63999938964844, close: 134.5 },
        93: { date: 1618407000, open: 134.94000244140625, high: 135, low: 131.66000366210938, close: 132.02999877929688 },
        94: { date: 1618320600, open: 132.44000244140625, high: 134.66000366210938, low: 131.92999267578125, close: 134.42999267578125 },
        95: { date: 1618234200, open: 132.52000427246094, high: 132.85000610351562, low: 130.6300048828125, close: 131.24000549316406 },
        96: { date: 1617975000, open: 129.8000030517578, high: 133.0399932861328, low: 129.47000122070312, close: 133 },
        97: { date: 1617888600, open: 128.9499969482422, high: 130.38999938964844, low: 128.52000427246094, close: 130.3600006103515 },
        98: { date: 1617802200, open: 125.83000183105469, high: 127.91999816894531, low: 125.13999938964844, close: 127.9000015258789 },
        99: { date: 1617715800, open: 126.5, high: 127.12999725341797, low: 125.6500015258789, close: 126.20999908447266 },
    }

    const canvasRef = useRef(null);

    const canvasHeight = 160;
    const canvasWidth = 550;

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        chart(context, canvasHeight, canvasWidth, data);
    }, [chart])


    return (
        <canvas
            width={canvasWidth}
            height={canvasHeight}
            ref={canvasRef} />
    );
}

const chart = (ctx, canvasHeight, canvasWidth, data) => {

    let highestPoint = 0;
    let lowestPoint = data[0].close;

    for (let key in data) {
        if (data[key].close > highestPoint) highestPoint = data[key].close;
        if (data[key].close < lowestPoint) lowestPoint = data[key].close;
    }
    

    ctx.strokeStyle = 'black';

    let t = 0;
    let price = data[0].close;
    let oldPrice;

    for (let key in data) {
        if (data[key].close) {
            oldPrice = price;
            price = data[key].close;

            ctx.beginPath();
            ctx.moveTo(t, oldPrice / highestPoint * canvasHeight);
            ctx.lineTo(t + 1, price / highestPoint * canvasHeight);
            ctx.stroke();

            t += 1;
        }

    }
    ctx.closePath();

};



// 100: {date: 1617629400, open: 123.87000274658203, high: 126.16000366210938, low: 123.06999969482422, close: 125.9000015258789, …}
// 101: {date: 1617283800, open: 123.66000366210938, high: 124.18000030517578, low: 122.48999786376953, close: 123, …}
// 102: {date: 1617197400, open: 121.6500015258789, high: 123.5199966430664, low: 121.1500015258789, close: 122.1500015258789, …}
// 103: {date: 1617111000, open: 120.11000061035156, high: 120.4000015258789, low: 118.86000061035156, close: 119.9000015258789, …}
// 104: {date: 1617024600, open: 121.6500015258789, high: 122.58000183105469, low: 120.7300033569336, close: 121.38999938964844, …}
// 105: {date: 1616765400, open: 120.3499984741211, high: 121.4800033569336, low: 118.91999816894531, close: 121.20999908447266, …}
// 106: {date: 1616679000, open: 119.54000091552734, high: 121.66000366210938, low: 119, close: 120.58999633789062, …}
// 107: {date: 1616592600, open: 122.81999969482422, high: 122.9000015258789, low: 120.06999969482422, close: 120.08999633789062, …}
// 108: {date: 1616506200, open: 123.33000183105469, high: 124.23999786376953, low: 122.13999938964844, close: 122.54000091552734, …}
// 109: {date: 1616419800, open: 120.33000183105469, high: 123.87000274658203, low: 120.26000213623047, close: 123.38999938964844, …}
// 110: {date: 1616160600, open: 119.9000015258789, high: 121.43000030517578, low: 119.68000030517578, close: 119.98999786376953, …}
// 111: {date: 1616074200, open: 122.87999725341797, high: 123.18000030517578, low: 120.31999969482422, close: 120.52999877929688, …}
// 112: {date: 1615987800, open: 124.05000305175781, high: 125.86000061035156, low: 122.33999633789062, close: 124.76000213623047, …}
// 113: {date: 1615901400, open: 125.69999694824219, high: 127.22000122070312, low: 124.72000122070312, close: 125.56999969482422, …}
// 114: {date: 1615815000, open: 121.41000366210938, high: 124, low: 120.41999816894531, close: 123.98999786376953, …}
// 115: {date: 1615559400, open: 120.4000015258789, high: 121.16999816894531, low: 119.16000366210938, close: 121.02999877929688, …}
// 116: {date: 1615473000, open: 122.54000091552734, high: 123.20999908447266, low: 121.26000213623047, close: 121.95999908447266, …}
// 117: {date: 1615386600, open: 121.69000244140625, high: 122.16999816894531, low: 119.44999694824219, close: 119.9800033569336, …}
// 118: {date: 1615300200, open: 119.02999877929688, high: 122.05999755859375, low: 118.79000091552734, close: 121.08999633789062, …}
// 119: {date: 1615213800, open: 120.93000030517578, high: 121, low: 116.20999908447266, close: 116.36000061035156, …}
// 120: {date: 1614954600, open: 120.9800033569336, high: 121.94000244140625, low: 117.56999969482422, close: 121.41999816894531, …}
// 121: {date: 1614868200, open: 121.75, high: 123.5999984741211, low: 118.62000274658203, close: 120.12999725341797, …}
// 122: {date: 1614781800, open: 124.80999755859375, high: 125.70999908447266, low: 121.83999633789062, close: 122.05999755859375, …}
// 123: {date: 1614695400, open: 128.41000366210938, high: 128.72000122070312, low: 125.01000213623047, close: 125.12000274658203, …}
// 124: {date: 1614609000, open: 123.75, high: 127.93000030517578, low: 122.79000091552734, close: 127.79000091552734, …}
// 125: {date: 1614349800, open: 122.58999633789062, high: 124.8499984741211, low: 121.19999694824219, close: 121.26000213623047, …}
// 126: {date: 1614263400, open: 124.68000030517578, high: 126.45999908447266, low: 120.54000091552734, close: 120.98999786376953, …}
// 127: {date: 1614177000, open: 124.94000244140625, high: 125.55999755859375, low: 122.2300033569336, close: 125.3499984741211, …}
// 128: {date: 1614090600, open: 123.76000213623047, high: 126.70999908447266, low: 118.38999938964844, close: 125.86000061035156, …}
// 129: {date: 1614004200, open: 128.00999450683594, high: 129.72000122070312, low: 125.5999984741211, close: 126, …}
// 130: {date: 1613745000, open: 130.24000549316406, high: 130.7100067138672, low: 128.8000030517578, close: 129.8699951171875, …}
// 131: {date: 1613658600, open: 129.1999969482422, high: 130, low: 127.41000366210938, close: 129.7100067138672, …}
// 132: {date: 1613572200, open: 131.25, high: 132.22000122070312, low: 129.47000122070312, close: 130.83999633789062, …}
// 133: {date: 1613485800, open: 135.49000549316406, high: 136.00999450683594, low: 132.7899932861328, close: 133.19000244140625, …}
// 134: {date: 1613140200, open: 134.35000610351562, high: 135.52999877929688, low: 133.69000244140625, close: 135.3699951171875, …}
// 135: {date: 1613053800, open: 135.89999389648438, high: 136.38999938964844, low: 133.77000427246094, close: 135.1300048828125, …}
// 136: {date: 1612967400, open: 136.47999572753906, high: 136.99000549316406, low: 134.39999389648438, close: 135.38999938964844, …}
// 137: {date: 1612881000, open: 136.6199951171875, high: 137.8800048828125, low: 135.85000610351562, close: 136.00999450683594, …}
// 138: {date: 1612794600, open: 136.02999877929688, high: 136.9600067138672, low: 134.9199981689453, close: 136.91000366210938, …}
// 139: {date: 1612535400, open: 137.35000610351562, high: 137.4199981689453, low: 135.86000061035156, close: 136.75999450683594, …}
// 140: {amount: 0.205, date: 1612535400, type: "DIVIDEND", data: 0.205}
// 141: {date: 1612449000, open: 136.3000030517578, high: 137.39999389648438, low: 134.58999633789062, close: 137.38999938964844, …}
// 142: {date: 1612362600, open: 135.75999450683594, high: 135.77000427246094, low: 133.61000061035156, close: 133.94000244140625, …}
// 143: {date: 1612276200, open: 135.72999572753906, high: 136.30999755859375, low: 134.61000061035156, close: 134.99000549316406, …}
// 144: {date: 1612189800, open: 133.75, high: 135.3800048828125, low: 130.92999267578125, close: 134.13999938964844, …}
// 145: {date: 1611930600, open: 135.8300018310547, high: 136.74000549316406, low: 130.2100067138672, close: 131.9600067138672, …}
// 146: {date: 1611844200, open: 139.52000427246094, high: 141.99000549316406, low: 136.6999969482422, close: 137.08999633789062, …}
// 147: {date: 1611757800, open: 143.42999267578125, high: 144.3000030517578, low: 140.41000366210938, close: 142.05999755859375, …}
// 148: {date: 1611671400, open: 143.60000610351562, high: 144.3000030517578, low: 141.3699951171875, close: 143.16000366210938, …}
// 149: {date: 1611585000, open: 143.07000732421875, high: 145.08999633789062, low: 136.5399932861328, close: 142.9199981689453, …}
// 150: {date: 1611325800, open: 136.27999877929688, high: 139.85000610351562, low: 135.02000427246094, close: 139.07000732421875, …}
// 151: {date: 1611239400, open: 133.8000030517578, high: 139.6699981689453, low: 133.58999633789062, close: 136.8699951171875, …}
// 152: {date: 1611153000, open: 128.66000366210938, high: 132.49000549316406, low: 128.5500030517578, close: 132.02999877929688, …}
// 153: {date: 1611066600, open: 127.77999877929688, high: 128.7100067138672, low: 126.94000244140625, close: 127.83000183105469, …}
// 154: {date: 1610721000, open: 128.77999877929688, high: 130.22000122070312, low: 127, close: 127.13999938964844, …}
// 155: {date: 1610634600, open: 130.8000030517578, high: 131, low: 128.75999450683594, close: 128.91000366210938, …}
// 156: {date: 1610548200, open: 128.75999450683594, high: 131.4499969482422, low: 128.49000549316406, close: 130.88999938964844, …}
// 157: {date: 1610461800, open: 128.5, high: 129.69000244140625, low: 126.86000061035156, close: 128.8000030517578, …}
// 158: {date: 1610375400, open: 129.19000244140625, high: 130.1699981689453, low: 128.5, close: 128.97999572753906, …}
// 159: {date: 1610116200, open: 132.42999267578125, high: 132.6300048828125, low: 130.22999572753906, close: 132.0500030517578, …}
// 160: {date: 1610029800, open: 128.36000061035156, high: 131.6300048828125, low: 127.86000061035156, close: 130.9199981689453, …}
// 161: {date: 1609943400, open: 127.72000122070312, high: 131.0500030517578, low: 126.37999725341797, close: 126.5999984741211, …}
// 162: {date: 1609857000, open: 128.88999938964844, high: 131.74000549316406, low: 128.42999267578125, close: 131.00999450683594, …}
// 163: {date: 1609770600, open: 133.52000427246094, high: 133.61000061035156, low: 126.76000213623047, close: 129.41000366210938, …}
// 164: {date: 1609425000, open: 134.0800018310547, high: 134.74000549316406, low: 131.72000122070312, close: 132.69000244140625, …}
// 165: {date: 1609338600, open: 135.5800018310547, high: 135.99000549316406, low: 133.39999389648438, close: 133.72000122070312, …}
// 166: {date: 1609252200, open: 138.0500030517578, high: 138.7899932861328, low: 134.33999633789062, close: 134.8699951171875, …}
// 167: {date: 1609165800, open: 133.99000549316406, high: 137.33999633789062, low: 133.50999450683594, close: 136.69000244140625, …}
// 168: {date: 1608820200, open: 131.32000732421875, high: 133.4600067138672, low: 131.10000610351562, close: 131.97000122070312, …}
// 169: {date: 1608733800, open: 132.16000366210938, high: 132.42999267578125, low: 130.77999877929688, close: 130.9600067138672, …}
// 170: {date: 1608647400, open: 131.61000061035156, high: 134.41000366210938, low: 129.64999389648438, close: 131.8800048828125, …}
// 171: {date: 1608561000, open: 125.0199966430664, high: 128.30999755859375, low: 123.44999694824219, close: 128.22999572753906, …}
// 172: {date: 1608301800, open: 128.9600067138672, high: 129.10000610351562, low: 126.12000274658203, close: 126.66000366210938, …}
// 173: {date: 1608215400, open: 128.89999389648438, high: 129.5800018310547, low: 128.0399932861328, close: 128.6999969482422, …}
// 174: {date: 1608129000, open: 127.41000366210938, high: 128.3699951171875, low: 126.55999755859375, close: 127.80999755859375, …}
// 175: {date: 1608042600, open: 124.33999633789062, high: 127.9000015258789, low: 124.12999725341797, close: 127.87999725341797, …}
// 176: {date: 1607956200, open: 122.5999984741211, high: 123.3499984741211, low: 121.54000091552734, close: 121.77999877929688, …}
// 177: {date: 1607697000, open: 122.43000030517578, high: 122.76000213623047, low: 120.55000305175781, close: 122.41000366210938, …}
// 178: {date: 1607610600, open: 120.5, high: 123.87000274658203, low: 120.1500015258789, close: 123.23999786376953, …}
// 179: {date: 1607524200, open: 124.52999877929688, high: 125.94999694824219, low: 121, close: 121.77999877929688, …}
// 180: {date: 1607437800, open: 124.37000274658203, high: 124.9800033569336, low: 123.08999633789062, close: 124.37999725341797, …}
// 181: {date: 1607351400, open: 122.30999755859375, high: 124.56999969482422, low: 122.25, close: 123.75, …}
// 182: {date: 1607092200, open: 122.5999984741211, high: 122.86000061035156, low: 121.5199966430664, close: 122.25, …}
// 183: {date: 1607005800, open: 123.5199966430664, high: 123.77999877929688, low: 122.20999908447266, close: 122.94000244140625, …}
// 184: {date: 1606919400, open: 122.0199966430664, high: 123.37000274658203, low: 120.88999938964844, close: 123.08000183105469, …}
// 185: {date: 1606833000, open: 121.01000213623047, high: 123.47000122070312, low: 120.01000213623047, close: 122.72000122070312, …}
// 186: {date: 1606746600, open: 116.97000122070312, high: 120.97000122070312, low: 116.80999755859375, close: 119.05000305175781, …}
// 187: {date: 1606487400, open: 116.56999969482422, high: 117.48999786376953, low: 116.22000122070312, close: 116.58999633789062, …}
// 188: {date: 1606314600, open: 115.55000305175781, high: 116.75, low: 115.16999816894531, close: 116.02999877929688, …}
// 189: {date: 1606228200, open: 113.91000366210938, high: 115.8499984741211, low: 112.58999633789062, close: 115.16999816894531, …}
// 190: {date: 1606141800, open: 117.18000030517578, high: 117.62000274658203, low: 113.75, close: 113.8499984741211, …}
// 191: {date: 1605882600, open: 118.63999938964844, high: 118.7699966430664, low: 117.29000091552734, close: 117.33999633789062, …}
// 192: {date: 1605796200, open: 117.58999633789062, high: 119.05999755859375, low: 116.80999755859375, close: 118.63999938964844, …}
// 193: {date: 1605709800, open: 118.61000061035156, high: 119.81999969482422, low: 118, close: 118.02999877929688, …}
// 194: {date: 1605623400, open: 119.55000305175781, high: 120.66999816894531, low: 118.95999908447266, close: 119.38999938964844, …}
// 195: {date: 1605537000, open: 118.91999816894531, high: 120.98999786376953, low: 118.1500015258789, close: 120.30000305175781, …}
// 196: {date: 1605277800, open: 119.44000244140625, high: 119.66999816894531, low: 117.87000274658203, close: 119.26000213623047, …}
// 197: {date: 1605191400, open: 119.62000274658203, high: 120.52999877929688, low: 118.56999969482422, close: 119.20999908447266, …}
// 198: {date: 1605105000, open: 117.19000244140625, high: 119.62999725341797, low: 116.44000244140625, close: 119.48999786376953, …}
// 199: {date: 1605018600, open: 115.55000305175781, high: 117.58999633789062, low: 114.12999725341797, close: 115.97000122070312, …}