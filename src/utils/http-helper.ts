import { HttpResponse } from "../model/https-reponse-model";

export const ok = async (data: any): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data,
    };
};

export const noContent = async (): Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: "204 No Content",
    };
};

export const badRequest = async (): Promise<HttpResponse> => {
    return {
        statusCode: 400,
        body: "400 Bad Request",
    };
};

export const created = async (): Promise<HttpResponse> => {
    return {
        statusCode: 201,
        body: "Successful",
    };
};
