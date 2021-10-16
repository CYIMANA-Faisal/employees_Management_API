const welcome = (req, res) => {
    return res.status(200).json({ status: 200, message: 'Welcome to employee management API'});
};

export default welcome;