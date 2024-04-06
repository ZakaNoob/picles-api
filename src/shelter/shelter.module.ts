import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import ShelterTokens from './shelter.tokens';
import GetShelterDetailsUseCase from './usecases/get.shelter.details.usecase';
import { Mongoose } from 'mongoose';
import { Shelter, ShelterSchema } from './schemas/shelter.schemas';
import { MongooseModule } from '@nestjs/mongoose';
import { ShelterRepository } from './shelter.repository';
import UpdateShelterDetailsUseCase from './usecases/update.shelter.datails.usecase';

@Module({
  controllers: [ShelterController],

  imports: [
    MongooseModule.forFeature([{name: Shelter.name, schema: ShelterSchema}])
  ],
  providers: [
    {
      provide: ShelterTokens.getShelterDetailsUseCase,
      useClass: GetShelterDetailsUseCase
    },
    {
      provide: ShelterTokens.shelterRepository,
      useClass: ShelterRepository,
    },
    {
      provide: ShelterTokens.updateShelterDetailsUseCase,
      useClass: UpdateShelterDetailsUseCase,
    }
    
  ]
})
export class ShelterModule {}
