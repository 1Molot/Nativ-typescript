export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type LaptopType = {
    title: string
}
export type UserWitchLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserType & {
    books: Array<string>
}
export type CompanyType = { id: number, title: string }

export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair / power
    return copy
}

export function moveUser(u: UserWitchLaptopType, city: string) {
    return {
        ...u,
        address: {
            ...u.address,
            city: city
        }
    }
}

export function moveUserToOtherHouse(u: UserWitchLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house
        }
    }
}

export function upgradeUserLaptop(u: UserWitchLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: laptop
        }
    }
}

export function addNewBooksToUser(u: UserWitchLaptopType & UserWithBooksType, newBook: string) {
    return {
        ...u,
        books: [...u.books, newBook]
    }
}

export const updateBook = (u: UserWitchLaptopType & UserWithBooksType, oldBook: string, newBook: string) => ({
    ...u,
    books: u.books.map(b => b === oldBook ? newBook : b)
})

export const removeBook = (u: UserWitchLaptopType & UserWithBooksType, bookForDelete: string) => ({
    ...u,
    books: u.books.filter(b => b !== bookForDelete)
})

export const updateCompanyTitle = (u: WithCompaniesType, companyId: number, newTitle: string) => {
    const copy: WithCompaniesType = {
        ...u,
        companies: u.companies.map(c => c.id === companyId ? {...c, title: newTitle} : c)
    }
    return copy;
}

export const updateCompanyTitle2 = (companies: { [key: string]: Array<CompanyType> }, userName: string, companyId: number, newTitle: string) => {

    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)

    return companyCopy;
}