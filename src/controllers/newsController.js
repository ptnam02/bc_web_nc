import express from "express";
import newsModel from "./../sevices/newsModel";
const showAllNews = async(req, res) =>{
    const listNews = await newsModel.getAllNews();
    res.render('index',{data: { title:'tin tuc', page: 'pages/news/news',req: req, listNews : listNews}});
}
const newsDetail = async(req, res)=>{
    let newsId = req.params.newsId;
    const news = await newsModel.detailNews(newsId);
    return res.render('index',{data: { title:"xem tin", page: 'pages/news/newsDetail',req: req,  news : news}});
}
export default {showAllNews,newsDetail};