import { Procedure } from "./Procedure";
import { Professional } from "./Professional";
import { User } from "./User";

export class AppointmentFull {
    constructor(
        public id?: number,
        public user?: User,
        public professional?: Professional,
        public appointment_at?: string,
        public procedures?: Procedure[]
    ) { }
}
