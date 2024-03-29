const sendToken = (user, statusCode, res) => {

    //Creating JWT Token
    const token = user.getJwtToken();

    //setting cookies 
    const options = {
        expires: new Date(
                Date.now() + process.env.COOKIE_EXPIRES_TIME  * 24 * 60 * 60 * 1000 
            ),
        httpOnly: true,
    }

    res.status(statusCode)
    .cookie('token', token, options) 
    .json({
        success: true,
        message:"Login success",
        token, 
        user:{
            name:user.name,
            email:user.email,
            role:user.role,
            id:user._id
        }
    })


}

module.exports = sendToken;