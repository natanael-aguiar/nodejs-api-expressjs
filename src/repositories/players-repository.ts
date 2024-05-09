import { PlayerModel } from "../model/player-model";
import { StatisticsModel } from "../model/statistics-model";

const database: PlayerModel[] = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Paris Saint-Germain",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65,
        },
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Manchester United",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            Overall: 92,
            Pace: 89,
            Shooting: 95,
            Passing: 82,
            Dribbling: 88,
            Defending: 40,
            Physical: 78,
        },
    },
    {
        id: 3,
        name: "Robert Lewandowski",
        club: "Bayern Munich",
        nationality: "Poland",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 78,
            Shooting: 93,
            Passing: 76,
            Dribbling: 85,
            Defending: 42,
            Physical: 84,
        },
    },
    {
        id: 4,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        position: "Midfielder",
        statistics: {
            Overall: 91,
            Pace: 76,
            Shooting: 86,
            Passing: 92,
            Dribbling: 87,
            Defending: 62,
            Physical: 78,
        },
    },
    {
        id: 5,
        name: "Neymar Jr.",
        club: "Paris Saint-Germain",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
            Overall: 91,
            Pace: 91,
            Shooting: 85,
            Passing: 86,
            Dribbling: 95,
            Defending: 35,
            Physical: 60,
        },
    },
    {
        id: 6,
        name: "Jan Oblak",
        club: "Atletico Madrid",
        nationality: "Slovenia",
        position: "Goalkeeper",
        statistics: {
            Overall: 91,
            Pace: 0,
            Shooting: 0,
            Passing: 0,
            Dribbling: 0,
            Defending: 0,
            Physical: 0,
        },
    },
    {
        id: 7,
        name: "Mohamed Salah",
        club: "Liverpool",
        nationality: "Egypt",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 94,
            Shooting: 86,
            Passing: 81,
            Dribbling: 89,
            Defending: 45,
            Physical: 75,
        },
    },
    {
        id: 8,
        name: "Virgil van Dijk",
        club: "Liverpool",
        nationality: "Netherlands",
        position: "Defender",
        statistics: {
            Overall: 90,
            Pace: 77,
            Shooting: 60,
            Passing: 71,
            Dribbling: 72,
            Defending: 92,
            Physical: 86,
        },
    },
    {
        id: 9,
        name: "Karim Benzema",
        club: "Real Madrid",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 90,
            Pace: 84,
            Shooting: 87,
            Passing: 82,
            Dribbling: 87,
            Defending: 40,
            Physical: 75,
        },
    },
    {
        id: 10,
        name: "Sadio Mané",
        club: "Liverpool",
        nationality: "Senegal",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 94,
            Shooting: 82,
            Passing: 79,
            Dribbling: 88,
            Defending: 46,
            Physical: 76,
        },
    },
    {
        id: 11,
        name: "Joshua Kimmich",
        club: "Bayern Munich",
        nationality: "Germany",
        position: "Midfielder",
        statistics: {
            Overall: 89,
            Pace: 75,
            Shooting: 79,
            Passing: 89,
            Dribbling: 84,
            Defending: 82,
            Physical: 83,
        },
    },
    {
        id: 12,
        name: "Kylian Mbappé",
        club: "Paris Saint-Germain",
        nationality: "France",
        position: "Forward",
        statistics: {
            Overall: 89,
            Pace: 96,
            Shooting: 85,
            Passing: 81,
            Dribbling: 92,
            Defending: 38,
            Physical: 76,
        },
    },
    {
        id: 13,
        name: "Raheem Sterling",
        club: "Manchester City",
        nationality: "England",
        position: "Forward",
        statistics: {
            Overall: 88,
            Pace: 93,
            Shooting: 82,
            Passing: 79,
            Dribbling: 87,
            Defending: 44,
            Physical: 70,
        },
    },
    {
        id: 14,
        name: "Trent Alexander-Arnold",
        club: "Liverpool",
        nationality: "England",
        position: "Defender",
        statistics: {
            Overall: 88,
            Pace: 88,
            Shooting: 70,
            Passing: 87,
            Dribbling: 82,
            Defending: 82,
            Physical: 74,
        },
    },
    {
        id: 15,
        name: "Ederson",
        club: "Manchester City",
        nationality: "Brazil",
        position: "Goalkeeper",
        statistics: {
            Overall: 88,
            Pace: 0,
            Shooting: 0,
            Passing: 0,
            Dribbling: 0,
            Defending: 0,
            Physical: 0,
        },
    },
    {
        id: 16,
        name: "Luis Suárez",
        club: "Atlético Madrid",
        nationality: "Uruguay",
        position: "Forward",
        statistics: {
            Overall: 88,
            Pace: 76,
            Shooting: 88,
            Passing: 79,
            Dribbling: 86,
            Defending: 43,
            Physical: 79,
        },
    },
    {
        id: 17,
        name: "Bruno Fernandes",
        club: "Manchester United",
        nationality: "Portugal",
        position: "Midfielder",
        statistics: {
            Overall: 88,
            Pace: 77,
            Shooting: 87,
            Passing: 87,
            Dribbling: 86,
            Defending: 65,
            Physical: 76,
        },
    },
    {
        id: 18,
        name: "Marc-André ter Stegen",
        club: "Barcelona",
        nationality: "Germany",
        position: "Goalkeeper",
        statistics: {
            Overall: 88,
            Pace: 0,
            Shooting: 0,
            Passing: 0,
            Dribbling: 0,
            Defending: 0,
            Physical: 0,
        },
    },
    {
        id: 19,
        name: "Erling Haaland",
        club: "Borussia Dortmund",
        nationality: "Norway",
        position: "Forward",
        statistics: {
            Overall: 88,
            Pace: 84,
            Shooting: 90,
            Passing: 74,
            Dribbling: 85,
            Defending: 40,
            Physical: 86,
        },
    },
    {
        id: 20,
        name: "Romelu Lukaku",
        club: "Chelsea",
        nationality: "Belgium",
        position: "Forward",
        statistics: {
            Overall: 88,
            Pace: 79,
            Shooting: 86,
            Passing: 76,
            Dribbling: 80,
            Defending: 45,
            Physical: 89,
        },
    },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (
    id: number
): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player);
};

export const deleteOnePlayer = async (id: number): Promise<boolean> => {
    const index = database.findIndex((player) => player.id === id);
    if (index !== -1) {
        database.splice(index, 1);
        return true;
    }
    return false;
};

export const findAndModifyPlayer = async (
    id: number,
    statistics: StatisticsModel
): Promise<false | PlayerModel> => {
    const index = database.findIndex((player) => player.id === id);
    if (index !== -1) {
        database[index].statistics = statistics;
        return database[index];
    }
    return false;
};
