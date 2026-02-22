import { Router } from 'express';
import { authMiddleware } from '../../../../shared/middleware/authmiddleware.js';
import { CreateFormClientController } from '../controllers/create-formclient-controller.js'; 
import { DashboardStatsController } from '../controllers/dashboardStatsController.js';
import { ListFormClientController } from '../controllers/ListFormClientController.js';
import { DeleteClientController } from '../controllers/deleteclient-controller.js';
import { editclientController } from '../controllers/editclients-controller.js';

const router = Router();

const controller = new CreateFormClientController();
const Statscontroller = new DashboardStatsController()
const Listcontroller = new ListFormClientController()
const deletecontroller = new DeleteClientController()
const ClientController = new editclientController()


router.post('/clientcreate', authMiddleware, (req, res) =>
  controller.handle(req, res)
);

router.get('/dashboardstatus', authMiddleware, (req, res) => 
Statscontroller.handle(req, res)
);

router.get('/list-clients', authMiddleware, (req, res) => Listcontroller.handle(req,res) )

router.delete('/delete/:id', authMiddleware, (req, res) => deletecontroller.handle(req, res));

router.put('/:id', ClientController.handle)


export { router as formclientRouter };
