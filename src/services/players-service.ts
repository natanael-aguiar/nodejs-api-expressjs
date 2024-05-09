import { HttpResponse } from "../model/https-reponse-model";
import { PlayerModel } from "../model/player-model";
import {
    deleteOnePlayer,
    findAllPlayers,
    findAndModifyPlayer,
    findPlayerById,
    insertPlayer,
} from "../repositories/players-repository";
import { badRequest, created, noContent, ok } from "../utils/http-helper";
import { StatisticsModel } from "../model/statistics-model";

export const getPlayerService = async () => {
    const data = await findAllPlayers();
    let response = null;

    if (data) {
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response;
};

export const getPlayerByIdService = async (
    id: number
): Promise<HttpResponse> => {
    const data = await findPlayerById(id);
    let response = null;

    if (data) {
        response = await ok(data);
    } else {
        response = await noContent();
    }

    return response;
};

export const createPlayerService = async (player: PlayerModel) => {
    let response = null;

    if (Object.keys(player).length !== 0) {
        await insertPlayer(player);
        response = await created();
    } else {
        response = await badRequest();
    }
    return response;
};

export const deletePlayerService = async (
    id: number
): Promise<HttpResponse> => {
    let response = null;

    const isDeleted = await deleteOnePlayer(id);
    if (isDeleted) {
        response = await ok({ message: "Deleted" });
    } else {
        response = await badRequest();
    }

    return response;
};

export const updatePlayerService = async (
    id: number,
    statistics: StatisticsModel
): Promise<HttpResponse> => {
    let response = null;

    const data = await findAndModifyPlayer(id, statistics);
    if (data) {
        response = await ok(data);
    } else {
        response = await badRequest();
    }

    return response;
};
