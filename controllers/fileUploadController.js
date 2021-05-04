const singleFileUpload = async (req, res, next) => {

        // res.status(201).send("File Uploaded Successfully");

  try {
    // const file = req.file;
    console.log(req.file.size, "FILE");

    const file = {
        filename: req.file.originalname,
        filepath: req.file.path,
        filetype: req.file.mimetype,
        filesize: fileSizeFormatter(req.file.size, 2)
    }

    console.log(file, "FILE");

    res.status(201).send("File Uploaded Successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0) {
        return '0 Bytes';

    }
    const dm = decimal || 2;

    const sizes  = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB' ];

    const index = Math.floor(Math.log(bytes)/ Math.log(1000));

    return parseFloat((bytes/Math.pow(1000, index)).toFixed(dm)) + '-' + sizes[index];
}

module.exports = {
  singleFileUpload,
};
