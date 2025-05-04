### CSV Importer & Asset Tagging

Many times when dealing with converting data in-engine into lightweight gameplay assets or when having to do execute small tasks on many types of assets all at once, we utilize Python.  Depending on the project and requirement we may run this headlessly through the UE4Editor-Cmd.exe, or through an in-editor script--but it will generally use the same classes either way.

[![Bounce]()]()

To read/write a datable previously imported, we simply pass an in-engine asset's package path in through a load_object in order to cast to the datatable class.  From here we can then play with parameters:

[![Bounce]()]()

[![Bounce]()]()
 

You can then find out the type of struct used by any Data Table by reading the "row_struct" property of the object we casted to:

[![Bounce]()]()

The known struct can then be added to the params of the unreal.CSVImportFactory()'s automated import settings, as part of the unreal.AssetImportTask():

With the import settings in place, we can use the same object cast to set tags within the Editor Asset Library.  In this case the table itself is used during game play to store localized  arrays of vectors, so it gets a tag to denote its purpose and feature:

[![Bounce]()]()

[![Bounce]()]()

Using tags we can track not only whether an asset is mission-critical, but also implement things like asset timestamps, changelists, hooks for other processes, or data visualizations.