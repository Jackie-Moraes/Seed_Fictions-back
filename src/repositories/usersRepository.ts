import { client } from "../config/database.js"

export const usersRepository = {
    async updateProfilePicture(userId: number, pictureURL: string) {
        await client.users.update({
            where: { id: userId },
            data: { pictureURL },
        })
    },
}
