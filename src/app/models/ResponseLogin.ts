export class ResponseLogin {
    constructor(
        public access_token?: string,
        public token_type?: string,
        public expires_in?: string,
        public id?: string
    ) { }
}
