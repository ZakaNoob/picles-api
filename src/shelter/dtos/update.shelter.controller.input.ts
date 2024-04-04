import {  IsString, Length, IsEmail, IsNumberString, IsNotEmpty} from "class-validator"

export default class UpdateShelterControllerInput {
    @IsString()
    @IsNotEmpty()
    name: string
    @IsNotEmpty()
    @IsString()
    @Length(10,11)
    whatsapp: string
    @IsNotEmpty()
    @IsString()
    @IsNumberString()
    phone: string
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string

}