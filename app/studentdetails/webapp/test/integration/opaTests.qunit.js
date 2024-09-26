sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/kvk/capm/ex3/learningmanagementsystem/studentdetails/test/integration/FirstJourney',
		'com/kvk/capm/ex3/learningmanagementsystem/studentdetails/test/integration/pages/StudentsList',
		'com/kvk/capm/ex3/learningmanagementsystem/studentdetails/test/integration/pages/StudentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, StudentsList, StudentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/kvk/capm/ex3/learningmanagementsystem/studentdetails') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheStudentsList: StudentsList,
					onTheStudentsObjectPage: StudentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);