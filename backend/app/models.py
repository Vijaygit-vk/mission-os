from pydantic import BaseModel


class MissionRequest(BaseModel):
    mission: str


class ChatRequest(BaseModel):
    message: str