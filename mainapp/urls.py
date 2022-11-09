from django.contrib import admin
from django.urls import path, include

import mainapp.views as mainapp

app_name = 'mainapp'

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', mainapp.accommodations, name='index'),
    path('accommodation_detail/<int:pk>/', mainapp.accommodation, name='accommodation'),
]
