const e = require('express');
const { Router } = require('express');
const router = Router();
const axios = require("axios").default;
 
router.get('/videoGames', async (req, res) => {
   
        await axios.get('https://api.rawg.io/api/games', {
            params: {
                key: '6939a943cde04da5996776f1789673e0',
                page: req.query.page,
                page_size: req.query.page_size,
            }
        }).then((response) => {
            res.status(200)
            .json(response.data)
        })
})

router.get('/videoGamesByTitle', async (req, res) => {
    await axios.get('https://api.rawg.io/api/games', {
        params: {
            key: '6939a943cde04da5996776f1789673e0',
            page: req.query.page,
            page_size: req.query.page_size,
            search: req.query.title
        }
    }).then((response) => {
        res.status(200)
        .json(response.data)
    })
})
 
module.exports = router;