import { client } from "../src/config/database.js"

async function main() {
    const exists = await client.languages.findFirst({})
    if (exists) return ""

    await client.languages.createMany({
        data: [{ name: "Inglês" }, { name: "Português" }],
    })

    await client.categories.createMany({
        data: [
            { name: "Animes & Mangas" },
            { name: "Cartoons" },
            { name: "Celebridades" },
            { name: "Filmes" },
            { name: "Games" },
            { name: "Histórias Originais" },
            { name: "Livros" },
            { name: "Mitologias & Lendas" },
            { name: "Quadrinhos" },
            { name: "RPG" },
            { name: "Séries, Novelas e TV" },
        ],
    })

    await client.subCategories.createMany({
        data: [
            { name: "Dorohedoro", categoryId: 1 },
            { name: "Spy X Family", categoryId: 1 },
            { name: "Love, Death and Robots", categoryId: 2 },
            { name: "Steven Universe", categoryId: 2 },
            { name: "Alan Ferreira (EDGE)", categoryId: 3 },
            { name: "Felipe Z. (Felps)", categoryId: 3 },
            { name: "Batman", categoryId: 4 },
            { name: "Jogos Vorazes (The Hunger Games)", categoryId: 4 },
            { name: "League of Legends", categoryId: 5 },
            { name: "The Legend of Zelda", categoryId: 5 },
            { name: "Histórias Originais", categoryId: 6 },
            { name: "Atlantes", categoryId: 7 },
            { name: "Jogos Vorazes (The Hunger Games)", categoryId: 7 },
            { name: "Mitologia Grega", categoryId: 8 },
            { name: "Mitologia Japonesa", categoryId: 8 },
            { name: "Batman", categoryId: 9 },
            { name: "Deadpool", categoryId: 9 },
            { name: "Dungeons & Dragons", categoryId: 10 },
            { name: "Monster Hearts", categoryId: 10 },
            { name: "A Família Addams", categoryId: 11 },
            { name: "The 100", categoryId: 11 },
        ],
    })

    await client.warnings.createMany({
        data: [
            { name: "Álcool" },
            { name: "Drogas" },
            { name: "Linguagem Imprópria" },
            { name: "Spoilers" },
            { name: "Violência" },
        ],
    })

    await client.genres.createMany({
        data: [
            { name: "Ação" },
            { name: "Aventura" },
            { name: "Comédia" },
            { name: "Drama / Tragédia" },
            { name: "Epopeia (Épico)" },
            { name: "Esporte" },
            { name: "Família" },
            { name: "Fantasia" },
            { name: "Ficção" },
            { name: "Ficção Adolescente" },
            { name: "Ficção Científica / Sci-fi" },
            { name: "Gay" },
            { name: "Lésbica" },
            { name: "LGBTQIA+" },
            { name: "Luta" },
            { name: "Magia / Misticismo" },
            { name: "Mistério" },
            { name: "Policial" },
            { name: "Romântico" },
            { name: "Sobrenatural" },
            { name: "Suspense" },
            { name: "Terror e Horror" },
            { name: "Tragicomédia" },
            { name: "Universo Alternativo" },
        ],
    })
}

main()
    .catch((e) => {
        console.log(e)
        process.exit(1)
    })
    .finally(async () => {
        await client.$disconnect()
    })
