from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include # Make sure you have these imports

urlpatterns = [
            # your other url patterns
    ]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    
     # For serving files from STATICFILES_DIRS during development:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS[0]) # Adjust index if you have multiple STATICFILES_DIRS