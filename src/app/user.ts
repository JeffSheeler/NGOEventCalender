export interface User {
    firstName: String,
    lastName: String,
    email: {type: String, required: true},
    role: {type: String},
    password: {type: String, required: true} 
}
