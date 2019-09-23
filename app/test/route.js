const route = require('express').Router()
const service = require('./service')

route.get('/copy', (req, res, next) => {
    service.copyFile()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log('err', err)
        })
})

route.get('/mkDir', (req, res, next) => {
    service.mkDir()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log('err', err)
        })
})

route.get('/mkTempDir', (req, res, next) => {
    service.mkTempDir()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log('err', err)
        })
})

route.get('/openFile', (req, res, next) => {
    service.openFile()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log('err', err)
        })
})

route.get('/read', (req, res, next) => {
    service.read()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log('err', err)
        })
})

route.get('/readDir', (req, res, next) => {
    service.readDir()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log('err', err)
        })
})

route.get('/readFile', (req, res, next) => {
    service.readFile()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log('err', err)
        })
})

route.get('/renameFile', (req, res, next) => {
    service.renameFile()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log('err', err)
        })
})

route.get('/removeDir', (req, res, next) => {
    service.removeDir()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log('err', err)
        })
})

route.get('/removeDirWithFiles', (req, res, next) => {
    service.deleteFolderRecursive();
})

route.get('/link', (req, res, next) => {
    service.link()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log('err', err)
        })
})

route.get('/symlink', (req, res, next) => {
    service.symlink()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log('err', err)
        })
})

route.get('/readLink', (req, res, next) => {
    service.readLink()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log('err', err)
        })
})

route.get('/realPath', (req, res, next) => {
    service.realPath()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log('err', err)
        })
})

route.get('/realPathNative', (req, res, next) => {
    service.realPathNative()
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log('err', err)
        })
})



module.exports = route
