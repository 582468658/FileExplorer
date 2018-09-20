from django.shortcuts import render
import json
from treefile import models
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
@csrf_exempt
def list(request):
        file_list = models.FileTree.objects.all()
        files = []
        for file in file_list:
            print(repr(file))
            item = {}
            item['name'] = file.name
            item['type'] = file.type
            record_time = file.modifyTime.strftime("%Y-%m-%d %H:%M:%S")
            item['modifyTime'] = record_time
            files.append(item)
        response_data = json.dumps(files)
        print(response_data)

        return HttpResponse(response_data, "application/json")

@csrf_exempt
def list1(request):
    if request.method == "GET":
        return render(request, 'list.html')

    elif request.method == "POST":
        file_list = models.FileTree.objects.all()
        files = []
        for file in file_list:
            print(repr(file))
            item = {}
            item['name'] = file.name
            item['type'] = file.type
            record_time = file.modifyTime.strftime("%Y-%m-%d %H:%M:%S")
            item['modifyTime'] = record_time
            files.append(item)
        response_data = json.dumps(files)
        print(response_data)
        return HttpResponse(response_data, "application/json")


