onEvent("lootjs", (event) => {
    event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:bucket"));
     event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:bread"));
    event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:fishing_rod"));
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:copper_ingot","tfc:metal/ingot/copper");
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:gold_ingot","tfc:metal/ingot/gold");
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:iron_ingot","tfc:metal/ingot/wrought_iron");
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:diamond","tfc:gem/diamond");
     event
     .addEntityLootModifier("minecraft:zombie")
     .removeLoot(Item.of("minecraft:iron_ingot"));
     });
