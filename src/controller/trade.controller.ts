import express from "express";
import Article from "../model/article.model";
// import { Article } from "../types/article";

type NewArticle = {
  title: string;
  description: string;
  image: string;
  location: string;
  price: number;
  isAdjustable: boolean;
};

// location 값이 있으면 location, 없으면 전체
// query string 은 url을 건드리는게 아니다 ?

const router = express.Router();
router.get("/articles", async (req, res) => {
  const { location } = req.query;
  if (!location) {
    const articles: Article[] = await Article.findAll();
    return res.status(200).json(articles);
  } else {
    const articles: Article[] = await Article.findAll({
      where: {
        //키와 변수명이 같을 때는 location: location, 을 location, 으로 변경 가능
        location,
      },
    });
    return res.status(200).json(articles);
  }
});

// router.get("/articles", async (req, res) => {
//   const articles: Article[] = await Article.findAll();
//   return res.status(200).json(articles);
// });

router.get("/articles/:articleId", async (req, res) => {
  const { articleId } = req.params;
  if (!articleId) {
    return res.status(400).json();
  }

  const articleIdNumber: number = parseInt(articleId, 10);
  const article: Article | null = await Article.findByPk(articleIdNumber);
  if (!article) {
    return res.status(404).json();
  }
  return res.status(200).json(article);
});

router.post("/articles", async (req, res) => {
  const newArticle: NewArticle = req.body as NewArticle;
  if (!newArticle) {
    return res.status(400).json();
  }
  const article = await Article.create({
    title: newArticle.title,
    description: newArticle.description,
    image: newArticle.image,
    location: newArticle.location,
    price: newArticle.price,
    isAdjustable: newArticle.isAdjustable,
  });
  return res.status(201).json({
    id: article.id,
  });
});

export default router;
