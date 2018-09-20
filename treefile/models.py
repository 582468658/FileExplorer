from django.db import models

# Create your models here.
class FileTree(models.Model):
    id = models.AutoField(primary_key=True)
    parentId = models.IntegerField(null=False)
    level = models.IntegerField(null=True)
    name = models.TextField(max_length=60,null=False)
    type = models.CharField(max_length=32,null=False)
    modifyTime = models.DateTimeField(auto_now=True,null=True)
    userId = models.IntegerField(null=True)

