export interface Procedure {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  duration: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  city: string;
}

export interface Booking {
  id: string;
  name: string;
  birthDate: string;
  phone: string;
  email: string;
  city: string;
  procedureId: string;
  date: string;
  time: string;
  observations?: string;
  createdAt: string;
}
