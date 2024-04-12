export default class GetPetByIdUseCaseInput {
    id: string
    type:string
    size:string
    gender: string
    page: number
    itemsPerPage: number

    constructor(data: Partial<GetPetByIdUseCaseInput>) {
        Object.assign(this, data);
      }
}
