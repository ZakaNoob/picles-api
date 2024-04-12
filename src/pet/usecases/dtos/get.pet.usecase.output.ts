import PetResponse from "./pet.reponse";

export default class GetPetByIdUseCaseOutput{
    currentPage: number;
    totalPage: number;
    items: PetResponse[];

    constructor(data: Partial<GetPetByIdUseCaseOutput>) {
        Object.assign(this, data)
    }
}