namespace com.kvk.capm.ex3.learningmanagementsystem;
using com.kvk.capm.ex3.learningmanagementsystem as lms from '../db/Students';

extend lms.Students with {
        course_name:String(40);
}