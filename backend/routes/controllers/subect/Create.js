const { SubjectModel } = require('../../../models/index');
const { isDate,isLink } = require('../../../core/helpers/formatChecker') 
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
    if(req.body.name === null || req.body.name === undefined){
        throw new Error('subject name undefined/null');
    }
    inputs.name = req.body.name;

    if(req.body.link === null || req.body.link === undefined || !isLink(req.body.link) ){
        throw new Error('subject link undefined/null');
    }
    inputs.link = req.body.link;

    if(req.body.content === null || req.body.content === undefined){
        throw new Error('subject content undefined/null');
    }
    inputs.content = req.body.content;

    if(req.body.createAt === null || req.body.createAt === undefined || !isDate(req.body.createAt) ){
        throw new Error('subject createAt undefined/null/invalid format');
    }
    inputs.createAt = req.body.createAt;

    if(req.body.updateAt === null || req.body.updateAt === undefined){
        throw new Error('subject updateAt undefined/null');
    }
    inputs.updateAt = req.body.updateAt;

    if(req.body.authName === null || req.body.authName === undefined){
        throw new Error('subject authName undefined/null');
    }
    inputs.authName = req.body.authName;
    return inputs;
  };
  
  /**
   * PROCESS :
   */
  const process = async (inputs) => {
    try{
        const newSubject = await SubjectModel.create(inputs);
        return newSubject;
    }catch(error) {
          throw new Error('Subject  can\'t be create'.concat(' > ', error.message));
      }
  };
  
  /**
   * LOGIC :
   */
  const createSubject = async (req, res) => {
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
  module.exports = {createSubject, secure, process};