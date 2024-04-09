import { Inject, Injectable } from "@nestjs/common";
import { IuseCase } from "src/domain/iusecase.interface";
import UpdateShelterDetailsUseCaseInput from "../dtos/update.shelter.details.usecase.input";
import UpdateShelterDetailsUseCaseOutput from "../dtos/update.shelter.details.usecase.output";
import ShelterTokens from "../shelter.tokens";
import { ShelterRepository } from "../shelter.repository";
import IShelterRepository from "../interfaces/shelter.repository.inteface";




@Injectable()
export default class UpdateShelterDetailsUseCase implements
IuseCase<UpdateShelterDetailsUseCaseInput, UpdateShelterDetailsUseCaseOutput>

{
constructor(
    @Inject(ShelterTokens.shelterRepository)
    private readonly ShelterRepository: IShelterRepository

){}


   
  async  run(input: UpdateShelterDetailsUseCaseInput ):
    Promise<UpdateShelterDetailsUseCaseOutput> {
        await this.ShelterRepository.update(input)

        const shelter = await this.ShelterRepository.get()

        return new UpdateShelterDetailsUseCaseOutput({
            name: shelter.name,
            phone: shelter.phone,
            whatsapp: shelter.whatsApp,
            email: shelter.email,
            updatedAt: shelter.updatedAt,
            creadtedAt: shelter.createdAt
        })
        
    }
}
