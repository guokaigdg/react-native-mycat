## 更新GitHub仓库
### 一. 查看状态, 查看当前的git仓库状态

    git status
-   git status可以看到On branch master,这个说明已经在master分之上了


### 二. 更新代码
##### 1.更新全部
    git add .
##### 2.更新说明, commit只是提交到缓存区域（更新说明不能省略)

    git commit -m "更新说明"
##### 3.提交到远程github库

    git push -u origin master
