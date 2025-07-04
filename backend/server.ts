import express, { json } from "express";
import "dotenv/config";
import cors from "cors";
import router from "./src/routes/rotasBack";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
express.urlencoded();

const whitelist = new Set([
  `http://localhost:${port}`,
  `http://localhost:5173`,
]);

const corsOptions = {
  origin: (origin, callback) => {
    if (origin === undefined || whitelist.has(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true,
};

app.options("/api", cors(corsOptions));
app.use(cors(corsOptions));
app.use(router);



app.listen(port, () => {
  console.log(`Servidor escutando a porta ${port}`);
});
