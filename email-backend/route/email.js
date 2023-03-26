import express from 'express';
import { getASubscribedUser, getsubscribeUser, subscribeUser, unsubscribeUser } from '../controller/email.js';
const emailRoute = express.Router();


emailRoute.post('/email/subscribe', subscribeUser);
emailRoute.get('/emails', getsubscribeUser);
emailRoute.get('/email/:id', getASubscribedUser);
emailRoute.delete('/email/unsubscribe/:id', unsubscribeUser);

export default emailRoute;
