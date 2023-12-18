export interface CityEvent {
  id?: number;
  name: string;
  date: Date;
  description: string;
  imageUrl?: string;
  location: string;
  tag?: string;
}

export interface CityEventDto {
  id?: number;
  name: string;
  dateString: string;
  description: string;
  image?: string;
  location: string;
  tag?: string;
}

