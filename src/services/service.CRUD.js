import db from "../models/index"
import bcrypt from 'bcryptjs';


const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise(async (res, rej) => {
        try {
            let hashPwdFromByBcrypt = await hashPwd(data.password)
            await db.User.create({
                name: data.firstName + ' ' + data.lastName,
                email: data.email,
                phoneNumber: data.phone,
                password: hashPwdFromByBcrypt,
                address: data.address,
                sex: data.sex === '1' ? true : false,
                roleID: data.roleID
            })
            res('ok')
        } catch (e) {
            rej(e)
        }
    })
}

let hashPwd = (password) => {
    return new Promise(async (res, rej) => {
        try {
            let hash = await bcrypt.hashSync("B4ce/\/", salt);
            res(hash)
        } catch (e) {
            rej(e)
        }
    })
}

let getAllUser = () => {
    return new Promise(async (res, rej) => {
        try {
            let user = db.User.findAll({
                raw: true
            })
            res(user)
        } catch (e) {
            rej(e)
        }
    })
}

let getUserInfoById = (id) => {
    return new Promise(async (res, rej) => {
        try {
            let user = await db.User.findOne({
                where: { id: id },
                raw: true
            })
            if (user) {
                res(user)
            } else {
                res('Not found!')
            }
        } catch (error) {
            rej(error)
        }
    })
}

let updateUserData = (data) => {
    return new Promise(async (res, rej) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id },
            })
            if (user) {
                user.name = data.fullName
                user.email = data.email
                user.phoneNumber = data.phone
                user.address = data.address

                await user.save()
                res('done')
            } else {
                res('ok')
            }
        } catch (error) {
            console.log(error);
        }
    })
}

let deleteUser = (userID) => {
    return new Promise(async (res, rej) => {
        try {
            let user = await db.User.findOne({
                where: { id: userID },
            })
            if (user) {
                await user.destroy()
                res('done')
            } else {
                res('ok')
            }
        } catch (error) {
            console.log(error);
        }
    })
}

module.exports = {
    deleteUser: deleteUser,
    updateUserData: updateUserData,
    getUserInfoById: getUserInfoById,
    createNewUser: createNewUser,
    getAllUser: getAllUser
}