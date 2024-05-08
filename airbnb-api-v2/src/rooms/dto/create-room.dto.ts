import { IsString, MinLength, MaxLength, IsNumber, IsNotEmpty } from 'class-validator'
export class CreateRoomDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(50)
  @MaxLength(100)
  title: string

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  place: string

  @IsNotEmpty()
  position: {
    lat: number
    lng: number
  }

  @IsNotEmpty()
  @IsNumber()
  price: number

  @IsNotEmpty()
  @IsString({ each: true })
  images: string[]

  @IsNotEmpty()
  @IsString()
  type: string

  @IsNotEmpty()
  limit: number

  @IsNotEmpty()
  @IsString()
  country: string
}
