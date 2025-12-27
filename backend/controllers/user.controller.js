const { ok } = require('node:assert');
const User = require('../models/User.Model');
const bcrypt = require('bcryptjs');

const ERROR_MESSAGES = {
    INVALID_CREDENTIALS: 'Invalid email or password',
    EMAIL_ALREADY_EXISTS: 'Email already in use',
    SERVER_ERROR: 'An error occurred. Please try again later.',
    PASSWORD_TOO_SHORT: 'Password must be at least 6 characters long',
    MISSING_FIELDS: 'Please fill in all required fields',
    INTERNAL_SERVER_ERROR: 'Internal server error',
};


const HTTP_STATUS = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    INTERNAL_SERVER_ERROR: 500,
    CREATED: 201,
    OK: 200,
};


module.exports.signUp = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;
        
        if(!fullName || !email || !password){
            const message = ERROR_MESSAGES.MISSING_FIELDS;
            return res.status(HTTP_STATUS.BAD_REQUEST).json({ message });
        }

        if(password.length < 6){
            const message = ERROR_MESSAGES.PASSWORD_TOO_SHORT;
            return res.status(HTTP_STATUS.BAD_REQUEST).json({ message });
        }

        const existingUser = await User.findOne({ email });
        if(existingUser){
            const message = ERROR_MESSAGES.EMAIL_ALREADY_EXISTS;
            return  res.status(HTTP_STATUS.BAD_REQUEST).json({ message });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(HTTP_STATUS.CREATED).json({ message: 'User registered successfully' });
        generateToken(newUser, res);

        // After remove if working is fine

        res.status(HTTP_STATUS.CREATED).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            email: newUser.email,
        });

    } catch (error) {
        console.log("Error in signUp:", error);
        const message = ERROR_MESSAGES.INTERNAL_SERVER_ERROR;
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message });
    }
};

module.exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password){
            const message = ERROR_MESSAGES.MISSING_FIELDS;
            return res.status(HTTP_STATUS.BAD_REQUEST).json({ message });
        }

        const user = await User.findOne({ email });

        if(!user){
            const message = ERROR_MESSAGES.INVALID_CREDENTIALS;
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message });
        }

        const matchingPassword = await bcrypt.compare(password, user.password);

        if(!matchingPassword){
            const message = ERROR_MESSAGES.INVALID_CREDENTIALS;
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message });
        } 
        
        res.status(HTTP_STATUS.OK).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
        });

        generateToken(user, res);

    }catch (error) {
        console.log("Error in login:", error);
        const message = ERROR_MESSAGES.INTERNAL_SERVER_ERROR;
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message });
    }
};

module.exports.logout = (req, res) => {

    try{
        res.cookie("jwt", "",{maxAge : 0});

        const message = "Logged out successfully";
        res.status(HTTP_STATUS.OK).json({ message });
    }catch(error){
        console.log("Error in logout:", error);
        const message = ERROR_MESSAGES.INTERNAL_SERVER_ERROR;
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message });
    }
}