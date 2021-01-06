const express = require('express');
import {AuthRouter} from './AuthRouter';

const router = express.Router();

router.use(AuthRouter);

module.exports = router;