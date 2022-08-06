import { qualificationsRepository } from "../repositories/qualificationsRepository.js"

export const qualificationsService = {
    async getQualifications() {
        const categories = await qualificationsRepository.getCategories()
        const languages = await qualificationsRepository.getLanguages()
        const warnings = await qualificationsRepository.getWarnings()
        const genres = await qualificationsRepository.getGenres()

        return { categories, languages, warnings, genres }
    },
}
