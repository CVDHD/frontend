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

const editListRegister = (state, editRegister) => {
    state.listRegister = state.listRegister.map(register => {
        if (editRegister.class_id == register.class_id) return editRegister
        return register
    }
    )
}



export default {
    removeResultRegisterLocal,
    setListRegister,
    setResultRegister,
    addResultRegisterLocal,
    editListRegister
}

