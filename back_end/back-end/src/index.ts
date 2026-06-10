import express from "express";
import cors from "cors";

import eventRoute from "./routes/eventRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js";
import pembicara from "./routes/pembicaraRoute.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ini adalah api untuk Converse");
});

app.use("/event", eventRoute);
app.use("/category", categoryRoute);
app.use("/product", productRoute);
app.use("/pembicara", pembicara);
app.use("/auth", authRoute);
app.use("/user", userRoute);

if (process.env.NODE_ENV !== "production") {
  app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
}

export default app;