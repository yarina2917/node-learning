const fs = require('fs');
const os = require('os');
const path = require('path');
const { COPYFILE_EXCL, COPYFILE_FICLONE, COPYFILE_FICLONE_FORCE } = fs.constants;
const filesPath = 'app/files/';

const copyFile = () => {
    return new Promise(async (resolve, reject) => {
        fs.copyFile(`${filesPath}source.txt`, `${filesPath}/destination.txt`, COPYFILE_EXCL, (err) => {
            if (err) {
                reject(err)
            }
            resolve('source.txt was copied to destination.txt')
        });
    })
}


const mkDir = () => {
    return new Promise(async (resolve, reject) => {
        fs.mkdir(`${filesPath}newFolder`, {recursive: false}, (err) => {
            if (err) {
                reject(err)
            }
            resolve('new folder was created')
        });
    })
}

const mkTempDir = () => {
    return new Promise(async (resolve, reject) => {
        fs.mkdtemp(path.join(os.tmpdir(), 'foo-'), (err, folder) => {
            if (err) {
                reject(err)
            }
            resolve(folder);
            // Prints: /tmp/foo-itXde2 or C:\Users\...\AppData\Local\Temp\foo-itXde2
        });
    })
}

const openFile = () => {
    return new Promise(async (resolve, reject) => {
        fs.read(`${filesPath}source.txt`, 'r', (err, fd) => {
            if (err) {
                reject(err)
            }
            resolve('opened');
        });
    })
}

const read = () => {
    return new Promise(async (resolve, reject) => {
        fs.stat(`${filesPath}link1.txt`, (error, stats) => {
            fs.open(`${filesPath}link1.txt`, "r", (error, fd) => {
                // new Buffer(stats.size) to Buffer.alloc(number) number)
                const buffer = Buffer.alloc(stats.size);
                fs.read(fd, buffer, 0, buffer.length, null, (error, bytesRead, buffer) => {
                    resolve(buffer.toString("utf8"))
                });
            });
        });
    })
}

const readDir = () => {
    return new Promise(async (resolve, reject) => {
        fs.readdir(`${filesPath}folderFiles`, {withFileTypes: false}, (err, files) => {
            if (err) {
                reject(err)
            }
            console.log(files);
            resolve(files.toString());
        });
    })
}

const readFile = () => {
    return new Promise(async (resolve, reject) => {
        fs.readFile(`${filesPath}source.txt`, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data);
        });
    })
}

const renameFile = () => {
    return new Promise(async (resolve, reject) => {
        fs.rename(`${filesPath}destination.txt`, `${filesPath}destinationRename.txt`, (err) => {
            if (err) {
                reject(err)
            }
            resolve('Rename complete!');
        });
    })
}

const removeDir = () => {
    return new Promise(async (resolve, reject) => {
        fs.rmdir(`${filesPath}folderToDelete`, (err) => {
            if (err) {
                reject(err)
            }
            resolve('Deleted');
        });
    })
}


const deleteFolderRecursive = () => {
    const path = `${filesPath}folderToDelete`;
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(file => {
            const curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

const link = () => {
    return new Promise(async (resolve, reject) => {
        fs.link(`${filesPath}symlinkTarget.txt`, `${filesPath}symlink.txt`, (err) => {
            if (err) {
                reject(err)
            }
            resolve('link was created');
        });
    })
}

const symlink = () => {
    return new Promise(async (resolve, reject) => {
        fs.symlink(`${filesPath}symlinkTarget.txt`, `${filesPath}symlink.txt`, (err) => {
            if (err) {
                reject(err)
            }
            resolve('symlink was created');
        });
    })
}

const readLink = () => {
    return new Promise(async (resolve, reject) => {
        fs.readlink(`${filesPath}link1.txt`, (err, linkString) => {
            if (err) {
                reject(err)
            }
            resolve(linkString);
        });
    })
}

const realPath = () => {
    return new Promise(async (resolve, reject) => {
        fs.realpath(`${filesPath}link1.txt`, (err, resolvedPath) => {
            if (err) {
                reject(err)
            }
            resolve(resolvedPath);
        });
    })
}

const realPathNative = () => {
    return new Promise(async (resolve, reject) => {
        fs.realpath.native(`${filesPath}link1.txt`, (err, resolvedPath) => {
            if (err) {
                reject(err)
            }
            resolve(resolvedPath);
        });
    })
}


module.exports.copyFile = copyFile;
module.exports.mkDir = mkDir;
module.exports.mkTempDir = mkTempDir;
module.exports.openFile = openFile;
module.exports.read = read;
module.exports.readDir = readDir;
module.exports.readFile = readFile;
module.exports.renameFile = renameFile;
module.exports.link = link;
module.exports.symlink = symlink;
module.exports.readLink = readLink;
module.exports.realPath = realPath;
module.exports.realPathNative = realPathNative;
module.exports.removeDir = removeDir;
module.exports.deleteFolderRecursive = deleteFolderRecursive;


