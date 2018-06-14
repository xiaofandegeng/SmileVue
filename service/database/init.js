const mongoose = require('mongoose')
const db = "mongodb://localhost/smile-db"

exports.connect = () => {
    //链接数据库
    mongoose.connect(db)
    let maxConnectTimes = 0


    return new Promise((resolve, reject) => {
        //增加数据库监听事件
        mongoose.connection.on('disconnected', () => {
            console.log('数据库断开')
            if (maxConnectTimes <= 3) {
                maxConnectTimes++;
                mongoose.connect(db)
            } else {
                reject()
                throw new Error('数据错误，请人工修正！')
            }

        })

        mongoose.connection.on('error', () => {
                console.log('数据库错误')
                if (maxConnectTimes <= 3) {
                    maxConnectTimes++
                    mongoose.connect(db);
                } else {
                    reject();
                    throw new Error('数据错误，请人工修改！')
                }
            })
            //链接打开时
        mongoose.connection.once('open', () => {
            console.log('数据库打开的时候')
            resolve()
        })
    })


}