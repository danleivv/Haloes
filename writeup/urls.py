from django.conf.urls import include, url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^(?P<pk>\d+)/$', views.detail, name='detail'),
    url(r'^editor/$', views.editor),
    url(r'^(?P<pk>\d+)/editor/$', views.edit, name='edit'),
    url(r'^(?P<pk>\d+)/comment/$', views.comment, name='comment'),
    url(r'^(?P<pk>\d+)/like/$', views.like, name='like'),
    url(r'^(?P<pk>\d+)/unlike/$', views.unlike, name='unlike'),
    url(r'^(?P<pk>\d+)/star/$', views.star, name='star'),
    url(r'^(?P<pk>\d+)/unstar/$', views.unstar, name='unstar'),
    url(r'^uploadImage/$', views.upload_image),
    url(r'^getChallenges/$', views.get_challenges),
    url(r'^submit/$', views.submit),
]
