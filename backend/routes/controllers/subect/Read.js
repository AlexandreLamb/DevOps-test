const { SubjectModel } = require('../../../models/index');
/**
 * Request structure
 * req = { body: { } }
 * res = { json: { } }
 */

/**
 * SECURE : Params and Body
 */
const secure = async req => {
    const inputs = {};

    return inputs;
  };
  
  /**
   * PROCESS :
   */
  const process = async (inputs) => {
        const subjects = await SubjectModel.find().exec();
        return subjects;
   
  };
  
  /**
   * LOGIC :
   */
  const readSubject = async (req, res) => {
    try {
      const inputs = await secure(req);
  
      const param = await process(inputs);
  
      res.status(200).json(param);
    } catch (error) {
      console.log("ERROR MESSAGE :", error.message);
      console.log("ERROR :", error);
      res.status(400).json({ message: error.message });
    }
  };
  module.exports = readSubject;