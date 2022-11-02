const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'JWT_SECRET'
const createUser = async (req, res, next) => {
    const { playername, email, category, username, password: bcryptpassword } = req.body
    const password = await bcrypt.hash(bcryptpassword, 10)

    // const user = User.findOne({ username: username }).lean()
    // if (user) return res.json({ status: 'error', error: 'Username has already exits' });
    
    try {
        const data = new User({
            username: username,
            playername: playername,
            email: email,
            category: category,
            password: password
        })
        User.createNewUser(data, (error) => {
            if (error) {
                console.log(error)
                if (error.code == 11000) {
                    next({ status: 'error', error: 'Username has already exits' });
                }
                else console.log(error)
            }
            else res.json('Create User Successfully')
        })
    } catch (error) {
        console.log(error)
    }
}

const userLogin = async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username: username }).lean()
    if (!user) {
        return res.json({ status: 'error', error: 'Invalid username or password' })
    }
    // ดึงค่า hash จากฐานข้อมูล แล้วนำค่ามาตรวจสอบ กับข้อมูลที่ต้องการ
    if (await bcrypt.compare(password, user.password)) {
        // Bind token with user id and username
        const token = jwt.sign({ id: user._id, username: user.username }
            , JWT_SECRET)
        return res.json({ status: 'ok', token: token })
    }
    res.json({ status: 'error', error: 'Username has already exits' })
}

const userGetMe = async (req, res) => {
    console.log(req)
    const { token } = req.query
    const user = await jwt.verify(token, JWT_SECRET)
    if (user) {
        const result = await User.findOne({ _id: user.id }).lean()
        return res.json(result)
    }
}

//Exports
module.exports = { createUser, userLogin, userGetMe }