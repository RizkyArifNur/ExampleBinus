'use strict';

module.exports = function (contoh) {

    // contoh.bulkInsert = (records, cb) => {


    //     var flags = {}, output = [], l = records.length, i;
    //     for (i = 0; i < l; i++) {
    //         if (flags[records[i].username]){
    //             const err = Error("")

    //             return  cb(null, { status: "success" })

    //         } 
    //         flags[records[i].username] = true;
    //         output.push(records[i].username);
    //         console.log(flags)
    //     }
    //     contoh.create(records, (err, results) => {
    //         if (err) return cb(err)
    //         cb(null, { status: "success" })
    //         console.log(results)
    //         console.log(output)
    //     })
    // }

    // contoh.remoteMethod('bulkInsert', {
    //     accepts: { arg: "records", type: "array", http: { source: "body" }, description: "Bulk Insert Example" },
    //     returns: {
    //         root: true,
    //         arg: "status",
    //         type: "object"
    //     },
    //     http: { verb: "post", source: "body" }
    // })
};
