const setNameUser = (state, nameUser) => {
    state.name = nameUser
}

const setRoleUser = (state, roleUser) => {
    state.role = roleUser
}

const loadingTrue = (state) => {
    state.loading = true
}

const loadingFalse = (state) => {
    state.loading = false
}
const setTotalRow = (state, totalRow) => {
    state.totalRow = totalRow
}

const setTimeRegister = (state, time) => {
    state.timeRegister = time
}

const setListNotify = (state, list) => {
    state.listNotify = list
}

const addListNotifyLocal = (state, notify) => {
    state.listNotify = [...state.listNotify, notify]
}

const updateNotifyLocal = (state, notify) => {
    state.listNotify = state.listNotify.map( notifys => notifys.id == notify.id ? notify : notifys)
}

export default {
    setNameUser,
    setRoleUser,
    loadingFalse,
    loadingTrue,
    setTotalRow,
    setTimeRegister,
    setListNotify,
    addListNotifyLocal,
    updateNotifyLocal
}

