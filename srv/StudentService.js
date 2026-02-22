const cds = require("@sap/cds");
const { GetStudents, UpdateStudents } = cds.entities("com.kvk.capm.ex3.learningmanagementsystem");
module.exports = srv=>{
    srv.on("READ", "GetStudents" , async(req,res) => {
           //here to get the data
           const { SELECT } = cds.ql(req);
           let oResults = "",
               oFilter = req.query.SELECT.where;
           if(oFilter === "undefined"){
                 oResults = await SELECT.from(GetStudents);                 
           }else{
                 oResults = await SELECT.from(GetStudents).where(oFilter);
                 
           }           
           console.log(oResults);
           return oResults; 
    });

    srv.after("READ", "GetStudents" , data => {
         let oFinalResults =  data.map( d => {
            d.full_name = d.first_name + " " + d.last_name;
            return d;           
         });
         console.log(oFinalResults);
         return oFinalResults; 
    });
 
        srv.after("CREATE", "UpdateStudents" , async (req,res) => {
           let sFirstName = req.data.first_name,
               sEmail = req.data.email;
        let oResults = await UPDATE(UpdateStudents).set({
             first_name  : sFirstName 
        }).where({ email : sEmail});
        console.log(oResults);
        return req.data;
    });
}
