from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.models import MissionRequest, ChatRequest
from app.openai import generate_startup_plan, chat_with_ai

app = FastAPI(
    title="MissionOS API",
    version="1.0.0",
    description="AI-powered Startup Operating System"
)

# Allow frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to your frontend URL later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {
        "status": "running",
        "message": "MissionOS Backend is Live 🚀"
    }


@app.post("/mission")
async def mission(request: MissionRequest):
    response = generate_startup_plan(request.mission)
    return {
        "success": True,
        "data": response
    }


@app.post("/chat")
async def chat(request: ChatRequest):
    response = chat_with_ai(request.message)
    return {
        "success": True,
        "response": response
    }