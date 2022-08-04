export async function checkIfSameUser(givenId: number, userId: number) {
    if (givenId !== userId) {
        throw { type: "unauthorized", message: "Operation could not proceed." }
    }
}
