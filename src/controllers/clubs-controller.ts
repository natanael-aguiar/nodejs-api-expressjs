import { Request, Response } from "express";
import { getClubService } from "../services/clubs-service";

export const getClubs = async (request: Request, response: Response) => {
    const responseData = await getClubService();
    response.status(responseData.statusCode).json(responseData.body);
};
