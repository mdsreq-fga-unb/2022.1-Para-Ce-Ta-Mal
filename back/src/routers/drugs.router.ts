import {Router} from 'express'
import drugsController from '../controllers/drugs.controller';

const drugRouter = Router();

drugRouter.get('/drugs',drugsController.getDrugs)

drugRouter.post('/drugs',drugsController.createDrug)

drugRouter.delete('/drugs/:id',drugsController.deleteDrug)

export default drugRouter;