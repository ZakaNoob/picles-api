import { Injectable } from "@nestjs/common";
import { IuseCase } from "src/domain/iusecase.interface";
import UpdateShelterDetailsUseCaseInput from "../dtos/update.shelter.details.usecase.input";
import UpdateShelterDetailsUseCaseOutput from "../dtos/update.shelter.details.usecase.output";




@Injectable()
export default class UpdateShelterDetailsUseCase implements
IuseCase<UpdateShelterDetailsUseCaseInput, UpdateShelterDetailsUseCaseOutput>
{
    run(input: UpdateShelterDetailsUseCaseInput ):
    Promise<UpdateShelterDetailsUseCaseOutput> {
        throw new Error("Method not implements.");
        
    }
}