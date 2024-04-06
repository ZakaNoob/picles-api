export default class UpdateShelterDetailsUseCaseOutput {
    name: string;
    whatsapp: string;
    email:string;
    phone: string;
    creadtedAt: Date;
    updatedAt: Date;

    constructor(data: Partial<UpdateShelterDetailsUseCaseOutput>){
        Object.assign(this,data);
    }
}