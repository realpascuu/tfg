import { Request, Response } from "express";

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (_: Request, res: Response) => {
  res.send("¡Hola mundo desde Express!");
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
