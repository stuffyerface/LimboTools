register("command", () => {
	const ItemStack = Java.type('net.minecraft.item.ItemStack');
	const Enchantment = Java.type('net.minecraft.enchantment.Enchantment');
	let items = ["minecraft:diamond_pickaxe", "minecraft:diamond_axe", "minecraft:diamond_shovel", "minecraft:shears"]
	for(x in items){
		let nbt = new ItemStack(new Item(items[x]).getItem())
		nbt.func_77966_a(Enchantment.field_77349_p ,10)
		Player.getInventory().getInventory().func_70441_a(nbt)
	}
	ChatLib.chat("&aSuccessfully gave Toolkit")
}).setName("tools", true);
