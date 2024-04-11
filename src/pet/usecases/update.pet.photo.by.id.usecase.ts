import { Injectable } from "@nestjs/common";
import { IUseCase } from "src/domain/iusecase.interface";
import UpdatePetPhotoByIdUseCaseOutput from "./dtos/update.pet.photo.usecase.output";
import UpdatePetPhotoByIdUseCaseInput from "./dtos/update.pet.photo.usecase.input";

@Injectable()
export default class UpdatePetPhotoByIdUseCase implements
IUseCase<UpdatePetPhotoByIdUseCaseInput, UpdatePetPhotoByIdUseCaseOutput> {

    run(input: UpdatePetPhotoByIdUseCaseInput):
    Promise<UpdatePetPhotoByIdUseCaseOutput>{
        throw new Error("Method not implements")
    }
}