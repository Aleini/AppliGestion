module.exports = {
    addOperation: (req,res) => {
        let libelle = req.body.libelle;
        let type = req.body.type;
        let date = req.body.date;
        let montant = req.body.montant;

        let query = "INSERT INTO `Operation` (Operation.Libellé, Operation.Type, Operation.DateOperation, Operation.Montant) VALUES ('" + libelle + "','" + type + "','" + date + "','" + montant + "')";
        
        conn.query(query,(err,result)=> {
            if(err) return res.status(500).send(err);
            res.redirect('/compte');
        });
    }
}