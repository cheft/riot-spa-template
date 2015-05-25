require './app/viewport/tag'
require './app/menu/tag'
require './app/hello/tag'
require './app/todo/tag'
require './app/test/tag'

app = window.app = new Cheft.Application()
app.mount('viewport')

router = new Cheft.Router require('./router')
router.start()
