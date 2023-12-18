import { CityEvent, CityEventDto } from "../model/interfaces/event.interface";

export abstract class CityEventConverter {

  public static dto2CityEvent(dto: CityEventDto): CityEvent {
    return {
      id: dto.id,
      name: dto.name,
      date: new Date(dto.dateString),
      description: dto.description,
      imageUrl: dto.image,
      location: dto.location
    }
  }

  public static convertDtoList(list: CityEventDto[]): CityEvent[] {
    return list.map(dto => this.dto2CityEvent(dto))
  }

  public static cityEvent2Dto(event: CityEvent): CityEventDto {
    return {
      id: event.id,
      name: event.name,
      dateString: event.date.toString(),
      description: event.description,
      image: event.imageUrl,
      location: event.location,
      tag: event.tag
    }
  }
}
