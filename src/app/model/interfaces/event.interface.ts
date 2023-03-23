export interface CityEvent {
  id?: number;
  name: string;
  date: Date;
  description: string;
  image?: string;
}

export interface CreateCityEvent extends Omit <CityEvent, 'id'>{}
