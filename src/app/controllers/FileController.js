import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await File.create({ name, path });

    const { _id, url } = file;

    return res.status(201).json({ _id, name, path, url });
  }
}

export default new FileController();
