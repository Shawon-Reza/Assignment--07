

const getStoredPlayers = () => {
    const LSPlayers = localStorage.getItem('Storedplayers')
    if (LSPlayers) {
        return JSON.parse(LSPlayers)
    }
    return [];
}

// saveData TO localStorage
const saveTOLS = (players) => {
    if (players.length < 7) {
        const Storedplayers = JSON.stringify(players)
        localStorage.setItem('Storedplayers', Storedplayers)
    }
    else {
        alert("You can Choose max 6 Players")
    }

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

export { addToLs, getStoredPlayers }