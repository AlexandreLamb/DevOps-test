const { Router } = require('express');

const router = Router();

/**
 * Controllers imports
 */
// subject IMPORT
const { CreateSubject, ReadSubject } = require('../routes/controllers');

// SUBJECT ROUTES
router.post('/subject/create', CreateSubject);
router.get('/subject/read',ReadSubject)

module.exports  = router;


