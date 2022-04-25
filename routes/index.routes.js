import { Router } from "express";
const router = Router();

router.get("/", (req, res) => res.send("RES-API-CRUD / Javascript /NodeJS/Cloudinary/mongoDB/express"));

router.get("/Ejercicio de aprendizaje", (req, res) => res.send("pong"));

export default router;
