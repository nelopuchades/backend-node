const store = require('./store');

function addChat(users){
    if (!users || !Array.isArray(users) || users.length < 2){
        return Promise.reject('Invalid users list');
    }

    const newChat = {
        users: users
    }

    return store.add(newChat);
}

async function listChats(userId) {
    return store.list(userId);
}

module.exports = {
    addChat,
    listChats
}