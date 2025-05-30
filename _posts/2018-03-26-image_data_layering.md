---
title: Data Layering with Image to CSV Conversion
layout: post
post-image: "https://david-miller.life/images/datalayer_diagram.png"
description: From there its as simple as adding the image, using Width and Height into loops based on a set image size to bookend the comma deliminator.  Now you can draw any kind of data within Photoshop!
tags:
- sample
- post
- test
---

### Data Layering using Image to CSV Conversion

[![MainImage](https://david-miller.life/images/datalayer_diagram.png)](https://david-miller.life/images/datalayer_diagram.png)

(Happy data generated using 'B' color values, slightly warped just due to my column sizing in excel :) )

[![Tagging](https://david-miller.life/images/datalayer_happy.png)](https://david-miller.life/images/datalayer_happy.png)

[![Tagging](https://david-miller.life/images/datalayer_num.png)](https://david-miller.life/images/datalayer_load.png)

This is easy peasy in C#!  The struct for the Y alignment columns needs be to setup in Unreal according to the image's resolution.  The above is using a 64 x 64 image, and is read/wrote using System.Data; and System.Drawing;

The method involves taking a specific pixel via:
System.Drawing.Color pixelColor = testimage.GetPixel(x, y);

and breaking it into its R,G,B component via:
string pixelColorStringValue = pixelColor.B.ToString("D3");

From there its as simple as adding the image, using Width and Height into loops based on a set image size to bookend the comma deliminator.  Now you can draw any kind of data within Photoshop!