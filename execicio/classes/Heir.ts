import { HouseHeir } from "../interfaces/HouseHeir"

export class Heir implements HouseHeir {
    constructor(public name: string, public age: number, public position: number) {
        this.name = name
        this.age = age
        this.position = position
    }
}