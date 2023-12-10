import api from ".";

function getFish() {
    return api.get('/fish');
}

const fish = {
    get: getFish
}

export default fish;