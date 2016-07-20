# -*- coding: utf-8 -*-
from django import forms


class CodeForm(forms.Form):
    code = forms.CharField(max_length=50)


class GroupNameForm(forms.Form):
    name = forms.CharField(max_length=50)


class GroupForm(forms.Form):
    pk = forms.IntegerField()


class TaskForm(forms.Form):
    content = forms.CharField(max_length=100)
    deadline = forms.DateField(required=False)
    assign = forms.CharField(required=False)
