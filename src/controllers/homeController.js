import express from "express";
import newsModel from "./../sevices/newsModel";
const home = async(req, res) =>{
    const listNews = await newsModel.getNewsNew();
    return res.render('index',{data: { title:'home', page: 'pages/home',req: req,listNews:listNews}});
}
export default home