import express from "express";
import { Router } from "express";
const router = express.Router();
router.use(express.json());
import {
  addClient,
  displayAllClients,
  displayClientById,
} from "../controllers/clients.controller";

router.post("/add-client", addClient);
router.get("/show-all-clients", displayAllClients);
router.get("/show-client-by-id/:id", displayClientById);

export default router;
