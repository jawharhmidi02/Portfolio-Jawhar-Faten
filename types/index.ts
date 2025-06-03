export interface TeamMember {
  name: string;
  role: string;
  description: string;
  skills: string[];
  email: string;
  phone: string;
  portfolio: string;
  github: string;
  linkedin: string;
  avatar: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}
