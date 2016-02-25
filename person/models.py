from django.db import models
from challenge.models import Challenge

class Person(models.Model):
    name = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50)
    major = models.CharField(max_length=10, default='')
    score = models.PositiveIntegerField(default=0)
    school = models.CharField(max_length=50, blank=True)
    mail = models.EmailField()
    blog = models.URLField()
    avatar = models.FilePathField(default='/default.png')
    follow = models.ManyToManyField('self', symmetrical=False)
    team = models.ForeignKey('team.Team', null=True, blank=True, on_delete=models.SET_NULL)


class Submit(models.Model):
    person = models.ForeignKey(Person)
    challenge = models.ForeignKey(Challenge)
    date = models.DateTimeField(auto_now_add=True)
    status = models.BooleanField()
