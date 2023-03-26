export interface CityEvent {
  id?: number;
  name: string;
  date: Date;
  dateString: string;
  description: string;
  location: string;
  image?: string;
}

export interface CreateCityEvent extends Omit <CityEvent, 'id'>{}
