import { client } from "../config/database.js"

export const qualificationsRepository = {
    async getCategories() {
        const categories = await client.categories.findMany({
            select: {
                id: true,
                name: true,
                subcategories: { select: { id: true, name: true } },
            },
        })

        return categories
    },

    async getLanguages() {
        const languages = await client.languages.findMany({
            select: { id: true, name: true },
        })
        return languages
    },

    async getWarnings() {
        const warnings = await client.warnings.findMany({
            select: { id: true, name: true },
        })

        return warnings
    },

    async getGenres() {
        const genres = await client.genres.findMany({
            select: { id: true, name: true },
        })

        return genres
    },
}
