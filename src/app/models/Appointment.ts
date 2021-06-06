export class Appointment {
    constructor(
        public id?: number,
        public user_id?: number,
        public professional_id?: number,
        public appointment_at?: string,
        public procedures?: number[]
    ) { }
}
