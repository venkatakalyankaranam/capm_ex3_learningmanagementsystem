using com.kvk.capm.ex3.learningmanagementsystem as lms from '../db/Students';
using StudentSrv  from './StudentService';

extend service StudentSrv with {
     @readonly entity ExtendGetStudents as select from lms.Students {
          *,
          course_name:String(40)
     }
}