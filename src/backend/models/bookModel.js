import {Schema, model, models} from 'mongoose';

const booksSchema = new Schema({
	title: String,
	author: String,
	rating: Number,
	readingNotes: String,
});

const Book = models.Book || model('Book', booksSchema, 'books');

export default Book;
