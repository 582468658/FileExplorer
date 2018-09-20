function BE_CreateFolder_fake(parentFile)
{
      var newFile = new stdClass();
      newFile.id = "";
      newFile.parentId = parentFile.id;
      newFile.level = parentFile.level + 1;
      newFile.name = "untitle";
      newFile.type = "folder";
      newFile.modifyTime = "";
      newFile.userId = getCookie("userId");
      return newFile;
}