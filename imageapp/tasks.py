import os

from celery import shared_task


@shared_task
def transform_image(image_id):
    pass
