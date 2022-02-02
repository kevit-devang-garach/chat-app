const generateMessage = (username, text) => {
    return {
        username: (username)? username: 'Admin',
        text,
        createdAt: new Date().getTime()
    }
}

module.exports = {
    generateMessage
}