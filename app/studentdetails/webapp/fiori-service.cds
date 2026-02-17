using StudentSrv from '../../../srv/StudentService';

annotate StudentSrv.Students with @(
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