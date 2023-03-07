import {CityType} from "../02/02_02";
import {demoLishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04_2";

let city: CityType;

beforeEach(() => {

    city = {
        title: "New York",
        houses: [
            {
               id: 1, buildedAT: 2012, repaired: false,
                address: {
                    number: 100,
                    street: {title: "White street"}
                }
            },
            {
                id: 2,  buildedAT: 2008, repaired: false,
                address: {
                    number: 100,
                    street: {title: "Happy street"}
                }
            },
            {
                id: 3,  buildedAT: 2020, repaired: false,
                address: {
                    number: 101,
                    street: {title: "Happy street"}
                }
            },
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                address: { street: { title: "Central Str"
                    }, number: 12},
                budget: 200000, staffCount: 200
            },
            {
                type: "FIRE-STATION",
                address: { street: { title: "South Str" }, number: 12 },
                budget: 500000, staffCount: 1000,
            }
        ],
        citizensNumber: 1000000
    }
})

test("Houses should be destroyed", () => {
    demoLishHousesOnTheStreet(city, "Happy street");

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);
})

test("buildings with correct staff count", () => {
    let buildings =
        getBuildingsWithStaffCountGreaterThen(
            city.governmentBuildings,
            500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("FIRE-STATION");
})