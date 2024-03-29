import {GovernmentBuildingsType, HouseType} from '../02/02_02';

export const getStreetsTitlesOfGovernmentsBuildings =
    (buildings: Array<GovernmentBuildingsType>) => {
        return buildings.map(b => b.address.street.title)
    }

export const getStreetsTitlesOfHouses =
    (houses: Array<HouseType>) => {
        return houses.map(b => b.address.street.title)
    }

export function createMessages(houses: Array<HouseType>) {
    let callback = (h: HouseType) => {
        return 'Hello guys from ${h.address.street.title}'
    }
    let newArray = houses.map(callback)
    return newArray
    // return houses.map(h => 'Hello guys from ${h.address.street.title}')
}