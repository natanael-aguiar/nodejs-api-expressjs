import { Router } from "express";
import {
    deletePlayer,
    getPlayer,
    getPlayerById,
    postPlayer,
    updatePlayer,
} from "../controllers/players-controller";
import { getClubs } from "../controllers/clubs-controller";

const router = Router();

// Get
router.get("/players", getPlayer);
router.get("/players/:id", getPlayerById);

// Post
router.post("/players", postPlayer);

// Delete
router.delete("/players/:id", deletePlayer);

// Patch
router.patch("/players/:id", updatePlayer);

router.get("/clubs", getClubs);

export default router;
