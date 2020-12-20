const setResultRegister = (state, resultRegister) => {
    state.resultRegister = resultRegister
}

const addResultRegisterLocal = (state, newSubject) => {
    state.resultRegister =  [...state.resultRegister, newSubject]
}

const removeResultRegisterLocal = (state, removeSubject) => {
    state.resultRegister = [...state.resultRegister.filter(subject => subject.class_id != removeSubject.class_id)]
}
const setListRegister = (state, listRegister) => {
    state.listRegister = listRegister ? listRegister.map(data => ({...data, time: data.start_class + '-' + data.end_class})): null
}

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

const setListNotify = (state, listNotify) => {
    state.listNotify = listNotify
}

const deleteNotify = (state, id) => {
    state.listNotify = state.listNotify.filter( notify => notify,id != id)
}

export default {
    removeResultRegisterLocal,
    setListRegister,
    setResultRegister,
    setNameUser,
    setRoleUser,
    addResultRegisterLocal,
    loadingFalse,
    loadingTrue,
    setListNotify,
    deleteNotify
}

