// Так как промис является центральной сущностью в работе
// с асинхронным кодом в современном JS, предлагается развить дальше то,
// что смотрели на лекции и написать собственную реализацию,
// которая будет соответствовать следующим требованиям:
//   - Промис создается конструктором в состоянии pending
//   - Промис может быть переведен в состояние fulfilled или rejected необратимо
//   - Можно добавить новые обработчики в уже исполненный промис
//   - Можно создать уже выполненный промис с помощью CustomPromise.resolve/reject

const CustomPromise = function (callback) {
    this.__success__ = [];
    this.__error__ = [];
    this._callback = callback;

    this.then = function(successCb, rejectCb) {
        if (successCb) {
            this.__success__.push(successCb);
        }
        if (rejectCb) {
            this.__error__.push(rejectCb);
        }
    }

    this.catch = function (rejectCb) {
        this.then(null, rejectCb);
    }

    this._resolve = function (result) {
        this.__success__.forEach( cb => cb(result) )
    }

    this._reject = function (err) {
        this.__error__.forEach( cb => cb(err) )
    }

    setTimeout(() => {
        callback(this._resolve.bind(this), this._reject.bind(this))
    }, 0)
};
