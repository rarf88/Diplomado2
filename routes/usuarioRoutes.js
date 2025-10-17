import express from 'express';
import Usuario from '../models/Usuario.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});

router.post('/', async (req, res) => {
  const nuevoUsuario = new Usuario(req.body);
  await nuevoUsuario.save();
  res.json({ mensaje: 'Usuario creado correctamente', usuario: nuevoUsuario });
});

export default router;
