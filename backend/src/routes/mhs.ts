import { Request, Response, Router } from "express";
import mysql from "mysql2";

const router = Router();

const mhsDB = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "mhsdb",
});

mhsDB.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

router.get("/", (req: Request, res: Response) => {
  mhsDB.query("SELECT * FROM tabelmhs", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

export default router;
