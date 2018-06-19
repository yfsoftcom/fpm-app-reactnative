@echo off
@for /f %%i in ('cd') do @set pwd=%%i & goto a

:a
set "pwd=%pwd:\=/%"
set "pwd=%pwd: =%"
echo docker run -e API_TOKEN=21ccf6e7112469053d4aa7d6ca47187f -v %pwd%/android/app/build/outputs/apk/app-release.apk:/release.apk firhq/fir-cli:latest publish /release.apk
docker run -e API_TOKEN=21ccf6e7112469053d4aa7d6ca47187f -v %pwd%/android/app/build/outputs/apk/app-release.apk:/release.apk firhq/fir-cli:latest publish /release.apk