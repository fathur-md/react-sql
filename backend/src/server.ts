import express from "express";
import cors from "cors";
import mhsRoutes from "./routes/mhs";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/mahasiswa", mhsRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
