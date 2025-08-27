---
title: Qt and Unreal
layout: post
post-image: "https://david-miller.life/images/streams.png"
description: Making Unreal editor tools with Qt
tags:
- sample
- post
- test
---

### Qt and Unreal

Generally in Unreal its easiest to utilize the vanilla Editor Widgets based on slate to write importers, custom renderers, level editing tools and theblike.  At some point though, developer collaboration, external app connections, or editor automations that require retrieving data from outside the editor environment can pose a problem--especially if building/shipping custom c++ plugins is undoable due to other project limitations.  In order to freely create tools that can access the rest of the machine and lots of other python functionality, Qt can be a very useful famework to create the GUIs instead of blueprint.

Some notes about Python

About Qt

Getting Qt into Unreal

Creating a GUI

