const path = require('path');
var publicViews = __dirname + '/src/views/';

function indexHome (req, res){
    return res.sendFile(path.join(publicViews+'/index.html'))

}

module.exports = {
    indexHome
}