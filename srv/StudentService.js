const cds = require('@sap/cds')
module.exports = class StudentSrv extends cds.ApplicationService {
    init() {
        const { GetStudents, UpdateStudents, CreateStudents, DeleteStudents } = cds.entities('StudentSrv')
        //On Read
        this.on("READ", GetStudents, async (req, res) => {
            //here to get the data
            // const { SELECT } = cds.ql(req);
            let oResults = "",
                oFilter = req.query.SELECT.where;
            if (oFilter === "undefined") {
                oResults = await SELECT.from(GetStudents);
            } else {
                oResults = await SELECT.from(GetStudents).where(oFilter);

            }
            console.log(oResults);
            return oResults;
        });

        // After read set all records with full name concate first name and last name
        this.after("READ", GetStudents, data => {
            let oFinalResults = data.map(d => {
                d.full_name = d.first_name + " " + d.last_name;
                return d;
            });
            console.log(oFinalResults);
            return oFinalResults;
        });

        //Update Students
        this.on("UPDATE", UpdateStudents, async (req, res) => {
            let sFirstName = req.data.first_name,
                sLastName = req.data.last_name,
                dDateSignUp = req.data.date_sign_up,
                sEmail = req.data.email;
            let oUpdatedData = await cds.transaction(req).run(() => {
                UPDATE(UpdateStudents).set({
                    first_name: sFirstName,
                    last_name: sLastName,
                    date_sign_up: dDateSignUp,
                    full_name: "Mr " + sFirstName + " " + sLastName
                }).where({ email: sEmail })
            }).then((resolve, reject) => {
                if (typeof resolve !== "undefined" && resolve >= 1) {
                    return req.data;
                } else {
                    req.error(409, "Error in the Updating the Record");
                }
            }).catch((error) => {
                console.log(error);
                req.error(500, "Error in the Updating the Record");
            });
            console.log(oUpdatedData);
            return oUpdatedData;

        });


        //Before Creating the student record
        this.before("CREATE", CreateStudents, async (req, res) => {
            let sEmail = req.data.email;
            if (!sEmail) {
                req.reject(400, 'Email is mandatory');
            }else if(sEmail !== "" && sEmail.trim().length > 0){ 
                  if(sEmail.toLowerCase().indexOf("gmail") !== -1 ){
                    req.reject(500, 'Personal Email is not allowed....');
                  }
            }
        });
        //Create Students - Insert Students
        this.on("CREATE", CreateStudents, async (req, res) => {
            let sFirstName = req.data.first_name,
                sLastName = req.data.last_name,
                sFullName = req.data.full_name,
                dDateSignUp = req.data.date_sign_up,
                sEmail = req.data.email;
            if (sFullName === null || sFullName === "") {
                sFullName = "Mr " + sFirstName + " " + sLastName;
            }
            let oResults = await cds.transaction(req).run(
                INSERT.into(CreateStudents).entries(
                    {
                        email: sEmail,
                        first_name: sFirstName,
                        last_name: sLastName,
                        full_name: sFullName,
                        date_sign_up: dDateSignUp
                    })).then((resolve, reject) => {
                        if (typeof resolve !== "undefined" && resolve >= 1) {
                            return req.data;
                        } else {
                            req.error(409, "Error in the Creating  the Record");
                        }
                    }).catch((error) => {
                        console.log(error);
                        req.error(500, "Error in the Creating the Record");
                    });

            console.log(oResults);
            return req.data;
        });

        //DELETING  A RECORD IN CAPM
        this.on("DELETE", DeleteStudents, async (req, res) => {
            let sEmail = req.data.email;
            if (!sEmail) req.error(400, 'Email is required');
            let oResults = await cds.transaction(req).run(
                DELETE.from(DeleteStudents).where({ email: sEmail })).then((resolve, reject) => {
                    if (typeof resolve !== "undefined" && resolve >= 1) {
                        return req.data;
                    } else {
                        req.error(409, "Error in the Deleting  the Record");
                    }
                }).catch((error) => {
                    console.log(error);
                    req.error(500, "Error in the Deleting the Record");
                });
            if (oResults === 0) {
                req.error(404, 'Student not found');
            }
               // Optional: Log the number of affected rows (result will contain the count)
            console.log(`Deleted ${oResults} record(s) with Email: ` + sEmail);
            console.log(oResults);
            return req.data;
        });

        return super.init()
    }
}

