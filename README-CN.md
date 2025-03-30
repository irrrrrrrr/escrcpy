<div style="display:flex;">
  <img src="https://cdn.jsdelivr.net/gh/viarotel-org/escrcpy@main/electron/resources/build/logo.png" alt="viarotel-escrcpy" width="108px">
</div>

# Escrcpy

[![GitCode](https://gitcode.com/viarotel-org/escrcpy/star/badge.svg)](https://gitcode.com/viarotel-org/escrcpy)
[![Gitee](https://gitee.com/viarotel-org/escrcpy/badge/star.svg?theme=dark)](https://gitee.com/viarotel-org/escrcpy)
[![GitHub](https://img.shields.io/github/stars/viarotel-org/escrcpy?label=Github%20Stars)](https://github.com/viarotel-org/escrcpy)

📱 使用图形界面的 Scrcpy 显示和控制您的 Android 设备，由 Electron 驱动。[English Document](https://github.com/viarotel-org/escrcpy/blob/main/README.md)

<div style="display:flex;">
  <img src="./screenshots/zh-CN/overview.jpg" alt="viarotel-escrcpy" width="100%">
</div>

## 特点

- 🏃 同步：得益于 Web 技术，将更快速的与 Scrcpy 保持同步
- 🤖 自动化：自动连接设备、自动执行镜像、自定义脚本、计划任务
- 💡 定制化：多设备管理、独立配置、自定义备注、配置导入导出
- 📡 无线：通过扫描二维码快速连接
- 🔗 反向供网：Gnirehtet 反向供网
- 🎨 主题：浅色模式、深色模式、跟随系统切换
- 😎 轻巧度：本机支持，仅显示设备屏幕
- ⚡️ 性能：30~120 帧每秒，取决于设备
- 🌟 质量：1920×1080 或更高
- 🕒 低延迟：35~70 毫秒
- 🚀 快速启动：显示第一张图片仅需约 1 秒钟
- 🙅‍♂️ 非侵入性：不会在安卓设备上留下任何安装文件
- 🤩 用户收益：无需账户、无广告、无需互联网连接
- 🗽 自由：免费且开源软件

## 安装

### 通过发布的软件包手动安装

查看 [发布地址](https://github.com/viarotel-org/escrcpy/releases)

### macOS 可以通过 Homebrew 安装

请参阅 [homebrew-escrcpy](https://github.com/viarotel-org/homebrew-escrcpy)

## 快速上手

### USB 连接

> 注意：如果手机上提示调试授权请点击允许

1. 安卓手机需开启开发者模式并打开 USB 调试
2. 打开 Escrcpy 并将安卓手机连接到你的电脑
3. 这时 Escrcpy 设备列表应该已经检测到你的手机，点击开始镜像
4. 开始享受吧

### WIFI 连接

#### 扫描二维码连接
1. 同 USB 连接中的 1-2 步骤
2. 在开发者模式中打开并进入无线调试
3. 点击使用二维码配对设备
4. 开始享受吧

#### 通过IP地址连接

> 注意：如果首次无线连接失败，你可能需要无线配对请参阅 [常见问题](#常见问题)
>
> 注意：需同时开启无线调试功能，并在无线调试页面中获取你的当前设备的无线地址（通常为你连接 WIFI 时分配的 IP 地址）及端口号（默认为 5555）
 
1. 同 USB 连接中的 1-2 步骤
2. 将获取到的设备 IP 地址及端口号填写到 Escrcpy 中，然后点击连接设备
3. 这时 Escrcpy 设备列表应该已经检测到你的手机，点击开始镜像
4. 开始享受吧

### macOS && Linux

> 注意：在 Escrcpy@1.27.1+ 中初步集成了 scrcpy 二进制文件，无需手动安装 scrcpy。

1. Linux 可参阅的 [安装文档](https://github.com/Genymobile/scrcpy/blob/master/doc/linux.md)
2. macOS 可参阅的 [安装文档](https://github.com/Genymobile/scrcpy/blob/master/doc/macos.md)
3. 安装上述依赖成功后步骤同 USB 连接 和 WIFI 连接

### Gnirehtet 反向供网

> 注意: macOS 内部没有集成如需使用需要手动安装 [安装文档](https://github.com/Genymobile/gnirehtet)

Windows 及 Linux 端内部集成了 Gnirehtet， 用于提供 PC 到安卓设备的反向供网功能。

## 开发人员

如果你是开发人员，希望运行或帮助改进该项目请参阅 [开发文档](https://github.com/viarotel-org/escrcpy/blob/main/develop.md)

## 快捷键

请参阅 [scrcpy/doc/shortcuts](https://github.com/Genymobile/scrcpy/blob/master/doc/shortcuts.md)

## 设备操作

### 批量处理

- 批量截取屏幕
- 批量安装应用
- 批量文件管理
- 批量执行脚本
- 批量计划任务

### 控制模式

- 镜像
- 录制
- 录制相机
- 录制音频
- 相机
- 灵活启动
- OTG

### 设备交互栏

- 切换键
- 主屏幕
- 返回键
- 启动APP(多屏协同)
- 关闭屏幕(实验性)
- 通知栏
- 电源键
- 旋转屏幕
- 音量控制
- 截取屏幕
- 重启设备
- 安装应用
- 文件管理
- 执行脚本
- 计划任务
- 反向供网（Gnirehtet）

## 偏好设置

> 持续完善中 目前支持以下常用配置

### 通用

- 主题
- 语言
- 文件存储路径
- Adb 路径
- Scrcpy 路径
- Gnirehtet 路径
- Scrcpy 参数
- 自动连接设备
- 自动执行镜像
- Gnirehtet 修复
- 调试
- 浮动控制栏

### 视频控制

- 禁用视频转发
- 最大尺寸
- 视频比特率
- 刷新率
- 视频编码
- 显示方向
- 旋转角度
- 屏幕裁剪
- 显示器
- 视频缓冲
- 接收器(v4l2)缓冲

### 设备控制

- 展示触摸点
- 保持唤醒
- 控制时关闭屏幕
- 控制结束关闭屏幕
- 控制时禁用自动亮屏
- 模拟辅助显示器

### 窗口控制

- 窗口宽度
- 窗口高度
- 窗口横坐标
- 窗口纵坐标
- 无边框模式
- 全屏模式
- 始终位于顶部
- 禁用屏幕保护程序

### 音频控制

- 禁用音频转发
- 保持设备音频
- 音频源
- 音频编码
- 音频比特率
- 音频缓冲
- 音频输出缓冲

### 音视频录制

- 录制视频格式
- 录制视频方向
- 录制时长
- 禁用视频播放
- 禁用音频播放

### 输入控制

- 鼠标模式
- 鼠标绑定
- 键盘模式
- 键盘注入方式
- 游戏手柄

### 摄像控制

- 摄像源
- 摄像尺寸
- 摄像比例
- 摄像帧率

## 下一步做什么？

> 优先级从高到低

1. 更好的标志 ✅
2. 软件更新功能 ✅
3. 录制和保存音视频 ✅
4. 设备快捷交互控制栏 ✅
5. 自定义 Adb 及 Scrcpy 依赖 ✅
6. 自定义设备名称 ✅
7. 偏好设置的导出及导入 ✅
8. 对单个设备进行独立配置 ✅
9. 添加 macOS 及 linux 操作系统的支持 ✅
10. 国际化 ✅
11. 深色模式 ✅
12. 反向供网（Gnirehtet） ✅
13. 相机镜像 ✅
14. 多屏协同 ✅
15. 文件推送、旋转屏幕、音频控制 ✅
16. 批量连接历史设备 ✅
17. 内置终端 ✅
18. 自动执行镜像 ✅
19. 灵活启动镜像 ✅
20. 批量处理 ✅
21. 计划任务 ✅
22. 图形化文件管理器 ✅
23. 浮动操作栏 ✅
24. 增强录制功能 ✅
25. 启动APP(多线程) ✅
26. 主窗口贴边隐藏 ✅
27. 对设备进行分组(通过筛选备注) ✅
28. 改进历史设备连接体验 ✅
29. 文件管理支持上传目录 ✅
30. 支持将打开APP添加到桌面快捷方式(仅限Windows) ✅
31. 支持批量启动设备 ✅
32. 改进设置镜像窗口位置及大小的方式 🚧
33. 改进批量连接设备的体验 🚧
34. 支持图形化脚本编排工具 🚧

## 常见问题

### 电脑连接设备后无法检测到

1. 请重新插拔你的设备，并确认设备同意了 USB 调试授权窗口。
2. 如果还不行，你的电脑可能缺少必要的驱动程序，请使用第三方工具 如：驱动精灵，安装必要的驱动后重试。

### 无法输入中文

> 在 Scrcpy@2.4+ 及以上版中，解决方法如下

1. Escrcpy 设置：在 `偏好设置` → `输入控制` → `键盘模式` 中选择 `uhid` 模式。
2. 设备输入法准备：安装支持物理键盘的输入法（推荐微信输入法）并完成配置。
3. 启动镜像：在 Escrcpy 中点击 `开始镜像`。验证：设备中 `设置` → `系统` → `语言和输入` 应显示 `实体键盘` 和 `屏幕键盘` 选项。
4. 设备输入设置：在 `屏幕键盘` 中启用微信输入法。在 `实体键盘` 中配置键盘布局，使其与计算机键盘一致（仅需一次）。
5. 计算机输入准备：将输入模式设为英文（重要）。
6. 切换输入语言：使用 `Ctrl` + `Shift` 在中英文间切换。
7. 开始使用。

[下载微信输入法](https://z.weixin.qq.com/)

### 无线连接提示： 目标计算机积极拒绝访问

第一次无线连接可能需要配对 或 插入 USB 以保证与电脑建立连接即授权成功后方可使用

### 通过数据线连接后点击无线模式没有反应

请再点一次，或点击刷新设备，一般不会超过两次，如果还不行，请提供机型和安卓版本信息到 [Issues](https://github.com/viarotel-org/escrcpy/issues)

### 设备交互控制栏为什么不设计为自动跟踪吸附的悬浮菜单?

需要注意的是 Escrcpy 原则上只是基于 Scrcpy 实现的 GUI 版本，尽管它确实扩展了一些功能，但是这些功能都是不影响 Scrcpy 核心的前提下，而如果要实现该功能我将不得不对 Scrcpy 底层进行修改，这会使 Escrcpy 更难以与 Scrcpy 保持同步更新，这将得不偿失。
因此，综合考虑，我们决定采用现有的方案，并期待 Scrcpy 未来能够增加原生交互控制栏的支持。

### 某些设备连接镜像后可以看到画面但是无法操作

> 注意：以小米手机为例，不仅需要开启 USB 调试还需要开启 USB 调试（安全设置）也就是允许通过 USB 调试修改权限或模拟点击的功能

可供参阅的详细说明 [鼠标和键盘不工作的原因](https://github.com/Genymobile/scrcpy/blob/master/FAQ.md#mouse-and-keyboard-do-not-work)

### 下载软件包时提示报毒导致无法正常下载

> 经过反馈，有时在 Windows 环境下，由于软件包没有进行证书签名，可能会被 Windows Defender 误认为有害而导致拦截提示，可以尝试以下解决方法

1. 打开 `Windows 安全中心`。
2. 选择 `病毒和威胁防护`。
3. 在 `病毒和威胁防护设置` 下，点击 `管理设置`。
4. 找到 `实时保护`，如果权限允许，可以尝试点击关闭。如果无法关闭实时保护，请跳过此步骤。
5. 向下滑动页面，找到 `排除项`，点击 `添加或删除排除项`。
6. 添加您下载软件包的文件夹路径作为排除项，即将该文件夹添加到`排除列表`中。

### 获取设备列表失败或开始镜像/录屏报错

> 该问题一般是 `Adb` 或 `Scrcpy` 依赖路径错误导致的，可以尝试以下解决方法

1. 在菜单中选择 `偏好设置`，然后在 `Global 模式` 下点击右上角的 `重置配置`。
2. 接下来，进入 `设备列表` 页面，并尝试重新开启镜像功能。
3. 如果问题仍然存在，请确保您已下载并安装了最新版本的 `Escrcpy`。
4. 按下 `Ctrl` + `Shift` + `I` 进入开发者工具，并查看是否有任何报错信息。
5. 如果有报错，请截图并在 [反馈问题](https://github.com/viarotel-org/escrcpy/issues) 页面中提交您的问题。

### macOS 关闭窗口选择最小化到托盘后顶部右侧状态栏找不到图标

> 这个一般是状态栏图标过多导致无法展示 Escrcpy 的图标 推荐用以下工具解决

- [iBar](https://www.better365.cn/ibar.html)
- [Bartender](https://www.macbartender.com/)

### macOS 安装成功后打开提示文件损坏

> 这个通常是因为软件包本身没有签名导致的，可以尝试以下解决方法

1. 终端中执行 `sudo spctl --master-disable` 以允许任何来源
2. 终端中执行 `sudo xattr -r -d com.apple.quarantine /Applications/Escrcpy.app` 以尝试修复提示软件包损坏

### 无法定位程序输入点 DiscardVirtualMemory 于动态链接库 KERNEL32.dll 上。

仅支持 `Windows 10` 及更高版本。

### 音频捕获异常导致镜像失败

> 通常是因为您的计算机缺少音频输出，或者您的 Android 版本过低（Android 11+）。

请尝试通过`偏好设置`中的`禁用音频转发`功能，以解决此问题。

### 微软商店版本启动镜像报错

> 这是因为该版本的安装目录内部文件没有可执行权限导致的

你需要自定义 `scrcpy` 以及 `adb` 的文件路径（确保具有可执行权限），如果用到反向供网则同样需要以同样方法配置 `gnirehtet`。

### Could not execute "adb start-server"

这可能是因为安装路径中包含中文或特殊字符导致的，请尝试更改安装路径。

### Linux 系统中安装后无法打开

> 一些流行的发行版（如 Ubuntu 24.04）对 AppImage 应用程序实施了新的限制，限制了沙箱的使用。临时解决方法如下：

```shell
sudo chmod 4755 /opt/Escrcpy/chrome-sandbox
```

## 获得帮助

> 因为是开源项目 全靠爱发电 所以支持有限 更新节奏不固定

- issues: [反馈问题](https://github.com/viarotel-org/escrcpy/issues)
- email: viarotel@qq.com

## 致谢

该项目的诞生离不开以下开源项目

- [scrcpy](https://github.com/Genymobile/scrcpy)
- [adbkit](https://github.com/DeviceFarmer/adbkit)
- [electron](https://www.electronjs.org/)
- [vue](https://vuejs.org/)
- [gnirehtet](https://github.com/Genymobile/gnirehtet/)

## 赞助项目

> 如果该项目帮到你的话，可以请我喝杯咖啡，让我更有精神完善该项目 😛

<div style="display:flex;">
  <img src="https://cdn.jsdelivr.net/gh/viarotel-org/escrcpy@main/src/assets/sponsor/viarotel-wepay.png" alt="viarotel-wepay" width="30%">
  <img src="https://cdn.jsdelivr.net/gh/viarotel-org/escrcpy@main/src/assets/sponsor/viarotel-alipay.png" alt="viarotel-alipay" width="30%">
  <a href="https://www.paypal.com/paypalme/viarotel" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.jsdelivr.net/gh/viarotel-org/escrcpy@main/src/assets/sponsor/viarotel-paypal.png" alt="viarotel-paypal" width="30%">
  </a>
</div>

## 贡献者

感谢他们的所做的一切贡献！

[Contributors](https://github.com/viarotel/escrcpy/graphs/contributors)

## Star 历史

[![Star History Chart](https://api.star-history.com/svg?repos=viarotel-org/escrcpy&type=Date)](https://star-history.com/#viarotel-org/escrcpy&Date)
