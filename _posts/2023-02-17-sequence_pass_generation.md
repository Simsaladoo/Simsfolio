---
title: Sequence Pass Generator
layout: post
post-image: "https://david-miller.life/images/sequence_tool.gif"
description: The paths on each shot-object in the UI also act as links to make finding the sequences more easily in the editor.
tags:
- sample
- post
- test
---

### Sequence Pass Generator

Sometimes in post-viz, its necessary to bake out other unreal passes so they could be used in editing for extra shadow, reflections and effects work.  This becomes a huge task when there are hundreds of cameras and episodes, so finding a means of automating the changing of level sequencer tracks, level streaming settings, and manicuring pass settings and rendering them is a massive time-saver.

[![MainImage](https://david-miller.life/images/sequence_tool.gif)](https://david-miller.life/images/sequence_tool.gif)


This tool utilizes python to make copies of selected level sequences in order to tag and associate Render Queue settings with individual shots.  This lets you make any adjustments to, say FX passes, separate from your existing shot's settings, as well as for Reflections and shadows.

In the gif above, we select all 3 of the project's shots, and generate 4 separate passes for each one.  Not shown here, the newly created assets also receive metadata tags to associate each one with a specific Render Queue Setting, so that various rendering tricks for each one can be applied.  Also not shown, the tool adds Level Visibility Tracks for each pass to know which sublevels can be turned on and off--required for creating FX and shadow passes.

The paths on each shot-object in the UI also act as links to make finding the sequences more easily in the editor.  It makes use of a super-fun Editor Asset Library class method called 'sync_browser_to_objects' that lets you point the content browser to any /Game/ asset path:

[![Tagging](https://david-miller.life/images/sync_browser.png)](https://david-miller.life/images/sync_browser.png)
