### Data Layering with Image to CSV Conversion

[![Layers]()]()

(Happy data generated using 'B' color values, slightly warped just due to my column sizing in excel :) )

[![HappyData]()]()

[![Data]()]()

Easy peasy in C#!  The struct for the Y alignment columns needs be to setup in Unreal according to the image's resolution.  The above is using a 64 x 64 image, and is read/wrote using System.Data; and System.Drawing;

The method involves taking a specific pixel via:
System.Drawing.Color pixelColor = testimage.GetPixel(x, y);

and breaking it into its R,G,B component via:
string pixelColorStringValue = pixelColor.B.ToString("D3");

From there its as simple as adding the image.Width and .Height into loops based on a set image size to bookend the comma deliminator.  Now you can draw any kind of data within Photoshop!