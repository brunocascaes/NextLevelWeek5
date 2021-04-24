import express from "express";
import "./database";
import { routes } from "./routes"

const app = express();

app.use(express.json());

app.use(routes);

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica
 */

// app.get("/", (request, response) => {
//     // return response.send("Olá NLW 05");
//     return response.json({
//         message: "Olá NLW 05!"
//     });
// })

// app.post("/users", (request, response) => {
//     return response.json({
//         message: "Usuário salvo com sucesso!"
//     })
// })

app.listen(3333, () => console.log("server is running on port 3333"));