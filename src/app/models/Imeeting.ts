interface Attendee {
  userId: string;
  email: string;
}

interface ITime {
  hours: number;
  minutes: number;
}

interface Meeting {
  _id?: string;
  name: string;
  description: string;
  date: string; // ISO date string
  startTime: ITime;
  endTime: ITime;
  attendees: Attendee[];
}

export type { Attendee, ITime };
export default Meeting; 
