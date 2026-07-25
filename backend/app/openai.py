from openai import OpenAI
from app.config import OPENROUTER_API_KEY

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=OPENROUTER_API_KEY,
)


def generate_startup_plan(mission: str):

    prompt = f"""
You are MissionOS, an elite AI startup strategist.

Generate a professional startup plan for:

{mission}

Return using these sections:

# Executive Summary

# Problem Statement

# Solution

# Key Features

# Tech Stack

# Revenue Model

# Go-To-Market Strategy

# 30-60-90 Day Roadmap

# Risks

# Elevator Pitch

Make the answer suitable for winning a hackathon.
"""

    try:
        response = client.chat.completions.create(
            model="meta-llama/llama-3.3-70b-instruct",
            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        return response.choices[0].message.content

    except Exception as e:
        return f"OpenRouter Error: {e}"


def chat_with_ai(message: str):

    try:
        response = client.chat.completions.create(
            model="meta-llama/llama-3.3-70b-instruct",
            messages=[
                {
                    "role": "user",
                    "content": message
                }
            ]
        )

        return response.choices[0].message.content

    except Exception as e:
        return f"OpenRouter Error: {e}"