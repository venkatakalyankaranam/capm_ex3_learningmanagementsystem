
namespace com.kvk.capm.ex3.learningmanagementsystem;

entity Students {
    key email : String(65);
        first_name : String(20);
        last_name: String(20);
        date_sign_up : Date;
}

//should contain only the data base structures/tables etc DB Related....
//Writing annotations here is not a best practice
//Modularize your code 

annotate Students with @(
    UI: {
        LineItem: [
            {  Label: 'Email',  Value : email  },
            {  Label: 'First Name', Value : first_name },
            {  Label : 'Last Name', Value : last_name  },
            {  Label : 'Date Join', Value : date_sign_up }
            ],

        HeaderInfo  : {
            $Type : 'UI.HeaderInfoType',
            TypeName : 'Student',
            TypeNamePlural : 'Students',
        },               
    
    }  
);
