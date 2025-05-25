### Deterministic Ocean Buoyancy

Implementing walkable boats for player & AI

[![Bounce]()]()

The result at a flat z=26000

I began with using a hidden static mesh as physical collision for characters--and a skeletal mesh copy of the same geo with jointed components for the on-screen representation.  The purpose being to separate the "stable" platform for movement and collisions while still allowing for simple rigged animations for oars, sail direction and other interact-able components.  



For the buoyancy calculation, it is extremely simplified using an array of 4 relative vectors shown in the gif above as attached spheres.  While above water they turn yellow and blue when floating, doing so then makes a little splash on the bow and stern (hoping to futher map more types of splashes based on the type of hull in the future).

 

Physics in-engine is used on the actor as a whole, implemented on the same vector array of points by utilizing:
UPrimitiveComponent::AddForceAtLocation(FVector Force, FVector Location)
to give us the bounce!



 

Mapping Buoyancy Arrays to Hulls

[![Types]()]()

The various types of boats available then presented a new set of factors where the mass & volume needed to be accounted for without adding further calculation.  The current solution was to simply map out vector translators and other vessel attributes to a datatable to hold and use those static properties. 

Using an enum of each vessel's name then gave it a simple drop-down per craft type to able to switch between all of them on the fly as we can see above.



 

A floating point for floating time

[![Floating]()]()

Part of the scope in this buoyancy system is allowing for in-game 'time compression' to show up on the waves while the player is travelling across the 3D worldmap,  similarly done in Silent Hunter and other tactical submarine games that have a 3D view. 

To allow for wind speed and direction changes from weather events as well as time compression from the player, we have two separate floats to multiply against the global amplitude, velocity and orientation of the ocean's gerstner waves.

The result is now letting us turn on the waves at any time, shown in the above picture,by setting new values into amplitude
