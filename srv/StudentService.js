const cds = require('@sap/cds')
module.exports = class StudentSrv extends cds.ApplicationService {
    init() {
        const { GetStudents, UpdateStudents , CreateStudents } = cds.entities('StudentSrv')
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
           let oUpdatedData = await cds.transaction(req).run(()=> {
               UPDATE(UpdateStudents).set({
                first_name: sFirstName,
                last_name : sLastName,
                date_sign_up : dDateSignUp,
                full_name: "Mr " + sFirstName +" " + sLastName                
            }).where({ email: sEmail })
           }).then((resolve,reject) => {
                if(typeof resolve !== "undefined" && resolve >= 1){
                    return req.data;
                }else{
                    req.error(409, "Error in the Updating the Record");
                }
           }).catch((error)=>{
                   console.log(error);
                   req.error(500, "Error in the Updating the Record");
           });     
            console.log(oUpdatedData);
            return oUpdatedData;
            
        });

         //Create Students - Insert Students
         this.on("CREATE", CreateStudents, async (req, res) => {
            let sFirstName = req.data.first_name,
                 sLastName = req.data.last_name,
                 sFullName = req.data.full_name,
                 dDateSignUp = req.data.date_sign_up,
                 sEmail = req.data.email;
            let oResults = await UPDATE(UpdateStudents).set({
                first_name: sFirstName,
                last_name : sLastName,                
                full_name: "Mr " + sFirstName +" " + sLastName                
            }).where({ email: sEmail });
            console.log(oResults);
            return req.data;
        });

        return super.init()
    }
}
