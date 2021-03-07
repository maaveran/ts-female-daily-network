import { Router, Request, Response } from "express";

interface IRouter {
  routes(): void;
}

export abstract class BaseRoutes implements IRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  abstract routes(): void;
}