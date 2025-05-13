const express = require("express");
let{posts} = require("../data/db")
const router = express.Router();

// #INDEX
router.get("/", (req, res) =>{
    res.json({
        messagge:"Lettura della lista dei post",
        data: posts
    })
});
// #SHOW
router.get("/:id", (req, res) =>{
    const id = req.params.id;
    res.json({
        messagge:"Lettura al dettaglio del post" + id,
        data: posts,
    });
});
// #STORE
router.post("/", (req, res) =>{
    res.json("Creo un nuovo post" );
});
// #UPDATE
router.put("/:id", (req, res) =>{
    res.json("Sostituzione di un post");
});
// #MODIFY
router.patch("/:id", (req, res) =>{
    res.json("Modifica di un post");
});
// #DESTROY
router.delete("/:id", (req, res) =>{
    const id = req.params.id;
    res.json({
        messagge:"Eliminazione di un post" + id,
        data: posts
    });
});



module.exports = router;