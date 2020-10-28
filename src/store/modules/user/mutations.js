const setResultRegister = (state, resultRegister) => {
    state.resultRegister = resultRegister
}
const addResultRegister = (state, newSubject) => {
    state.resultRegister = [...state.resultRegister, newSubject]
}

const removeResultRegister = (state, removeSubject) => {
    state.resultRegister = state.resultRegister.filters(subject => {
        subject.code_subject != removeSubject
    })
}
const setListRegister = (state, listRegister) => {
    state.listRegister = listRegister
}

const setNameUser = (state, nameUser) => {
    state.name = nameUser
}

const setRoleUser = (state, roleUser) => {
    state.role = roleUser
}

export default {
    addResultRegister,
    removeResultRegister,
    setListRegister,
    setResultRegister,
    setNameUser,
    setRoleUser
}

