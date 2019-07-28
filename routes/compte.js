module.exports = {
    countPage: (req,res) => {
        let query="SELECT * FROM Operation ORDER BY Operation.DateOperation DESC";

        conn.query(query, (err, result)=>{
            if(err) res.redirect("/");
            res.render("compte.ejs",{
                info:result
            });
        });
    }
}