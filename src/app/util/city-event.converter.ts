import { CityEvent, CityEventDto } from "../model/interfaces/event.interface";

export abstract class CityEventConverter {

  public static dto2CityEvent(dto: CityEventDto): CityEvent {
    return {
      id: dto.id,
      name: dto.name,
      date: new Date(dto.date),
      description: dto.description,
      image: dto.image,
      location: dto.location,
      category: dto.category
    }
  }

  public static convertDtoList(list: CityEventDto[]): CityEvent[] {
    return list.map(dto => this.dto2CityEvent(dto))
  }

  public static cityEvent2Dto(event: CityEvent): CityEventDto {
    return {
      id: event.id,
      name: event.name,
      date: event.date.toISOString(),
      description: event.description,
      image: event.image,
      location: event.location,
      category: event.category
    }
  }
}
