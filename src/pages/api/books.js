import dbConnect from '../../backend/lib/dbConnect';
import Books from '../../backend/models/bookModel';

export default async function Handler(request, response) {
	try {
		console.log('api/books called');
		await dbConnect();
		console.log('db connected');
		switch (request.method) {
			case 'GET': {
				const books = await Books.find();
				response.status(200).json({success: true, data: books});
				break;
			}
			case 'POST': {
				const book = await Books.create(request.body);
				response.status(201).json(book);
				break;
			}
		}
	} catch (error) {
		console.log(error);
		response.status(500).json({error: 'Internal Server Error'});
	}
}
