(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{419:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("默认的启动脚本是"),r("code",[t._v("/bin/oapService.sh")]),t._v("(.bat)。\n阅读"),r("router-link",{attrs:{to:"./backend-start-up-mode.html"}},[t._v("start up mode")]),t._v(" 可了解启动backend的其它选项。")],1),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("这个设置文件背后的核心概念是，Skywalking的Collector基于纯模块化设计。\n最终用户可以根据自己的需求切换或组装收集器功能。")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("事例:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),r("p",[t._v("同时，模块包括必选模块和可选模块，所需模块提供了backend的框架。即使模块化支持可插拔，删除这些模块也是没有意义的。我们强烈建议你不要试图更改这些模块的API，除非您非常了解Skywalking项目及其代码。")]),t._v(" "),r("p",[t._v("必须的模块列表")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),r("p",[t._v("在理解了设置文件结构之后，您可以选择您感兴趣的功能文档。\n我们建议您按照以下顺序阅读功能文档。")]),t._v(" "),r("ol",[r("li",[r("router-link",{attrs:{to:"./backend-setting-override.html"}},[t._v("Overriding settings")]),t._v("。支持重写application.yml中的设置。")],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"./backend-ip-port.html"}},[t._v("IP and port setting")]),t._v("。介绍如何设置和使用IP和端口。")],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"./backend-init-mode.html"}},[t._v("Backend init mode startup")]),t._v("。如何初始化环境并优雅地退出。\n在尝试初始化新群集之前，请阅读此内容。")],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"./backend-cluster.html"}},[t._v("Cluster management")]),t._v("。指导您将backend服务器设置为群集模式。")],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"./backend-k8s.html"}},[t._v("Deploy in kubernetes")]),t._v(".。指导您构建和使用Skywalking图像，并在K8S中部署。")],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"./backend-storage.html"}},[t._v("Choose storage")]),t._v(".如我们所知，在默认的快速启动中，backend 使用h2数据库运行。但显然，它不符合产品环境。在这里，你可以找到其他的选择。\n选择你喜欢的，我们也欢迎任何人贡献新的存储实施者，")],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"./backend-receivers.html"}},[t._v("Set receivers")]),t._v("。 你可以根据你的要求选择接收者，大多数接收者是无害的，至少我们的默认接收器是无害的。您可以设置并激活所有提供的接收器。")],1),t._v(" "),r("li",[t._v("在backend进行"),r("router-link",{attrs:{to:"./trace-sampling.html"}},[t._v("trace sampling")]),t._v(" 。 此示例保持度量的准确性，但不保存某些存储中依赖于速率的traces。")],1),t._v(" "),r("li",[t._v("根据 "),r("router-link",{attrs:{to:"./slow-db-statement.html"}},[t._v("slow DB statement threshold")]),t._v(" 配置文档可了解如何检测系统中的慢速数据库语句（包括SQL语句）。")],1),t._v(" "),r("li",[t._v("官方 "),r("router-link",{attrs:{to:"./../../guides/backend-oal-scripts.html"}},[t._v("OAL scripts")]),t._v("。正如您从我们的"),r("router-link",{attrs:{to:"./../../concepts-and-designs/oal.html"}},[t._v("OAL introduction")]),t._v("中所知，大多数backend分析功能都基于脚本。这是对官方手稿的描述，这有助于您了解正在处理的度量数据，也可以用于警报。")],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"./backend-alarm.html"}},[t._v("Alarm")]),t._v(". 告警提供基于时间序列的检查机制。你可以设置针对分析OAL度量对象的告警规则。")],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"./advanced-deployment.html"}},[t._v("Advanced deployment options")]),t._v("。如果你需要部署的backend有很大的扩展性并支持高负载，你需要看看这个。")],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"./metrics-exporter.html"}},[t._v("Metrics exporter")]),t._v(". 使用metrics data导出器将metric数据转发给第三方系统。")],1)]),t._v(" "),t._m(12),t._v(" "),r("p",[t._v("OAP后端集群本身的底层是一个分布式流处理系统。为了帮助运营团队，我们为OAP后端本身提供遥测。按照"),r("router-link",{attrs:{to:"./backend-telemetry.html"}},[t._v("document")]),t._v("使用它。")],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"backend启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backend启动","aria-hidden":"true"}},[this._v("#")]),this._v(" Backend启动")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("首先也是最重要的是，Skywalking backend启动行为由"),e("code",[this._v("config/application.yml")]),this._v("驱动。\n了解这个设置文件将帮助您阅读此文档。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"启动脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动脚本","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动脚本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"application-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#application-yml","aria-hidden":"true"}},[this._v("#")]),this._v(" application.yml")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("所有, 在"),e("code",[this._v("application.yml")]),this._v("里有三个级别。")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[r("li",[r("strong",[t._v("Level 1")]),t._v(", 模块名。说明该模块在运行模式可用。")]),t._v(" "),r("li",[r("strong",[t._v("Level 2")]),t._v(", 提供者名。 设置模块的提供者名。")]),t._v(" "),r("li",[r("strong",[t._v("Level 3")]),t._v(". 提供者的设置。")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-yaml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-yaml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("core")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("default")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restHost")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.0.0.0\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restPort")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("12800")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restContextPath")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gRPCHost")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.0.0.0\n    "),r("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("gRPCPort")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("11800")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[r("li",[r("strong",[t._v("core")]),t._v(" 就是模块。.")]),t._v(" "),r("li",[r("strong",[t._v("default")]),t._v(" 是core模块的默认实现。.")]),t._v(" "),r("li",[r("code",[t._v("restHost")]),t._v(", "),r("code",[t._v("restPort")]),t._v(", ... "),r("code",[t._v("gRPCHost")]),t._v(" 是实现者的所有设置项。")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",[r("li",[r("strong",[t._v("Core")]),t._v("。做所有数据分析和流调度的基本和主要框架。")]),t._v(" "),r("li",[r("strong",[t._v("Cluster")]),t._v("。管理集群中的多个后端实例，这可以提供高吞吐量的处理能力。")]),t._v(" "),r("li",[r("strong",[t._v("Storage")]),t._v("。持久化分析结果。")]),t._v(" "),r("li",[r("strong",[t._v("Query")]),t._v("。提供查询接口给UI。")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("对于"),r("strong",[t._v("Cluster")]),t._v(" 和"),r("strong",[t._v("Storage")]),t._v(" 有多个实现者(提供者), 查看 "),r("a",{attrs:{href:"#advanced-feature-document-link-list"}},[t._v("link list")]),t._v("下的 "),r("strong",[t._v("Cluster management")]),t._v("\n和 "),r("strong",[t._v("Choose storage")]),t._v(" 的文档。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("一些"),e("strong",[this._v("receiver")]),this._v(" 模块也提供了。\nReceiver是一个模块，负责接受后端的传入数据请求。大多数（所有）通过一些rpc协议，如GRPC和HTTPrestful提供。\nReceiver有许多不同的模块名，你可以阅读"),e("a",{attrs:{href:"#advanced-feature-document-link-list"}},[this._v("link list")]),this._v("中的"),e("strong",[this._v("Set receivers")]),this._v("文档。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"高级特性的文档链接列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#高级特性的文档链接列表","aria-hidden":"true"}},[this._v("#")]),this._v(" 高级特性的文档链接列表")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"backend遥测"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backend遥测","aria-hidden":"true"}},[this._v("#")]),this._v(" backend遥测")])}],!1,null,null,null);e.default=s.exports}}]);