import mongoose from 'mongoose';

async function connectMongoDB() {
	await mongoose.connect(process.env.MONGO_URI);
}

export default connectMongoDB;
