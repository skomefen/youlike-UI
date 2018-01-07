var request = require('request');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    console.log(router.mountpath);
    res.send('Admin Homepage');
});
router.get('/:id', function(req, res, next) {
    var id =  req.params.id;
    var url = 'http://localhost:8080/api/music?id='+id;

    //向后端发送get请求
    request.get({
        method:'GET',
        uri:url
    },function (error,response,body) {
        //后端响应请求，获取JSON数据，再用模板组装HTML
        var music = JSON.parse(body)
        res.render('music',{name:music.name})
    });
});
module.exports = router;