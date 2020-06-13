import { Router, Request, Response } from "express";

const router = Router();

router.get("/mensajes", (req: Request, res: Response) => {
  res.json({
    ok: true,
    mensaje: "todo está bien",
  });
});

router.post("/mensajes", (req: Request, res:Response) => {
  const body = req.body.body;
  const de = req.body.de;
  
  res.json({
    ok: true,
    mensaje: 'POST Listo',
    body,
    de
  })
})

router.post("/mensajes/:id", (req: Request, res:Response) => {
  const body = req.body.body;
  const de = req.body.de;
  const id = req.params.id;

  res.json({
    ok: true,
    mensaje: 'POST Listo',
    body,
    de,
    id
  })
})

export default router