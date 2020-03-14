<<<<<<< HEAD
import '../bootstrap';

=======
>>>>>>> 2ecbef07ecb53fdbe43c3e62a7af3bc0539d34e8
import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: true,
    });
  }
}

export default new Database();
