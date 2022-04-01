export class CreateProfileDto {
    id: number
    photo_url: string
    first_name: string
    last_name: string
    email: string
    description: string
    key_words: string[]
    salary: string
    type: string

    constructor(photo_url: string, first_name: string, last_name: string, email: string, description: string, key_words: string[], salary: string, type: string) {
        this.photo_url = photo_url;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.description = description;
        this.key_words = key_words;
        this.salary = salary;
        this.type = type;
    }
}
