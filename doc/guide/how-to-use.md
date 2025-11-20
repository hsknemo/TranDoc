# 如何使用 VTran
本文章面向具有前端经验的用户，因为涉及到前端环境安装，但如果您动手能力强的话，您也可以自己安装。


## 环境配置梗概
由于直接做成了前后台不分离的项目（``主要是打包vue 后的代码直接放到了Node环境下``）
> ``Node版本 >= 22``

> 采用``PM2``管理Node运行服务
## 安装
- Node(非nvm用户)
```shell
curl https://nodejs.org/dist/v22.2.0/
```

- nvm 用户
```shell
nvm install 22.2.0
```

- pm2 安装
```shell
npm install pm2 -g

```
- pm2 启动node项目
```shell
pm2 start app.js
```
前端环境
- pnpm
```shell
npm install -g pnpm
```

## 操作步骤
``前端代码``
- 获取 github 仓库代码(会有代码提交历史拉下)
```shell
git clone  https://github.com/hsknemo/vtran.git
```
or (不想要git 提交历史)
```shell
degit  hsknemo/vtran 【下载到本地的文件名称命名】
```

- degit 安装命令
```shell
npm install -g degit
```
- 使用[https://github.com/Rich-Harris/degit]
```shell
degit user/repo

# these commands are equivalent
degit github:user/repo
degit git@github.com:user/repo
degit https://github.com/user/repo

# download from GitLab
degit gitlab:user/repo
degit git@gitlab.com:user/repo
degit https://gitlab.com/user/repo

# download from BitBucket
degit bitbucket:user/repo
degit git@bitbucket.org:user/repo
degit https://bitbucket.org/user/repo

# download from Sourcehut
degit git.sr.ht/user/repo
degit git@git.sr.ht:user/repo
degit https://git.sr.ht/user/repo
```


``后端代码``
- 获取 github 仓库代码(会有代码提交历史拉下)
```shell
git clone  https://github.com/hsknemo/vtran-server.git
```
or (不想要git 提交历史)
```shell
degit  hsknemo/vtran-server 【下载到本地的文件名称命名】
```

## 部署步骤
- 前端代码下载后，安装好依赖直接 执行以下命令
```shell
vite-build
```
- 将产出代码复制到后台代码 `public` 文件夹即可
- 利用工具启动项目 端口默认`3000`
```shell
pm2 start app.js
```
