import express from "express";
import cors from "cors";
import { main } from "./main";
const app = express(cors());

app.get("/", (_, res) => {
  res.send("Hello Coders! use `/vrf/:id`");
});

app.get("/vrf/movie/:id", async (req, res) => {
  const id = req.params.id;
  var data = await main(id);
  return res.json({
    id: id,
    vrf: data,
    timestamp: new Date().toISOString(),
    link: 'https://vidsrc.cc/api/'+id+'/servers?id='+id+'&type=movie&vrf='+data,
  });
});

module.exports = app;
