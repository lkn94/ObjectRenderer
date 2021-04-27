function parseObject(object, _callback) {
    if (object === undefined || object === null) {
        return undefined;
    }

    var keys = Object.keys(object);

    if (keys === undefined || keys.length == 0 || keys === null) {
        return undefined;
    }

    var parsing = (ele) => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                let tmpArray = [];
                tmpArray['key'] = ele;
                tmpArray['value'] = object[ele];
                res(tmpArray);
            }, Math.random());
        });
    };

    var promises = keys.filter((key) => {
        if (object[key] == null) {
            return false;
        } else {
            return true;
        }
    }).map(async (key) => {        
        var result = parsing(key);
        return new Promise((res, rej) => { res(result); });
    });

    Promise.all(promises).then((result) => {
        if (_callback !== undefined) {
            _callback(result);
        }
    });
}

export { parseObject };