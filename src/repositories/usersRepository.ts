import { client } from "../config/database.js"

export const usersRepository = {
    async updateProfilePicture(userId: number, pictureURL: string) {
        await client.users.update({
            where: { id: userId },
            data: { pictureURL },
        })
    },

    async getUsers(searchName: string, page: number) {
        const skipAmount = (page - 1) * 10

        const users = await client.users.findMany({
            where: { name: { contains: searchName } },
            orderBy: {
                _relevance: {
                    fields: ["name"],
                    search: searchName,
                    sort: "asc",
                },
            },
            skip: skipAmount,
            take: 10,
        })
        return users
    },
}
