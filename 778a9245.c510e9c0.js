(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{144:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return p})),t.d(a,"rightToc",(function(){return l})),t.d(a,"default",(function(){return c}));var r=t(2),n=t(7),i=(t(0),t(236)),o={id:"nevergrad_sweeper",title:"Nevergrad Sweeper plugin",sidebar_label:"Nevergrad Sweeper plugin"},p={unversionedId:"plugins/nevergrad_sweeper",id:"version-1.0/plugins/nevergrad_sweeper",isDocsHomePage:!1,title:"Nevergrad Sweeper plugin",description:"PyPI",source:"@site/versioned_docs/version-1.0/plugins/nevergrad_sweeper.md",slug:"/plugins/nevergrad_sweeper",permalink:"/docs/plugins/nevergrad_sweeper",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/plugins/nevergrad_sweeper.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1599148883,sidebar_label:"Nevergrad Sweeper plugin",sidebar:"version-1.0/docs",previous:{title:"Joblib Launcher plugin",permalink:"/docs/plugins/joblib_launcher"},next:{title:"RQ Launcher plugin",permalink:"/docs/plugins/rq_launcher"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Example of training using Nevergrad hyperparameter search",id:"example-of-training-using-nevergrad-hyperparameter-search",children:[]},{value:"Defining the parameters",id:"defining-the-parameters",children:[{value:"Choices",id:"choices",children:[]},{value:"Scalars",id:"scalars",children:[]}]}],s={rightToc:l};function c(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://pypi.org/project/hydra-nevergrad-sweeper/"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/pypi/v/hydra-nevergrad-sweeper",alt:"PyPI"}))),"\n",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/pypi/l/hydra-nevergrad-sweeper",alt:"PyPI - License"})),"\n",Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://img.shields.io/pypi/pyversions/hydra-nevergrad-sweeper",alt:"PyPI - Python Version"})),"\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://pypistats.org/packages/hydra-nevergrad-sweeper"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/pypi/dm/hydra-nevergrad-sweeper.svg",alt:"PyPI - Downloads"}))),"\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_nevergrad_sweeper/example"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),"\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_nevergrad_sweeper"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"})))),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://facebookresearch.github.io/nevergrad/"}),"Nevergrad")," is a derivative-free optimization platform proposing a library of state-of-the art algorithms for hyperparameter search. This plugin provides a mechanism for Hydra applications to use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://facebookresearch.github.io/nevergrad/"}),"Nevergrad")," algorithms for the optimization of experiments/applications parameters."),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("p",null,"This plugin requires Hydra 1.0 (Release candidate)"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-commandline"}),"pip install hydra-nevergrad-sweeper --pre\n")),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"Once installed, add ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/sweeper=nevergrad")," to your command command. Alternatively, override ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/sweeper")," in your config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - hydra/sweeper: nevergrad\n")),Object(i.b)("p",null,"The default configuration is ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_nevergrad_sweeper/hydra_plugins/hydra_nevergrad_sweeper/config.py"}),"here"),"."),Object(i.b)("h2",{id:"example-of-training-using-nevergrad-hyperparameter-search"},"Example of training using Nevergrad hyperparameter search"),Object(i.b)("p",null,"We include an example of how to use this plugin. The file ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_nevergrad_sweeper/example/dummy_training.py"}),Object(i.b)("inlineCode",{parentName:"a"},"example/dummy_training.py"))," implements an example of how to perform minimization of a (dummy) function including a mixture of continuous and discrete parameters. "),Object(i.b)("p",null,"You can discover the Nevergrad sweeper parameters with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="$ python your_app hydra/sweeper=nevergrad --cfg hydra -p hydra.sweeper"',title:'"$',python:!0,your_app:!0,"hydra/sweeper":"nevergrad","--cfg":!0,hydra:!0,"-p":!0,'hydra.sweeper"':!0}),"# @package hydra.sweeper\n_target_: hydra_plugins.hydra_nevergrad_sweeper.core.NevergradSweeper\noptim:\n  optimizer: OnePlusOne\n  budget: 80\n  num_workers: 10\n  noisy: false\n  maximize: false\n  seed: null\nparametrization: {}\nversion: 1\n")),Object(i.b)("p",null,"The function decorated with ",Object(i.b)("inlineCode",{parentName:"p"},"@hydra.main()")," returns a float which we want to minimize, the minimum is 0 and reached for:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"db: mnist\nlr: 0.12\ndropout: 0.33\nbatch_size=4\n")),Object(i.b)("p",null,"To run hyperparameter search and look for the best parameters for this function, clone the code and run the following command in the ",Object(i.b)("inlineCode",{parentName:"p"},"plugins/hydra_nevergrad_sweeper")," directory:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"python example/dummy_training.py -m\n")),Object(i.b)("p",null,"You can also override the search space parametrization:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"python example/dummy_training.py -m db=mnist,cifar batch_size=4,8,16 lr=log:0.001:1 dropout=0:1\n")),Object(i.b)("p",null,"The initialization of the sweep and the first 5 evaluations (out of 100) look like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"[HYDRA] NevergradSweeper(optimizer=OnePlusOne, budget=100, num_workers=10) minimization\n[HYDRA] with parametrization Dict(batch_size=TransitionChoice(choices=Tuple(4,8,16),position=Scalar[sigma=Log{exp=1.2}],transitions=[1. 1.]),db=Choice(choices=Tuple(mnist,cifar),weights=Array{(2,)}),dropout=Scalar{Cl(0,1)}[sigma=Log{exp=1.2}],lr=Log{exp=3.162277660168379,Cl(0.001,1)}):{'db': 'cifar', 'batch_size': 8, 'lr': 0.03162277660168379, 'dropout': 0.5}\n[HYDRA] Sweep output dir: multirun/2020-03-04/17-53-29\n[HYDRA] Launching 10 jobs locally\n[HYDRA]     #0 : db=mnist batch_size=8 lr=0.032 dropout=0.5\n[__main__][INFO] - dummy_training(dropout=0.500, lr=0.032, db=mnist, batch_size=8) = 5.258\n[HYDRA]     #1 : db=mnist batch_size=16 lr=0.035 dropout=0.714\n[__main__][INFO] - dummy_training(dropout=0.714, lr=0.035, db=mnist, batch_size=16) = 13.469\n[HYDRA]     #2 : db=cifar batch_size=8 lr=0.053 dropout=0.408\n[__main__][INFO] - dummy_training(dropout=0.408, lr=0.053, db=cifar, batch_size=8) = 4.145\n[HYDRA]     #3 : db=cifar batch_size=8 lr=0.012 dropout=0.305\n[__main__][INFO] - dummy_training(dropout=0.305, lr=0.012, db=cifar, batch_size=8) = 4.133\n[HYDRA]     #4 : db=mnist batch_size=4 lr=0.030 dropout=0.204\n[__main__][INFO] - dummy_training(dropout=0.204, lr=0.030, db=mnist, batch_size=4) = 1.216\n")),Object(i.b)("p",null,"and the final 2 evaluations look like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"[HYDRA]     #8 : db=mnist batch_size=4 lr=0.094 dropout=0.381\n[__main__][INFO] - dummy_training(dropout=0.381, lr=0.094, db=mnist, batch_size=4) = 1.077\n[HYDRA]     #9 : db=mnist batch_size=4 lr=0.094 dropout=0.381\n[__main__][INFO] - dummy_training(dropout=0.381, lr=0.094, db=mnist, batch_size=4) = 1.077\n[HYDRA] Best parameters: db=mnist batch_size=4 lr=0.094 dropout=0.381\n")),Object(i.b)("p",null,"The run also creates an ",Object(i.b)("inlineCode",{parentName:"p"},"optimization_results.yaml")," file in your sweep folder with the parameters recommended by the optimizer:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"best_evaluated_result: 0.381\n\nbest_evaluated_params:\n  batch_size: 4\n  db: mnist\n  dropout: 0.381\n  lr: 0.094\n\nname: nevergrad\n")),Object(i.b)("h2",{id:"defining-the-parameters"},"Defining the parameters"),Object(i.b)("p",null,"The plugin can use 2 types of parameters:"),Object(i.b)("h3",{id:"choices"},"Choices"),Object(i.b)("p",null,"Choices are defined with ",Object(i.b)("strong",{parentName:"p"},"comma-separated values")," in the command-line (",Object(i.b)("inlineCode",{parentName:"p"},"db=mnist,cifar")," or ",Object(i.b)("inlineCode",{parentName:"p"},"batch_size=4,8,12,16"),") or with a list in a config file.\nBy default, values are processed as floats if all can be converted to it, but you can modify this behavior by adding colon-separated specifications ",Object(i.b)("inlineCode",{parentName:"p"},"int")," or ",Object(i.b)("inlineCode",{parentName:"p"},"str")," before the the list. (eg.: ",Object(i.b)("inlineCode",{parentName:"p"},"batch_size=int:4,8,12,16"),")"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note:")," sequences of increasing scalars are treated as a special case, easier to solve. Make sure to specify it this way when possible."),Object(i.b)("h3",{id:"scalars"},"Scalars"),Object(i.b)("p",null,"Scalars can be defined:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"through a commandline override with ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},":"),"-separated values")," defining a range (eg: ",Object(i.b)("inlineCode",{parentName:"p"},"dropout=0:1"),").\nYou can add specifications for log distributed values (eg.: ",Object(i.b)("inlineCode",{parentName:"p"},"lr=log:0.001:1"),") or integer values (eg.: ",Object(i.b)("inlineCode",{parentName:"p"},"batch_size=int:4:8"),")\nor a combination of both (eg.: ",Object(i.b)("inlineCode",{parentName:"p"},"batch_size=log:int:4:1024"),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"through a config files, with fields:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"init"),": optional initial value"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"lower")," : optional lower bound"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"upper"),": optional upper bound"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"log"),": set to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"\xa0for log distributed values"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"step"),": optional step size for looking for better parameters. In linear mode this is an additive step, in logarithmic mode it\nis multiplicative.\xa0"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"integer"),": set to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"\xa0for integers (favor floats over integers whenever possible)")),Object(i.b)("p",{parentName:"li"},"Providing only ",Object(i.b)("inlineCode",{parentName:"p"},"lower")," and ",Object(i.b)("inlineCode",{parentName:"p"},"upper")," bound will set the initial value to the middle of the range, and the step to a sixth of the range."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Note"),": unbounded scalars (scalars with no upper and/or lower bounds) can only be defined through a config file."))}c.isMDXComponent=!0},236:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return u}));var r=t(0),n=t.n(r);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),c=function(e){var a=n.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},b=function(e){var a=c(e.components);return n.a.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},m=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=c(t),m=r,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||i;return t?n.a.createElement(u,p(p({ref:a},s),{},{components:t})):n.a.createElement(u,p({ref:a},s))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);