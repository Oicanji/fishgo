import api from ".";

function getUsers() {
    return api.get('/users');
}

function getMe() {
    return api.get('/me');
}

const users = {
    get: getUsers,
    me: getMe
}

export default users;