import express from "express";
import cors from "cors";
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import { z } from "zod";

const app = express();
const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL ?? "" }),
});

app.use(cors());
app.use(express.json());


const createPostSchema = z.object({
  content: z.string().min(1, "Content cannot be empty"),
});

/**
 * GET /post
 */
app.get("/post", async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });

    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

/**
 * POST /post
 */
app.post("/post", async (req, res) => {
  try {
    const parsed = createPostSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        error: parsed.error.flatten(),
      });
    }

    const newPost = await prisma.post.create({
      data: {
        content: parsed.data.content,
      },
    });

    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
