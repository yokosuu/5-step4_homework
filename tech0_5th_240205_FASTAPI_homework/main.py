from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import random

app = FastAPI()

# 分数を返す
nokorijikan_results = [
    "当たり：あと5分遊んでいいよ",
    "当たり：あと10分遊んでいいよ",
    "大当たり：あと15分遊んでいいよ",
    "はずれ：すぐにお風呂に入ろう",
]

@app.get("/nokorijikan")
def get_nokorijikan():
    result = random.choice(nokorijikan_results)
    return {"result": result}