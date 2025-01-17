onEvent('worldgen.add', event => {
  event.addOre((ore) => {
    ore.id = "kubejs:mining_certus" // optional
    ore.biomes = ['beyond_earth:moon_desert']
    ore.addTarget('beyond_earth:moon_stone', 'ae2:quartz_ore')
    ore.size(7)     // ores per cluster
    ore.count(10,20)   // clusters per chunk, can also be a range eg ore.count(15,20)
    ore.squared()
    ore.triangleHeight(-34, 36)
  })

})

onEvent('worldgen.remove', event => {
  event.removeSpawns(properties => {
    properties.biomes = /tfc:.*/
    properties.mobs = /thermal:b.*/
  })
})

onEvent('item.registry', itemRegistryEvent => {
  itemRegistryEvent.create('chocolate_cake_slice').food(food => {
    food.hunger(20)
    food.saturation(20)
  })
  itemRegistryEvent.create('honey_cake_slice').food(food => {
    food.hunger(20)
    food.saturation(20)
  })
  console.log("bismuth bronze creating..");
  itemRegistryEvent.create("bismuth_bronze_nugget");
})
