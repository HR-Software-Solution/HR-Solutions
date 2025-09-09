import express from 'express';
import { candidateController } from '../controllers/candidateControllers.js';

const router = express.Router();

router.get('/', candidateController.getAllCandidates);
router.post('/', candidateController.createCandidate);

export default router;