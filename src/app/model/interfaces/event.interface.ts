export interface CityEvent {
  id?: number;
  name: string;
  date: Date;
  description: string;
  image?: string;
  location: string;
  category?: string;
}

export interface CityEventDto {
  id?: number;
  name: string;
  date: string;
  description: string;
  image?: string;
  location: string;
  category?: string;
}

