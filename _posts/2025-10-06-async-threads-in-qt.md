---
title: Async QThreads in PyQt
layout: post
post-image: "https://david-miller.life/images/qt_threads.jpg"
description: Making threads with Qt for asynchronous UI tools.
tags:
- sample
- post
- test
---

### Async QThreads in PyQt

While making Unreal UI tools with PySide, I sometimes come across a problem of needing to create long-running tasks that can operate in the background while I do other things.  Especially the case when I want to run Unreal headlessly to say loop over all assets and change properties, or load levels and create things, or even run renders.  

I was able to do this hackily with Editor Widgets, sure, but they require the editor to be open in order to operate so they aren't as accessible for external tooling.  Say you wanted to run renders that you can automatically upload to YouTube, a neat way to accomplish this is to build QThreads into an external Qt-based tool that will run the editor, render a shot, and then upload it all for you with a single button.

First, as always, is to refer to the docs: [https://doc.qt.io/qtforpython-6/PySide6/QtCore/QThread.html](https://doc.qt.io/qtforpython-6/PySide6/QtCore/QThread.html)

---

QThreads don't necessarily require you to create QSignals, but they can be used to provide progress floats and completion bools for other UI elements like QProgressBar(s) and QLabel(s) to update during and after work is finished.  You can also set the thread count to any number you like if you need to run multiple functions at once like below:   

```
self.thread_pool = QThreadPool()
self.thread_pool.setMaxThreadCount(5)
```

After creating the QThreadPool, you'll then want to create the object of your task "Worker" that the pool can start.  Its within this worker class that you'd want to put signals in for str, bool, int, or whatever other variables you want to expose to other UI elements.

For running my AI "Arena" render, I created the signals in their own class like this:


```
class ArenaSignals(QObject):
    completed = Signal(bool)
    arena_progress = Signal(str)
```

The arena_progress string signal above was used for setting text in a QLabel within the outer Qt widget for displaying engine and upload progress, and the completed signal for telling the widget when work has finished--resetting the launch button that executes the whole process.

So these get fed into the worker which launches the editor, loads the render queue containing the level sequence, level and config data and renders it.  Once the editor finished rendering it closes and utilizes the simple_youtube_api for easy uploading of the exported mp4.

Other than that its basically just down to when and where you want to update the widget's display.  I used progress strings like below to give me a code change number to see a timestamp and code tag to ensure to me which branch of the engine was running the code.

```
self.signals.arena_progress.emit(f"Running {self.queue} on branch {self.render_tag}")
```


**Summary:**  
Gist of how to use PySide QThreads and signals to create external Unreal Engine tools that run long-running tasks—like loading levels, rendering, and uploading videos—without needing the editor open, while updating a Qt-based UI with progress and completion feedback.

