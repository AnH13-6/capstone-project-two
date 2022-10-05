import dbConnect from '../../backend/lib/dbConnect';
import Book from '../../backend/models/bookModel';
import Books from '../../backend/models/bookModel';

async function Handler(request, response) {
	try {
		console.log('api/books called');
		console.log('db connected');
		switch (request.method) {
			case 'GET': {
				const books = await Books.find();
				response.status(200).json(books);
				break;
			}
			case 'POST': {
				const book = await Books.create(request.body);
				console.log('created book', book);
				response.status(201).json(book);
				break;
			}

			// I used a different template for the DELETE methods, that's why they look different
			// than GET and POST

			case 'DELETE':
				try {
					const deletedBook = await Book.findByIdAndDelete(request.body._id);
					if (!deletedBook) {
						return response.status(500).json({success: false});
					}
					response.status(201).json({success: true, data: {}});
				} catch (error) {
					response.status(401).json({success: false});
				}
				break;
		}
	} catch (error) {
		console.log(error);
		response.status(500).json({error: 'Internal Server Error'});
	}
}
export default dbConnect(Handler);
