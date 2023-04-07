import { Router } from "express"

const router = Router();
import { mostrarTodos, buscaPorId, addUser, create, editUser } from "../controlles/user.control.js"
//require("../../modles/usuario")
//const Usuario = mongoose.model("usuarios")


router.get("/todos", mostrarTodos)
router.post("/busca", buscaPorId)
router.get("/add", addUser)
router.post("/criar", create),
router.get("/editar", editUser)

export default router

