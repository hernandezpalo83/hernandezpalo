import asyncio
import reflex as rx

from hernandezpalo.api.api import actualiza_cache

class DailyTaskState(rx.State):
    # Your state variables and logic here
    @rx.background
    async def daily_task(self):
        while True:
            # Actualiza las tablas del cache uuna vez al dia
            await actualiza_cache()

            # Wait for 24 hours (86400 seconds) before running the task again
            await asyncio.sleep(86400)