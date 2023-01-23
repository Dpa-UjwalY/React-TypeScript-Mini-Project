import express, {Request, Response, Express} from "express";

const app: Express = express();
const PORT:number = 3000;

app.get("/", (req: Request, res: Response) =>{
    return res.send("!!Hellnv0oo!!!");
})

app.listen(PORT, ()=>{
console.log("Listening port no : ", PORT);
})

