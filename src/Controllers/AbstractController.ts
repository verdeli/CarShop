import express, { Router } from 'express';

export default abstract class AbstractController<T> {
  router: express.Router;
  service: T;

  constructor(service: T) {
    this.router = Router();
    this.service = service;
  }
  
  abstract initRoutes(): Router;
}