import {CityType, GovernmentBuildings} from "../02/02_02";

export function demoLishHousesOnTheStreet(city: CityType, street: string) {
city.houses = city.houses.filter( h => h.address.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildings>, numder: number) => {
 return buildings.filter(b => b.staffCount > numder)
}