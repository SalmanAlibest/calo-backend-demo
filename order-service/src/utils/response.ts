import { Response } from "express";

export const successResponse = (res: Response, data: any, status = 200) => {
  return res.status(status).json({ success: true, data });
};

export const errorResponse = (res: Response, error: any, status = 500) => {
  return res.status(status).json({ success: false, error: error.message || error });
};