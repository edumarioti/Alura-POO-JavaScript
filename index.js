import User from "./User.js"
import Admin from "./Admin.js"
import Docente from "./Docente.js"

const novoUser = new User('Mariana', 'm@m.com', '2021-01-01')
console.log(novoUser.exibirInfos())

const novoAdmin = new Admin('Eduardo', 'e@e.com', '1999-10-07')
console.log(novoAdmin.exibirInfos())

const novoDocente = new Docente()
