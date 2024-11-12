

const getStoredPlayers = () => {
    const LSPlayers = localStorage.getItem('Storedplayers')
    if (LSPlayers) {
        return JSON.parse(LSPlayers)
    }
    return [];
}

const saveTOLS = (players) => {
    const Storedplayers = JSON.stringify(players)
    localStorage.setItem('Storedplayers', Storedplayers)
}

const addToLs = (id) => {
    const Storedplayers = getStoredPlayers();
    const isexits = Storedplayers.find(p => p == id)
    if (isexits) {
        console.log('Already Save In Local Storage')
    }
    else {
        Storedplayers.push(id)
        saveTOLS(Storedplayers)
    }

}

export { addToLs ,getStoredPlayers}