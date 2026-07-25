from openai import OpenAI

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key="YOUR_NEW_KEY",
)

try:
    response = client.chat.completions.create(
        model="openai/gpt-oss-20b:free",
        messages=[
            {"role": "user", "content": "Say hello"}
        ]
    )
    print(response.choices[0].message.content)
except Exception as e:
    print(e)