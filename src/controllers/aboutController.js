import express from "express";
const about = (req, res) =>{
    return res.render('index',{data: { title:'about', page: 'pages/about',req: req}});
}
export default about