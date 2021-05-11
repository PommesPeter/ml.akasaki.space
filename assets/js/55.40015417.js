(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{580:function(t,s,a){"use strict";a.r(s);var n=a(46),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"多层感知机的代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多层感知机的代码实现"}},[t._v("#")]),t._v(" 多层感知机的代码实现")]),t._v(" "),a("p",[t._v("我们已经从上一节里了解了多层感知机的原理。下面，我们一起来动手实现一个多层感知机。首先导入实现所需的包或模块。")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" tensorflow "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" tf\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sys\nsys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 为了导入上层目录的d2lzh_tensorflow")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" d2lzh_tensorflow2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" d2l\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__version__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("h2",{attrs:{id:"手动实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动实现"}},[t._v("#")]),t._v(" 手动实现")]),t._v(" "),a("h3",{attrs:{id:"获取和读取数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取和读取数据"}},[t._v("#")]),t._v(" 获取和读取数据")]),t._v(" "),a("p",[t._v("这里继续使用Fashion-MNIST数据集。我们将使用多层感知机对图像进行分类。")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tensorflow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasets "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" fashion_mnist\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fashion_mnist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbatch_size "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),t._v("\nx_train "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("float32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nx_test "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("float32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nx_train "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x_train"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),t._v("\nx_test "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x_test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),t._v("\ntrain_iter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_tensor_slices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("batch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("batch_size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntest_iter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("from_tensor_slices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("batch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("batch_size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h3",{attrs:{id:"定义模型参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义模型参数"}},[t._v("#")]),t._v(" 定义模型参数")]),t._v(" "),a("p",[t._v("我们在3.6节（softmax回归的从零开始实现）里已经介绍了，Fashion-MNIST数据集中图像形状为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mn",[t._v("28")]),a("mo",[t._v("×")]),a("mn",[t._v("28")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("28 \\times 28")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"mord"},[t._v("28")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("×")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[t._v("28")])])])]),t._v("，类别数为10。本节中我们依然使用长度为 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mn",[t._v("28")]),a("mo",[t._v("×")]),a("mn",[t._v("28")]),a("mo",[t._v("=")]),a("mn",[t._v("784")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("28 \\times 28 = 784")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.72777em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"mord"},[t._v("28")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("×")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[t._v("28")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("=")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),a("span",{staticClass:"mord"},[t._v("784")])])])]),t._v(" 的向量表示每一张图像。因此，输入个数为784，输出个数为10。实验中，我们设超参数隐藏单元个数为256。")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("num_inputs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num_outputs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num_hiddens "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("784")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),t._v("\nW1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("normal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shape"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num_inputs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num_hiddens"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("mean"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stddev"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dtype"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("float32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nb1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("zeros"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num_hiddens"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dtype"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("float32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nW2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("normal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("shape"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num_hiddens"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num_outputs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("mean"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stddev"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dtype"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("float32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nb2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Variable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("random"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("normal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("num_outputs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" stddev"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"定义激活函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义激活函数"}},[t._v("#")]),t._v(" 定义激活函数")]),t._v(" "),a("p",[t._v("这里我们使用基础的"),a("code",[t._v("max")]),t._v("函数来实现ReLU，而非直接调用"),a("code",[t._v("relu")]),t._v("函数。")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("relu")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maximum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"定义模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义模型"}},[t._v("#")]),t._v(" 定义模型")]),t._v(" "),a("p",[t._v("同softmax回归一样，我们通过"),a("code",[t._v("reshape")]),t._v("函数将每张原始图像改成长度为"),a("code",[t._v("num_inputs")]),t._v("的向量。然后我们实现上一节中多层感知机的计算表达式。")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("net")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    X "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reshape"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" shape"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num_inputs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    h "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" relu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("matmul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("X"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" W1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("softmax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("matmul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" W2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"定义损失函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义损失函数"}},[t._v("#")]),t._v(" 定义损失函数")]),t._v(" "),a("p",[t._v("为了得到更好的数值稳定性，我们直接使用Tensorflow提供的包括softmax运算和交叉熵损失计算的函数。")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loss")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y_hat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y_true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("losses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sparse_categorical_crossentropy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y_true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y_hat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"训练模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#训练模型"}},[t._v("#")]),t._v(" 训练模型")]),t._v(" "),a("p",[t._v("训练多层感知机的步骤和3.6节中训练softmax回归的步骤没什么区别。我们直接调用"),a("code",[t._v("d2l")]),t._v("包中的"),a("code",[t._v("train_ch3")]),t._v("函数，它的实现已经在3.6节里介绍过。我们在这里设超参数迭代周期数为5，学习率为0.5。")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("num_epochs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),t._v("\nparams "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("W1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" W2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nd2l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("train_ch3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("net"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" train_iter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" test_iter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num_epochs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" batch_size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("输出：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("epoch 1, loss 0.8208, train acc 0.693, test acc 0.804\nepoch 2, loss 0.4784, train acc 0.822, test acc 0.832\nepoch 3, loss 0.4192, train acc 0.843, test acc 0.850\nepoch 4, loss 0.3874, train acc 0.857, test acc 0.858\nepoch 5, loss 0.3651, train acc 0.864, test acc 0.860\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("hr"),t._v(" "),a("h2",{attrs:{id:"使用框架实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用框架实现"}},[t._v("#")]),t._v(" 使用框架实现")]),t._v(" "),a("p",[t._v("下面我们使用Tensorflow来实现上一节中的多层感知机。首先导入所需的包或模块。")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" tensorflow "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" tf\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tensorflow "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" keras\nfashion_mnist "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fashion_mnist\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"定义模型-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义模型-2"}},[t._v("#")]),t._v(" 定义模型")]),t._v(" "),a("p",[t._v("和softmax回归唯一的不同在于，我们多加了一个全连接层作为隐藏层。它的隐藏单元个数为256，并使用ReLU函数作为激活函数。")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("model "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Sequential"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Flatten"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input_shape"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dense"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" activation"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'relu'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dense"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" activation"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'softmax'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"读取数据并训练模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取数据并训练模型"}},[t._v("#")]),t._v(" 读取数据并训练模型")]),t._v(" "),a("p",[t._v("我们使用之前训练softmax回归几乎相同的步骤来读取数据并训练模型。")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("fashion_mnist "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fashion_mnist\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fashion_mnist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nx_train "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x_train "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),t._v("\nx_test "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" x_test "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),t._v("\nmodel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("optimizer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("tf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("keras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("optimizers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SGD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             loss "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sparse_categorical_crossentropy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             metrics"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accuracy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmodel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y_train"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" epochs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              batch_size"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              validation_data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              validation_freq"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("输出：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Train on 60000 samples, validate on 10000 samples\nEpoch 1/5\n60000/60000 [==============================] - 2s 33us/sample - loss: 0.7428 - accuracy: 0.7333 - val_loss: 0.5489 - val_accuracy: 0.8049\nEpoch 2/5\n60000/60000 [==============================] - 1s 22us/sample - loss: 0.4774 - accuracy: 0.8247 - val_loss: 0.4823 - val_accuracy: 0.8288\nEpoch 3/5\n60000/60000 [==============================] - 1s 21us/sample - loss: 0.4111 - accuracy: 0.8497 - val_loss: 0.4448 - val_accuracy: 0.8401\nEpoch 4/5\n60000/60000 [==============================] - 1s 21us/sample - loss: 0.3806 - accuracy: 0.8600 - val_loss: 0.5326 - val_accuracy: 0.8132\nEpoch 5/5\n60000/60000 [==============================] - 1s 21us/sample - loss: 0.3603 - accuracy: 0.8681 - val_loss: 0.4217 - val_accuracy: 0.8448\n<tensorflow.python.keras.callbacks.History at 0x7f9868e12310>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);