import mongoose from 'mongoose';

async function connectMongoDB() {
	console.log(process.env.MONGO_URI);
	await mongoose.connect(process.env.MONGO_URI);
}

export default connectMongoDB;
