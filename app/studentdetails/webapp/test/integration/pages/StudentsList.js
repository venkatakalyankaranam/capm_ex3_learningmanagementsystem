sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.kvk.capm.ex3.learningmanagementsystem.studentdetails',
            componentId: 'StudentsList',
            contextPath: '/Students'
        },
        CustomPageDefinitions
    );
});