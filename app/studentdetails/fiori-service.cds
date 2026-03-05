using StudentSrv as service from '../../srv/StudentService';
annotate service.GetStudents with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'Email',
                Value : email,
            },
            {
                $Type : 'UI.DataField',
                Label : 'first_name',
                Value : first_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'last_name',
                Value : last_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'full_name',
                Value : full_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'date_sign_up',
                Value : date_sign_up,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ]
);

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

annotate StudentSrv.GetCourses with @(
    UI: {
       HeaderInfo                     : {
        $Type         : 'UI.HeaderInfoType',
        TypeName      : 'Course',
        TypeNamePlural: 'Courses',
        Title         : {value: ID},
        Description   : { value : course_name}
    },
     FieldGroup #StudentCourseInfo: {
        Data: [ 
                {
                    $Type: 'UI.DataField',
                    Label: 'Course Name',
                    Value: course_name
                },
                {
                    $Type: 'UI.DataField',
                    Label: 'Course Duration',
                    Value: course_duration
                },
                {
                    $Type: 'UI.DataField',
                    Label: 'Course Price',
                    Value: course_price
                },
                {
                    $Type: 'UI.DataField',
                    Label: 'Course URL',
                    Value: course_url
                }
          ]

    }

      }
);

