export interface Event{
    name: String,
    description: String,
    category: String,
    location: String,
    startDate: Date,
    endDate: Date,
    startTime: Date,
    endTime: Date,
    allowRegistration: Boolean,
    eventImage: String,
    adultTicket: Number,
    childTicket: Number
}
