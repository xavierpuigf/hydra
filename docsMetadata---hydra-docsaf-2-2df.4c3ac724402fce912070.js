(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{37:function(i){i.exports=JSON.parse('{"docs":{"contributing":{"id":"contributing","title":"Contributing","sidebar_label":"Contributing","description":"This guide assumes you have forked and checked-out the repository.","source":"@site/docs/contributing.md","permalink":"/hydra/docs/contributing","sidebar":"Docs","category":"About","next":"examples/minimal","previous":"getting_started","previous_title":"Getting started","next_title":"Minimal example"},"getting_started":{"id":"getting_started","title":"Getting started","sidebar_label":"Getting started","description":"Hydra itself supports Python 2.7 and on Python >= 3.5.","source":"@site/docs/getting_started.md","permalink":"/hydra/docs/getting_started","sidebar":"Docs","category":"About","next":"contributing","previous":"intro","previous_title":"Introduction","next_title":"Contributing"},"intro":{"id":"intro","title":"Introduction","sidebar_label":"Introduction","description":"Hydra is an experimentation framework, with the mission is to make writing, maintaining and","source":"@site/docs/intro.md","permalink":"/hydra/docs/intro","sidebar":"Docs","category":"About","next":"getting_started","next_title":"Getting started"},"configure_hydra/intro":{"id":"configure_hydra/intro","title":"Overview","sidebar_label":"Introduction","description":"## Hydra config","source":"@site/docs/configure_hydra/Intro.md","permalink":"/hydra/docs/configure_hydra/intro","sidebar":"Docs","category":"Configuring Hydra","next":"configure_hydra/hydra_config","previous":"deployment/app_packaging","previous_title":"Application packaging","next_title":"Hydra configuration"},"configure_hydra/logging":{"id":"configure_hydra/logging","title":"Customizing logging","sidebar_label":"Customizing logging","description":"Hydra is configuring Python standard logging library with the dictConfig method. You can learn more about it [here](https://docs.python.org/3/howto/logging.html).","source":"@site/docs/configure_hydra/logging.md","permalink":"/hydra/docs/configure_hydra/logging","sidebar":"Docs","category":"Configuring Hydra","next":"configure_hydra/workdir","previous":"configure_hydra/hydra_config","previous_title":"Hydra configuration","next_title":"Customizing working directory pattern"},"configure_hydra/hydra_config":{"id":"configure_hydra/hydra_config","title":"Hydra configuration","sidebar_label":"Hydra configuration","description":"Anything under the hydra branch of the config can be overriden in various ways.","source":"@site/docs/configure_hydra/hydra_config.md","permalink":"/hydra/docs/configure_hydra/hydra_config","sidebar":"Docs","category":"Configuring Hydra","next":"configure_hydra/logging","previous":"configure_hydra/intro","previous_title":"Overview","next_title":"Customizing logging"},"configure_hydra/workdir":{"id":"configure_hydra/workdir","title":"Customizing working directory pattern","sidebar_label":"Customizing working directory pattern","description":"See the [intro](intro) for details about how to apply the customization.","source":"@site/docs/configure_hydra/workdir.md","permalink":"/hydra/docs/configure_hydra/workdir","sidebar":"Docs","category":"Configuring Hydra","previous":"configure_hydra/logging","previous_title":"Customizing logging"},"examples/config_file":{"id":"examples/config_file","title":"Config file","sidebar_label":"Config file","description":"Your app evolves, and you now want to use a configuration file to make things more manageable:","source":"@site/docs/examples/config_file.md","permalink":"/hydra/docs/examples/config_file","sidebar":"Docs","category":"Basic usage","next":"examples/config_splitting","previous":"examples/logging","previous_title":"Python logging","next_title":"Splitting a configuration file"},"deployment/app_packaging":{"id":"deployment/app_packaging","title":"Application packaging","sidebar_label":"Application packaging","description":"You can package your Hydra app along with your configuration.","source":"@site/docs/deployment/packaging.md","permalink":"/hydra/docs/deployment/app_packaging","sidebar":"Docs","category":"Deployment","next":"configure_hydra/intro","previous":"examples/specializing_config","previous_title":"Specializing configuration","next_title":"Overview"},"examples/config_groups":{"id":"examples/config_groups","title":"Config groups","sidebar_label":"Config groups","description":"As you continue experimenting, you realize you want to try several different optimizers.","source":"@site/docs/examples/config_groups.md","permalink":"/hydra/docs/examples/config_groups","sidebar":"Docs","category":"Basic usage","next":"examples/multi-run","previous":"examples/config_splitting","previous_title":"Splitting a configuration file","next_title":"Multi-run"},"examples/minimal":{"id":"examples/minimal","title":"Minimal example","sidebar_label":"Minimal example","description":"This is a minimal example of a Hydra app.","source":"@site/docs/examples/minimal.md","permalink":"/hydra/docs/examples/minimal","sidebar":"Docs","category":"Basic usage","next":"examples/working_directory","previous":"contributing","previous_title":"Contributing","next_title":"Working directory"},"examples/logging":{"id":"examples/logging","title":"Python logging","sidebar_label":"Python logging","description":"Hydra configures Python logging for your app.","source":"@site/docs/examples/logging.md","permalink":"/hydra/docs/examples/logging","sidebar":"Docs","category":"Basic usage","next":"examples/config_file","previous":"examples/working_directory","previous_title":"Working directory","next_title":"Config file"},"examples/multi-run":{"id":"examples/multi-run","title":"Multi-run","sidebar_label":"Multi-run example","description":"Hydra can run the same job multiple time with different arguments in each run using a mode called multirun.","source":"@site/docs/examples/multirun.md","permalink":"/hydra/docs/examples/multi-run","sidebar":"Docs","category":"Basic usage","next":"examples/objects","previous":"examples/config_groups","previous_title":"Config groups","next_title":"Creating objects"},"examples/objects":{"id":"examples/objects","title":"Creating objects","sidebar_label":"Creating objects","description":"A common pattern is to instantiate different types of objects based on the configuration, potentially passing different arguments to object.","source":"@site/docs/examples/objects.md","permalink":"/hydra/docs/examples/objects","sidebar":"Docs","category":"Common patterns","next":"examples/specializing_config","previous":"examples/multi-run","previous_title":"Multi-run","next_title":"Specializing configuration"},"examples/config_splitting":{"id":"examples/config_splitting","title":"Splitting a configuration file","sidebar_label":"Splitting a configuration file","description":"As your configuration becomes more complex, you may want to split it into multiple files instead of adding to an ever","source":"@site/docs/examples/config_splitting.md","permalink":"/hydra/docs/examples/config_splitting","sidebar":"Docs","category":"Basic usage","next":"examples/config_groups","previous":"examples/config_file","previous_title":"Config file","next_title":"Config groups"},"examples/specializing_config":{"id":"examples/specializing_config","title":"Specializing configuration","sidebar_label":"Specializing configuration","description":"In some cases the desired configuration should depend on other configuraiton choices.","source":"@site/docs/examples/specializing_config.md","permalink":"/hydra/docs/examples/specializing_config","sidebar":"Docs","category":"Common patterns","next":"deployment/app_packaging","previous":"examples/objects","previous_title":"Creating objects","next_title":"Application packaging"},"examples/working_directory":{"id":"examples/working_directory","title":"Working directory","sidebar_label":"Working directory","description":"Hydra manages the working directory for your app.","source":"@site/docs/examples/working_directory.md","permalink":"/hydra/docs/examples/working_directory","sidebar":"Docs","category":"Basic usage","next":"examples/logging","previous":"examples/minimal","previous_title":"Minimal example","next_title":"Python logging"}},"docsDir":"/home/circleci/project/website/docs","docsSidebars":{"Docs":[{"type":"category","label":"About","items":[{"type":"doc","id":"intro"},{"type":"doc","id":"getting_started"},{"type":"doc","id":"contributing"}]},{"type":"category","label":"Basic usage","items":[{"type":"doc","id":"examples/minimal"},{"type":"doc","id":"examples/working_directory"},{"type":"doc","id":"examples/logging"},{"type":"doc","id":"examples/config_file"},{"type":"doc","id":"examples/config_splitting"},{"type":"doc","id":"examples/config_groups"},{"type":"doc","id":"examples/multi-run"}]},{"type":"category","label":"Common patterns","items":[{"type":"doc","id":"examples/objects"},{"type":"doc","id":"examples/specializing_config"}]},{"type":"category","label":"Deployment","items":[{"type":"doc","id":"deployment/app_packaging"}]},{"type":"category","label":"Configuring Hydra","items":[{"type":"doc","id":"configure_hydra/intro"},{"type":"doc","id":"configure_hydra/hydra_config"},{"type":"doc","id":"configure_hydra/logging"},{"type":"doc","id":"configure_hydra/workdir"}]}]},"sourceToPermalink":{"@site/docs/contributing.md":"/hydra/docs/contributing","@site/docs/getting_started.md":"/hydra/docs/getting_started","@site/docs/intro.md":"/hydra/docs/intro","@site/docs/configure_hydra/Intro.md":"/hydra/docs/configure_hydra/intro","@site/docs/configure_hydra/logging.md":"/hydra/docs/configure_hydra/logging","@site/docs/configure_hydra/hydra_config.md":"/hydra/docs/configure_hydra/hydra_config","@site/docs/configure_hydra/workdir.md":"/hydra/docs/configure_hydra/workdir","@site/docs/examples/config_file.md":"/hydra/docs/examples/config_file","@site/docs/deployment/packaging.md":"/hydra/docs/deployment/app_packaging","@site/docs/examples/config_groups.md":"/hydra/docs/examples/config_groups","@site/docs/examples/minimal.md":"/hydra/docs/examples/minimal","@site/docs/examples/logging.md":"/hydra/docs/examples/logging","@site/docs/examples/multirun.md":"/hydra/docs/examples/multi-run","@site/docs/examples/objects.md":"/hydra/docs/examples/objects","@site/docs/examples/config_splitting.md":"/hydra/docs/examples/config_splitting","@site/docs/examples/specializing_config.md":"/hydra/docs/examples/specializing_config","@site/docs/examples/working_directory.md":"/hydra/docs/examples/working_directory"},"permalinkToId":{"/hydra/docs/contributing":"contributing","/hydra/docs/getting_started":"getting_started","/hydra/docs/intro":"intro","/hydra/docs/configure_hydra/intro":"configure_hydra/intro","/hydra/docs/configure_hydra/logging":"configure_hydra/logging","/hydra/docs/configure_hydra/hydra_config":"configure_hydra/hydra_config","/hydra/docs/configure_hydra/workdir":"configure_hydra/workdir","/hydra/docs/examples/config_file":"examples/config_file","/hydra/docs/deployment/app_packaging":"deployment/app_packaging","/hydra/docs/examples/config_groups":"examples/config_groups","/hydra/docs/examples/minimal":"examples/minimal","/hydra/docs/examples/logging":"examples/logging","/hydra/docs/examples/multi-run":"examples/multi-run","/hydra/docs/examples/objects":"examples/objects","/hydra/docs/examples/config_splitting":"examples/config_splitting","/hydra/docs/examples/specializing_config":"examples/specializing_config","/hydra/docs/examples/working_directory":"examples/working_directory"}}')}}]);