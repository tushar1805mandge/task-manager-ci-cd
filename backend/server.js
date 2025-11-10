import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";
import Task from "./models/Task.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Backend running..."));
app.use("/api/tasks", taskRoutes);

// Sync DB
sequelize.sync()
  .then(() => console.log("MySQL Connected and Synced"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
