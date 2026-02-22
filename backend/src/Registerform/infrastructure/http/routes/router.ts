import { Router } from "express";
import { RegisterUserController } from "../controllers/registerusercontroller.js";
import { LoginController } from "../controllers/loginuserscontroller.js";
import { editUserController } from "../controllers/edituserscontroller.js";


const registerformrouter = Router();

const registerController = new RegisterUserController();
const loginController = new LoginController();
const editcontroller = new editUserController()




registerformrouter.post(
  "/Createusers",
  registerController.handle
);

registerformrouter.post(
  "/Loginusers",
  loginController.handle
);

registerformrouter.put('/:id', editcontroller.handle)

export { registerformrouter };
