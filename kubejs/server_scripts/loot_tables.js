onEvent("lootjs", (event) => {
    //event.enableLogging();
    event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:bucket"));
    event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:bread"));
    event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(/allthemodium.*/);
    event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(/vibranium.*/);
    event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(/unobtainium.*/);
    event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:fishing_rod").ignoreNBT());
    event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:anvil"));
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
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:emerald","tfc:gem/emerald");
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:lapis_lazuli","tfc:gem/lapis_lazuli");
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:enchanting_table","tfc:gem/diamond");
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:carrot","tfc:food/carrot",true);
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:potato","tfc:food/potato",true);
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:wheat","tfc:food/wheat",true);
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:pumpkin","tfc:pumpkin",true);
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:beetroot_seeds","tfc:seeds/beet",true);
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:melon_seeds","tfc:seeds/melon",true);
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:pumpkin_seeds","tfc:seeds/pumpkin",true);
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:dead_bush","tfc:plant/dead_bush",true);
    event
    .addEntityLootModifier("minecraft:zombie")
    .removeLoot(Item.of("minecraft:iron_ingot"));
    event
    .addEntityLootModifier("minecraft:husk")
    .removeLoot(Item.of("minecraft:iron_ingot"));
    event
    .addEntityLootModifier("minecraft:drowned")
    .removeLoot(Item.of("minecraft:copper_ingot"));
    event
    .addEntityLootModifier("minecraft:evoker")
    .replaceLoot("minecraft:emerald","tfc:gem/emerald");
    event
    .addLootTypeModifier(LootType.CHEST)
    .removeLoot(Item.of("minecraft:cooked_porkchop"));
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:porkchop","tfc:food/pork");
    event
    .addLootTypeModifier(LootType.CHEST)
    .replaceLoot("minecraft:barrel","tfcbarrels:wood/barrel/oak");
     });
