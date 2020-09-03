(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{236:function(e,a,n){"use strict";n.d(a,"a",(function(){return b})),n.d(a,"b",(function(){return d}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),c=function(e){var a=r.a.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},b=function(e){var a=c(e.components);return r.a.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=c(n),u=t,d=b["".concat(p,".").concat(u)]||b[u]||m[u]||i;return n?r.a.createElement(d,o(o({ref:a},s),{},{components:n})):r.a.createElement(d,o({ref:a},s))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,p=new Array(i);p[0]=u;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return p})),n.d(a,"metadata",(function(){return o})),n.d(a,"rightToc",(function(){return l})),n.d(a,"default",(function(){return c}));var t=n(2),r=n(7),i=(n(0),n(236)),p={id:"ax_sweeper",title:"Ax Sweeper plugin",sidebar_label:"Ax Sweeper plugin"},o={unversionedId:"plugins/ax_sweeper",id:"plugins/ax_sweeper",isDocsHomePage:!1,title:"Ax Sweeper plugin",description:"PyPI",source:"@site/docs/plugins/ax_sweeper.md",slug:"/plugins/ax_sweeper",permalink:"/docs/next/plugins/ax_sweeper",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/plugins/ax_sweeper.md",version:"current",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1597645518,sidebar_label:"Ax Sweeper plugin",sidebar:"docs",previous:{title:"Customizing Application's help",permalink:"/docs/next/configure_hydra/app_help"},next:{title:"Colorlog plugin",permalink:"/docs/next/plugins/colorlog"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],s={rightToc:l};function c(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},s,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://img.shields.io/pypi/v/hydra-ax-sweeper"}),Object(i.b)("img",Object(t.a)({parentName:"a"},{src:"https://img.shields.io/pypi/v/hydra-ax-sweeper",alt:"PyPI"}))),"\n",Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"https://img.shields.io/pypi/l/hydra-ax-sweeper",alt:"PyPI - License"})),"\n",Object(i.b)("img",Object(t.a)({parentName:"p"},{src:"https://img.shields.io/pypi/pyversions/hydra-ax-sweeper",alt:"PyPI - Python Version"})),"\n",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://pypistats.org/packages/hydra-ax-sweeper"}),Object(i.b)("img",Object(t.a)({parentName:"a"},{src:"https://img.shields.io/pypi/dm/hydra-ax-sweeper.svg",alt:"PyPI - Downloads"}))),"\n",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_ax_sweeper/example"}),Object(i.b)("img",Object(t.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),"\n",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_ax_sweeper"}),Object(i.b)("img",Object(t.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"})))),Object(i.b)("p",null,"This plugin provides a mechanism for Hydra applications to use the ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://ax.dev/"}),"Adaptive Experimentation Platform, aka Ax"),". Ax can optimize any experiment - machine learning experiments, A/B tests, and simulations. "),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("p",null,"This plugin requires Hydra 1.0 (Release candidate)"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-commandline"}),"pip install hydra-ax-sweeper --pre\n")),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"Once installed, add ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/sweeper=ax")," to your command line. Alternatively, override ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/sweeper")," in your config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - hydra/sweeper: ax\n")),Object(i.b)("p",null,"We include an example of how to use this plugin. The file ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_ax_sweeper/example/banana.py"}),Object(i.b)("inlineCode",{parentName:"a"},"example/banana.py"))," implements the ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Rosenbrock_function"}),"Rosenbrock function (aka Banana function)"),". The return value of the function should be the value that we want to optimize."),Object(i.b)("p",null,"To compute the best parameters for the Banana function, clone the code and run the following command in the ",Object(i.b)("inlineCode",{parentName:"p"},"plugins/hydra_ax_sweeper")," directory:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"python example/banana.py -m banana.x=-5:5 banana.y=-5:10.1\n")),Object(i.b)("p",null,"The output of a run looks like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"[HYDRA] AxSweeper is optimizing the following parameters:\nbanana.x: range=[-5, 5], type = int\nbanana.y: range=[-5.0, 10.1], type = float\nax.modelbridge.dispatch_utils: Using Bayesian Optimization generation strategy: GenerationStrategy(name='Sobol+GPEI', steps=[Sobol for 5 arms, GPEI for subsequent arms], generated 0 arm(s) so far). Iterations after 5 will take longer to generate due to model-fitting.\nAxSweeper is launching 5 jobs\n[HYDRA] Launching 5 jobs locally\n[HYDRA]     #0 : banana.x=4 banana.y=-1.484\n[__main__][INFO] - Banana_Function(x=4, y=-1.484)=30581.473\n[HYDRA]     #1 : banana.x=3 banana.y=-3.653\n[__main__][INFO] - Banana_Function(x=3, y=-3.653)=16014.261\n[HYDRA]     #2 : banana.x=0 banana.y=9.409\n[__main__][INFO] - Banana_Function(x=0, y=9.409)=8855.340\n[HYDRA]     #3 : banana.x=-4 banana.y=2.059\n[__main__][INFO] - Banana_Function(x=-4, y=2.059)=19459.063\n[HYDRA]     #4 : banana.x=-3 banana.y=-1.338\n[__main__][INFO] - Banana_Function(x=-3, y=-1.338)=10704.497\n[HYDRA] New best value: 8855.340, best parameters: {'banana.x': 0, 'banana.y': 9.409}\n")),Object(i.b)("p",null,"In this example, we set the range of ",Object(i.b)("inlineCode",{parentName:"p"},"x")," parameter as an integer in ",Object(i.b)("inlineCode",{parentName:"p"},"[-5, 5]")," and the range of ",Object(i.b)("inlineCode",{parentName:"p"},"y")," parameter as a float in ",Object(i.b)("inlineCode",{parentName:"p"},"[-5, 10.1]"),". Note that in the case of ",Object(i.b)("inlineCode",{parentName:"p"},"x"),", both the upper and the lower range values are integers, and hence only integers are sampled. In the case of ",Object(i.b)("inlineCode",{parentName:"p"},"y"),", the lower range value is an int while the upper range value is a float. The lower range value is promoted to float as well, and floating-point numbers are sampled from the range. Other supported formats are fixed parameters (eg ",Object(i.b)("inlineCode",{parentName:"p"},"banana.x=5.0"),") and choice parameters (eg ",Object(i.b)("inlineCode",{parentName:"p"},"banana.x=1,2,3"),"). "),Object(i.b)("p",null,"The values of the ",Object(i.b)("inlineCode",{parentName:"p"},"x")," and ",Object(i.b)("inlineCode",{parentName:"p"},"y")," parameters can also be set using the config file ",Object(i.b)("inlineCode",{parentName:"p"},"plugins/hydra_ax_sweeper/example/conf/config.yaml"),". For instance, the configuration corresponding to the parameter ",Object(i.b)("inlineCode",{parentName:"p"},"x")," is as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"banana_x:\n type: range\n bounds: [-5, 5]\n\nbanana_y:\n type: range\n bounds: [-5, 10.1]\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"x"),' parameter takes on a "range" of integer values, between ',Object(i.b)("inlineCode",{parentName:"p"},"-5")," to ",Object(i.b)("inlineCode",{parentName:"p"},"5"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"y")," parameter takes on a range of floating-point values between ",Object(i.b)("inlineCode",{parentName:"p"},"-5")," to ",Object(i.b)("inlineCode",{parentName:"p"},"10.1"),". In general, the plugin supports all the ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://ax.dev/api/core.html?highlight=range#module-ax.core.parameter"}),"Parameters")," that Ax supports. According to the ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://ax.dev/api/service.html#ax.service.ax_client.AxClient.create_experiment"}),"Ax documentation"),", the required elements in the config are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"name")," - Name of the parameter. It is of type string."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"type")," - Type of the parameter. It can take the following values: ",Object(i.b)("inlineCode",{parentName:"li"},"range"),", ",Object(i.b)("inlineCode",{parentName:"li"},"fixed"),", or ",Object(i.b)("inlineCode",{parentName:"li"},"choice"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bounds")," - Required only for the ",Object(i.b)("inlineCode",{parentName:"li"},"range")," parameters. It should be a list of two values, with the lower bound first."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"values")," - Required only for the ",Object(i.b)("inlineCode",{parentName:"li"},"choice")," parameters. It should be a list of values."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"value")," - Required only for the ",Object(i.b)("inlineCode",{parentName:"li"},"fixed")," parameters. It should be a single value. ")),Object(i.b)("p",null,"Note that when using the config file, the parameter type (int, float, string, etc.) is set via the ",Object(i.b)("a",Object(t.a)({parentName:"p"},{href:"https://ax.dev/api/core.html?highlight=range#module-ax.core.parameter"}),Object(i.b)("inlineCode",{parentName:"a"},"parameter_type")," attribute"),". One important thing to note is how mixed types (float + int) are handled. For ",Object(i.b)("inlineCode",{parentName:"p"},"y")," parameter, the range bounds were set to be ",Object(i.b)("inlineCode",{parentName:"p"},"-5")," to ",Object(i.b)("inlineCode",{parentName:"p"},"10.1"),". Both the values were upcasted to a float (irrespective of whether the range was set via the command line or the config file). In case the user provides the ",Object(i.b)("inlineCode",{parentName:"p"},"parameter_type")," attribute in the config, the attribute is not changed when type casting is done. If the user wants to sample integers in range ",Object(i.b)("inlineCode",{parentName:"p"},"-5")," to ",Object(i.b)("inlineCode",{parentName:"p"},"5"),", they need to specify the range as ",Object(i.b)("inlineCode",{parentName:"p"},"-5:5")," or ",Object(i.b)("inlineCode",{parentName:"p"},"[-5, 5]")," (in config). If they want to sample floats in range ",Object(i.b)("inlineCode",{parentName:"p"},"-5")," to ",Object(i.b)("inlineCode",{parentName:"p"},"5"),", they need to specify the range as ",Object(i.b)("inlineCode",{parentName:"p"},"-5.0:5.0")," or ",Object(i.b)("inlineCode",{parentName:"p"},"[-5.0, 5.0]")," (in config). The type casted values, and unchanged attributes are passed to the Ax Client. "),Object(i.b)("p",null,"The parameters for the optimization process can also be set in the config file. Specifying the Ax config is optional. The most important parameters are listed below:"),Object(i.b)("p",null,"You can discover the Ax Sweeper parameters with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="$ python your_app.py hydra/sweeper=ax --cfg hydra -p hydra.sweeper"',title:'"$',python:!0,"your_app.py":!0,"hydra/sweeper":"ax","--cfg":!0,hydra:!0,"-p":!0,'hydra.sweeper"':!0}),"# @package hydra.sweeper\n_target_: hydra_plugins.hydra_ax_sweeper.ax_sweeper.AxSweeper\nmax_batch_size: null\nax_config:\n  max_trials: 10\n  early_stop:\n    minimize: true\n    max_epochs_without_improvement: 10\n    epsilon: 1.0e-05\n  experiment:\n    name: null\n    objective_name: objective\n    minimize: true\n    parameter_constraints: null\n    outcome_constraints: null\n    status_quo: null\n  client:\n    verbose_logging: false\n    random_seed: null\n  params: {}\n")))}c.isMDXComponent=!0}}]);