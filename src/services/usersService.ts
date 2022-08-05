import { usersRepository } from "../repositories/usersRepository.js"
import { checkIfSameUser } from "../utils/checkIfSameUser.js"

export const usersService = {
    async updateProfilePicture(
        givenId: number,
        userId: number,
        pictureURL: string
    ) {
        await checkIfSameUser(givenId, userId)
        await usersRepository.updateProfilePicture(userId, pictureURL)
    },

    async getUsers(searchName: string, page: number) {
        const users = await usersRepository.getUsers(searchName, page)
        return users
    },
}
