using com.kvk.capm.ex3.learningmanagementsystem as lms from '../db/Students';

service StudentSrv {
    @readonly entity GetStudents as  projection on lms.Students;
    entity UpdateStudents as projection on lms.Students;
}