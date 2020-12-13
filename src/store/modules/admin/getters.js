const getResultRegisters = state => state.resultRegisters

const getInfo = state => state.name

const getListRegisters = state => state.listRegisters

const getRole = state => state.role

const getListRooms = state => state.listRooms

const getListTeachers = state => state.listTeachers

const getListSubjects = state => state.listSubjects

const getStudentOfClass= state => state.listStudentOfClass

export default {
    getResultRegisters,
    getInfo,
    getListRegisters,
    getRole,
    getListRooms,
    getListSubjects,
    getListTeachers,
    getStudentOfClass
}