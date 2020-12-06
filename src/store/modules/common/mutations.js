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

export default {
    setNameUser,
    setRoleUser,
    loadingFalse,
    loadingTrue,
    setTotalRow
}

