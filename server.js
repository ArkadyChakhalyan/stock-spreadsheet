import express from 'express'
// import fs from 'fs';

const app = express()

// fs.writeFileSync('./test.json', JSON.stringify({ a: 1}));
// const data = JSON.parse(fs.readFileSync('./test.json', 'utf8'));

app.use(express.static('build'))

app.get('/api/test', (req, res) => {
    res.json({ a: 'Hello Wordl!' })
})

app.listen(3000, () => {
    console.log(`Example app listening`)
});