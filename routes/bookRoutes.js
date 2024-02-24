import express from 'express';
import bookController from "../controllers/bookControllers.js";



const router = express.Router();

router.post('/', bookController.create);
router.get('/', bookController.getAll);
router.get('/:id', bookController.getById);
router.put('/:id', bookController.update);
router.delete('/:id', bookController.delete);

export default router;
