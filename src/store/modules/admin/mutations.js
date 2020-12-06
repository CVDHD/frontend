const setResultRegister = (state, resultRegisters) => {
    state.resultRegisters = resultRegisters
}

const removeResultRegisterLocal = (state, removeSubject) => {
    state.resultRegisters = [...state.resultRegisters.filter(subject => subject.class_id != removeSubject.class_id)]
}

const removeListRegisterLocal = (state, removeSubject) => {
    
    state.listRegisters = [...state.listRegisters.filter(subject => subject.class_id != removeSubject)]
}

const setListRegister = (state, listRegister) => {
    state.listRegisters = listRegister ? listRegister.map(data => ({...data, time: data.start_class + '-' + data.end_class})): null
}

const editListRegister = (state, editRegister) => {
    state.listRegister = state.listRegister.map(register => {
        if (editRegister.class_id == register.class_id) return editRegister
        return register
    }
    )
}

const setListTeachers = (state, listTeachers) => {
    state.listTeachers = listTeachers
}

const setListRooms = (state, listRooms) => {
    state.listRooms = listRooms
}

const setListSubjects = (state, listSubjects) => {
    state.listSubjects = listSubjects
}




export default {
    removeResultRegisterLocal,
    setListRegister,
    setResultRegister,
    editListRegister,
    setListRooms,
    setListSubjects,
    setListTeachers,
    removeListRegisterLocal
}

