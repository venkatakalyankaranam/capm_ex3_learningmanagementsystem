using com.kvk.capm.ex3.learningmanagementsystem as lms from '../db/Students';

service StudentSrv {
     @readonly   entity GetStudents as  projection on lms.Students;
     @updateonly entity UpdateStudents as projection on lms.Students;
     @createonly entity CreateStudents as projection on lms.Students; 
     @deleteonly entity DeleteStudents as projection on lms.Students;       
}