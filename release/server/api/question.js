"use strict";
var express = require('express');
var mongodb_1 = require('mongodb');
var db_1 = require('../db');
var utils_1 = require('../../client/src/utils');
var Question_1 = require('../../client/src/models/Question');
var router = express.Router();
router.put('/', function (req, res) {
    var titleErr = Question_1.titleValidator(req.body.title);
    var q = {
        key: 'key',
        title: req.body.title,
        visibility: req.body.visibility,
        createdAt: new Date().toISOString()
    };
    if (q.visibility === 'private') {
        q.key = utils_1.randomString(24);
    }
    db_1.db.collection('questions').insertOne(q, function (err, insertRes) {
        if (err)
            return res.status(400).send('');
        else
            return res.send(insertRes.ops[0]);
    });
});
router.get('/:id/:key?', function (req, res) {
    var objectId = new mongodb_1.ObjectID(req.params.id);
    db_1.db.collection('questions').findOne({ _id: objectId }, function (err, q) {
        if (err)
            return res.status(404).send('');
        if (q.visibility === 'private') {
            if (!req.params.key || req.params.key !== q.key) {
                return res.status(401).send('');
            }
        }
        return res.send(q);
    });
});
router.get('/:id/:key?', function (req, res) {
});
router.post('/search', function (req, res) {
    db_1.db.collection('questions').find(req.body).toArray(function (err, results) {
        if (err)
            return res.status(404).send('');
        else
            return res.send(results);
    });
});
module.exports = router;

//# sourceMappingURL=data:application/json;base64,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Q0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztJQUcvQixPQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLE9BQU87UUFDOUQsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLElBQUk7WUFBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBbkRILGlCQUFTLE1BQU0sQ0FBQyIsImZpbGUiOiJhcGkvcXVlc3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgT2JqZWN0SUQgfSBmcm9tICdtb25nb2RiJztcblxuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9kYic7XG5pbXBvcnQgeyByYW5kb21TdHJpbmcgfSBmcm9tICcuLi8uLi9jbGllbnQvc3JjL3V0aWxzJztcbmltcG9ydCB7IFF1ZXN0aW9uTW9kZWwsIHRpdGxlVmFsaWRhdG9yIH0gZnJvbSAnLi4vLi4vY2xpZW50L3NyYy9tb2RlbHMvUXVlc3Rpb24nO1xuXG5sZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcbmV4cG9ydCA9IHJvdXRlcjtcblxucm91dGVyLnB1dCgnLycsIChyZXEsIHJlcykgPT4ge1xuXHQvLyBUT0RPIFNjaGVtYSB2YWxpZGF0aW9uXG5cdGxldCB0aXRsZUVyciA9IHRpdGxlVmFsaWRhdG9yKHJlcS5ib2R5LnRpdGxlKTtcblxuXHRsZXQgcTogUXVlc3Rpb25Nb2RlbCA9IHtcblx0XHRrZXk6ICdrZXknLFxuXHRcdHRpdGxlOiByZXEuYm9keS50aXRsZSxcblx0XHR2aXNpYmlsaXR5OiByZXEuYm9keS52aXNpYmlsaXR5LFxuXHRcdGNyZWF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpXG5cdH07XG5cblx0aWYgKHEudmlzaWJpbGl0eSA9PT0gJ3ByaXZhdGUnKSB7XG5cdFx0cS5rZXkgPSByYW5kb21TdHJpbmcoMjQpO1xuXHR9XG5cblx0ZGIuY29sbGVjdGlvbigncXVlc3Rpb25zJykuaW5zZXJ0T25lKHEsIChlcnIsIGluc2VydFJlcykgPT4ge1xuXHRcdGlmIChlcnIpIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCgnJyk7XG5cdFx0ZWxzZSByZXR1cm4gcmVzLnNlbmQoaW5zZXJ0UmVzLm9wc1swXSk7XG5cdH0pO1xufSk7XG5cbnJvdXRlci5nZXQoJy86aWQvOmtleT8nLCAocmVxLCByZXMpID0+IHtcblx0bGV0IG9iamVjdElkID0gbmV3IE9iamVjdElEKHJlcS5wYXJhbXMuaWQpO1xuXG5cdGRiLmNvbGxlY3Rpb24oJ3F1ZXN0aW9ucycpLmZpbmRPbmUoeyBfaWQ6IG9iamVjdElkIH0sIChlcnIsIHEpID0+IHtcblx0XHRpZiAoZXJyKSByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLnNlbmQoJycpO1xuXG5cdFx0aWYgKHEudmlzaWJpbGl0eSA9PT0gJ3ByaXZhdGUnKSB7XG5cdFx0XHQvLyBDb21wYXJlIGtleVxuXHRcdFx0aWYgKCFyZXEucGFyYW1zLmtleSB8fCByZXEucGFyYW1zLmtleSAhPT0gcS5rZXkpIHtcblx0XHRcdFx0cmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5zZW5kKCcnKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzLnNlbmQocSk7XG5cdH0pO1xufSk7XG5cbnJvdXRlci5nZXQoJy86aWQvOmtleT8nLCAocmVxLCByZXMpID0+IHtcblxufSk7XG5cbnJvdXRlci5wb3N0KCcvc2VhcmNoJywgKHJlcSwgcmVzKSA9PiB7XG5cdC8vIFRPRE8gbGltaXQgcG9zc2libGUgZmlsdGVycywgYWxzbyBsaW1pdCBkYXRhIHRoYXQgY291bGQgYmUgZm91bmQgKG5vdCBwcml2YXRlL3Bhc3N3b3JkKVxuXG5cdGRiLmNvbGxlY3Rpb24oJ3F1ZXN0aW9ucycpLmZpbmQocmVxLmJvZHkpLnRvQXJyYXkoKGVyciwgcmVzdWx0cykgPT4ge1xuXHRcdGlmIChlcnIpIHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZCgnJyk7XG5cdFx0ZWxzZSByZXR1cm4gcmVzLnNlbmQocmVzdWx0cyk7XG5cdH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
