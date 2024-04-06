import { Body, Controller, Get, Inject, Patch, Post, Put  } from '@nestjs/common';
import GetShelterDetailsUseCaseOutput from './usecases/dtos/get.shelter.details.usecase.output';
import ShelterTokens from './shelter.tokens';
import { IuseCase } from 'src/domain/iusecase.interface';
import UpdateShelterControllerInput from './dtos/update.shelter.controller.input';
import UpdateShelterDetailsUseCaseOutput from './dtos/update.shelter.details.usecase.output';

@Controller('shelter')
export class ShelterController {
    @Inject(ShelterTokens.getShelterDetailsUseCase)
    private readonly getShelterDetailsUseCase: IuseCase<null,
    GetShelterDetailsUseCaseOutput>

    @Inject(ShelterTokens.getShelterDetailsUseCase)
    private readonly updateShelterDetailsUseCase: IuseCase<null,
    UpdateShelterDetailsUseCaseOutput>
    UpdateShelterDetailsControllerinput: any;

    @Get()
    async getShelterDetails(): Promise<GetShelterDetailsUseCaseOutput> {
        return await this.getShelterDetailsUseCase.run(null)
    }
    
    @Put()
    async updateShelterDetails( @Body() input: UpdateShelterControllerInput) {
        const useCaseInput= new this.UpdateShelterDetailsControllerinput({ ...input});
        return await this.updateShelterDetailsUseCase.run(useCaseInput)
    }
     
}

        
    



