export class Book {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public genre: string,
        public yearPublished: number,
        public publisher: string,
        public rating: number
    ){}
}