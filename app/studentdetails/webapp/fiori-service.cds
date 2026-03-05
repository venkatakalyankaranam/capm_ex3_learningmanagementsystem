using StudentSrv from '../../../srv/StudentService';

annotate StudentSrv.GetStudents with @(UI: {
    LineItem                       : [
        {
            Label: 'Email',
            Value: email
        },
        {
            Label: 'First Name',
            Value: first_name
        },
        {
            Label: 'Last Name',
            Value: last_name
        },
        {
            Label: 'Full Name',
            Value: full_name
        },
        {
            Label: 'Date Join',
            Value: date_sign_up
        }
    ],

    HeaderInfo                     : {
        $Type         : 'UI.HeaderInfoType',
        TypeName      : 'Student',
        TypeNamePlural: 'Students',
        Title         : {value: full_name}
    },

    Facets : [
        {
        $Type : 'UI.ReferenceFacet',
        ID    : 'PersonalStudentInfo',
        Label : 'Personal Information',
        Target: '@UI.FieldGroup#PersonalStudentInfo',
        },
        {
        $Type : 'UI.ReferenceFacet',
        ID    : 'EnrollmentDetails',
        Label : 'Enrollment Details',
        Target: 'enrollment/@UI.LineItem',
        }
    ],

    FieldGroup #PersonalStudentInfo: {
        Data: [
                {
                    $Type: 'UI.DataField',
                    Label: 'Email',
                    Value: email
                },
                {
                    $Type: 'UI.DataField',
                    Label: 'First Name',
                    Value: first_name
                },
                {
                    $Type: 'UI.DataField',
                    Label: 'Last Name',
                    Value: last_name
                },
                {
                    $Type: 'UI.DataField',
                    Label: 'Full Name',
                    Value: full_name
                }
          ]

    },


});

annotate StudentSrv.GetEnrollments with @(
    UI: {
      LineItem: 
        [
            { Label: 'Enrollment ID', Value: ID },
            { Label: 'Course ID',     Value: course_ID }
        ]
      }
);
