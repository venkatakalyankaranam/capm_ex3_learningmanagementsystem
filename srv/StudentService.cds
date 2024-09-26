using com.kvk.capm.ex3.learningmanagementsystem as lms from '../db/Students';

service StudentSrv {
    @readonly entity Students as  projection on lms.Students;
}