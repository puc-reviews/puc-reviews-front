const middleware = {}

middleware['super_admin_or_helper'] = require('../middleware/super_admin_or_helper.js')
middleware['super_admin_or_helper'] = middleware['super_admin_or_helper'].default || middleware['super_admin_or_helper']

export default middleware
