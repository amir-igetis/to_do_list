// const express = require('express');
import express from 'express';
// const path = require('path');
import path from 'path';
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    // res.sendFile("C:/Users/amiru/Desktop/to-do-list/src/main.jsx");
    res.sendFile("C:/Users/amiru/Desktop/to-do-list/index.html");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});