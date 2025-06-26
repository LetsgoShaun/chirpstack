# ChirpStack UI 前端演示

这是一个ChirpStack前端框架的独立演示版本，可以在不依赖后端服务的情况下运行。

## 功能特性

- 🎨 现代化的React + TypeScript + Ant Design UI框架
- 📊 包含图表、表格、统计卡片等UI组件
- 🗺️ 支持地图显示功能
- 📱 响应式设计，支持移动端
- 🎯 模拟数据展示，无需后端服务

## 快速开始

### 1. 安装依赖

```bash
cd ui
npm install
```

### 2. 启动开发服务器

```bash
npm start
```

或者使用Makefile：

```bash
make server
```

### 3. 访问应用

打开浏览器访问：http://localhost:3000

## 演示内容

### Dashboard（仪表板）
- 统计卡片显示设备、网关、应用、组织数量
- 消息统计图表
- 最近活动列表

### Devices（设备管理）
- 设备列表表格
- 设备状态显示
- 操作按钮

### Gateways（网关管理）
- 网关列表表格
- 网关状态显示
- 位置信息

### 其他功能页面
- Applications（应用管理）
- Users（用户管理）
- Organizations（组织管理）
- API Keys（API密钥管理）
- Settings（设置）

## 技术栈

- **前端框架**: React 18
- **语言**: TypeScript
- **UI库**: Ant Design 5.x
- **构建工具**: Vite
- **图表**: Chart.js + react-chartjs-2
- **地图**: Leaflet + react-leaflet
- **路由**: React Router DOM
- **图标**: Ant Design Icons + FontAwesome

## 项目结构

```
ui/
├── src/
│   ├── views/
│   │   └── demo/
│   │       └── DemoApp.tsx          # 主演示应用
│   ├── mocks/
│   │   └── api-mock.ts              # 模拟API数据
│   ├── App.tsx                      # 应用入口
│   └── index.tsx                    # 渲染入口
├── package.json                     # 项目配置
├── vite.config.ts                   # Vite配置
└── README-DEMO.md                   # 本文件
```

## 自定义配置

### 修改端口
在 `vite.config.ts` 中修改端口：

```typescript
server: {
  port: 3000,  // 修改为其他端口
  host: true,
},
```

### 添加更多模拟数据
在 `src/mocks/api-mock.ts` 中添加更多模拟数据和服务。

### 自定义样式
在 `src/index.css` 中添加自定义样式。

## 构建生产版本

```bash
npm run build
```

构建后的文件将输出到 `build/` 目录。

## 注意事项

1. 这是一个演示版本，所有数据都是模拟数据
2. 不包含真实的API调用和后端集成
3. 主要用于展示前端框架的UI组件和布局能力
4. 如果需要完整功能，请参考原始ChirpStack项目

## 故障排除

### 端口被占用
如果3000端口被占用，Vite会自动选择下一个可用端口。

### 依赖安装失败
尝试清除缓存后重新安装：
```bash
rm -rf node_modules package-lock.json
npm install
```

### 构建失败
检查TypeScript错误：
```bash
npm run lint
```

## 许可证

本项目遵循ChirpStack的许可证。 