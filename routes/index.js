module.exports = {
    homePage: (req, res) => {
        let query="SELECT CompteBancaire.nom FROM CompteBancaire";

        conn.query(query, (err,result)=>{
            if(err) res.redirect("/");
            res.render("index.ejs", {
                info:result
            });
        });
    }
};