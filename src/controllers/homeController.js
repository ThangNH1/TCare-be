import db from "../models/index"
import CRUDService from "../services/service.CRUD"

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll()
        console.log(data);
        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error);
    }
}

let getCRUD = (req, res) => {
    return res.render('crud.ejs')
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body)
    console.log(message);
    return res.send("done")
}

let displayCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser()
    return res.render('display-crud.ejs', {
        dataTable: data
    })
}

let editCRUD = async (req, res) => {
    let userID = req.query.id
    if (userID) {
        let userData = await CRUDService.getUserInfoById(userID)
        console.log(userData);
        return res.render('edit-crud.ejs', { user: userData })
    } else {
        return res.send("User not found!")
    }
}

let putCRUD = async (req, res) => {
    let data = req.body
    await CRUDService.updateUserData(data)
    return res.send(data)
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id
    console.log(id);
    if (id) {
        await CRUDService.deleteUser(id)
        return res.send('done')
    } else {
        return res.send('User not found!')
    }
}


module.exports = {
    deleteCRUD: deleteCRUD,
    putCRUD: putCRUD,
    editCRUD: editCRUD,
    displayCRUD: displayCRUD,
    postCRUD: postCRUD,
    getCRUD: getCRUD,
    getHomePage: getHomePage,
}