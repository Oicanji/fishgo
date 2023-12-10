import api from ".";

function getUsers() {
    return api.get('/users');
}

const users = {
    get: getUsers
}

export default users;