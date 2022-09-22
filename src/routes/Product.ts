import { Router } from "express";
import { getUsers } from "modules/User/model";
const app = Router();

app.get('/', async (req, res) => {
    const user = await getUsers();
    res.send(user);
});

export default app;