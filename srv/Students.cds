namespace com.kvk.capm.ex3.learningmanagementsystem;

entity Students {
    key email : String(65);
        first_name : String(20);
        last_name: String(20);
        date_sign_up : Date;
}