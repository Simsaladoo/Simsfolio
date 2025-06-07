---
title: P4 Mapping Views to Streams
layout: post
post-image: "https://david-miller.life/images/streams.png"
description: Linking depots into other streams with import to decrease maintainance and costs.
tags:
- sample
- post
- test
---

### Perforce Stream View Mapping

Earlier this year at Halon, we participated in a case study with Perforce to talk about how we manage our Unreal master material library and custom plugins.  The material library is a centrally-managed package of shaders that we previously had to manually migrate from project to project, and would sometimes get messed up from naming collisions or missing redirectors.  

We found that by using view mappings and putting them into their own stream, we could then import them into the projects as part of our startup phase and have more concise control over the content.  The initial migration had some issues, but once we cleaned up existing assets it made the pipeline a lot more streamlined and LOT less error-prone.

It also made us take up a lot less space in our AWS-managed server when it came to Plugins, as storing the binaries and content can add up quickly.  Setting up the plugins this way also allowed for a more sophisticated update process by utilizing development streams to do internal updates and new features instead of working directly on the mainline and potentially breaking existing projects.

If you have a stream depot with an Unreal engine project, you can easily setup this kind of infrastructure by copying all the Plugins into one stream, and Master Materials into another--then adding their paths to the project's views.  You can read more about this functionality in the docs: https://help.perforce.com/helix-core/server-apps/p4v/current/Content/P4V/streams.views.html

---

Editing the view can be done in the GUI through the Stream View, under the Advanced tab and looks something like this:

```
share ...
import NewProject/Unreal_532/Plugins/... //Depot/Plugins-Main/5.3.2/Plugins...
```

The "share ..." is required for the files in the stream to be retrieved and any other paths we need can be added under it as seen here.
To map our Plugins from their self-contained depot to our project, we use the "import" type view.  This allows us to source the plugins from their location, but not allow them to submit changes (although this can be changed to import+ to get around that).  

This imported path inherits its view from the parent and all the files can be mapped to a location within the client's workspace.  Imported files will then be shown with the "halo" icon within the client workspace:
[![Halo](https://david-miller.life/images/halo.png)](https://david-miller.life/images/halo.png)



You can read more about the case-study here:
https://www.perforce.com/customers/case-studies/vcs/halon

**Summary:**  
Halon used Perforce Helix Core to manage their growing codebase and streamline collaboration. By adopting streams and advanced version control features, they improved workflow efficiency, reduced integration issues, and enabled faster product delivery. The case study highlights how mapping views and stream imports helped Halon scale development while maintaining control and flexibility.


