import mongoose from 'mongoose';

export default mongoose.connect(process.env.DB_HOST, {
  dbName: process.env.DB_NAME,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
