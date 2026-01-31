---
title: CSV Importer & Asset Tagging
layout: post
post-image: "https://david-miller.life/images/tags_show.png"
description: Using tags we can track not only whether an asset is mission-critical, but also implement things like asset timestamps, changelists, or hooks for other scripting processes.
tags:
- sample
- post
- test
---

Many times when dealing with converting data in-engine into lightweight gameplay assets or when having to do execute small tasks on many types of assets all at once, we utilize Python.  Depending on the project and requirement we may run this headlessly through the UE4Editor-Cmd.exe, or through an in-editor script--but it will generally use the same classes either way.

To read/write a datable previously imported, we simply pass an in-engine asset's package path in through a load_object in order to cast to the datatable class, like you would for an import of the asset.  From here we can then play with parameters:

[![Tagging](https://david-miller.life/images/datalayer_load.png)](https://david-miller.life/images/datalayer_load.png)

You can then find out the type of struct used by any Data Table by reading the "row_struct" property of the object we casted to:

[![Tagging](https://david-miller.life/images/get_struct.png)](https://david-miller.life/images/tags_popup.png)
[![Tagging](https://david-miller.life/images/tags_set.png)](https://david-miller.life/images/tags_set.png)

The known struct can then be added to the params of the unreal.CSVImportFactory()'s automated import settings, as part of the unreal.AssetImportTask():

[![Tagging](https://david-miller.life/images/datalayer_import.png)](https://david-miller.life/images/datalayer_import.png)

With the import settings in place, we can use the same object cast to set tags within the Editor Asset Library.  In this case the table itself is used during game play to store localized  arrays of vectors, so it gets a tag to denote its purpose and feature:

[![MainImage](https://david-miller.life/images/tags_show.png)](https://david-miller.life/images/tags_show.png)

[![Tagging](https://david-miller.life/images/tags_popup.png)](https://david-miller.life/images/tags_popup.png)


Using tags we can track not only whether an asset is mission-critical, but also implement things like asset timestamps, changelists, or hooks for other scripting processes.