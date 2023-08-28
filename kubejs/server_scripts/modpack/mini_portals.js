ServerEvents.recipes(event => {
	
// Twilight Mini Structure
	event.custom({
	"type": "mysticalagriculture:awakening",
	"essences": {
    "air": 40,
    "earth": 40,
    "water": 40,
    "fire": 40
  },
  "input": {
    "item": "twilightforest:snow_queen_trophy"
  },
  "ingredients": [
    {
      "item": "twilightforest:fiery_block"
    },
    {
      "item": "twilightforest:knightmetal_block"
    },
    {
      "item": "twilightforest:steeleaf_block"
    },
    {
      "item": "twilightforest:carminite_block"
    }
  ],
  "result": {
    "item": "twilightforest:twilight_portal_miniature_structure"
	}
	}).id(`kubejs:awakening/twilight_portal_miniature_structure`)
  
// Nether Infused Teleportation Core
	event.custom({
  "type": "elementalcraft:binding",
  "element_amount": 10000,
  "element_type": "fire",
  "ingredients": [
    {
      "item": "mekanism:teleportation_core"
    },
	{
      "item": "elementalcraft:purecrystal"
    },
	{
      "item": "minecraft:netherite_block"
    },
    
	Item.of('elementalcraft:jewel', '{elementalcraft:{jewel:"elementalcraft:piglin"}}').strongNBT().toJson(),
    
    {
      "item": "minecraft:netherite_block"
    },
    {
      "item": "elementalcraft:purecrystal"
    }
  ],
  "output": Item.of('mekanism:teleportation_core', "{HideFlags:1,display:{Name:'[{\"text\":\"Nether Infused Teleportation Core\",\"italic\":false}]'}}").enchant('unbreaking', 1).toJson()
}).id('kubejs:allthetweaks/nether_core')
  
// Ender Infused Teleportation Core
	event.custom({
  "type": "elementalcraft:binding",
  "element_amount": 10000,
  "element_type": "air",
  "ingredients": [
    {
      "item": "mekanism:teleportation_core"
    },
	{
      "item": "elementalcraft:purecrystal"
    },
	{
      "item": "allthetweaks:ender_pearl_block"
    },
    
	Item.of('elementalcraft:jewel', '{elementalcraft:{jewel:"elementalcraft:demigod"}}').strongNBT().toJson(),
    
    {
      "item": "allthetweaks:ender_pearl_block"
    },
    {
      "item": "elementalcraft:purecrystal"
    }
  ],
  "output": Item.of('mekanism:teleportation_core', "{HideFlags:1,display:{Name:'[{\"text\":\"Ender Infused Teleportation Core\",\"italic\":false}]'}}").enchant('unbreaking', 1).toJson()
}).id('kubejs:allthetweaks/ender_core')
  
// Draconic Infused Teleportation Core
	event.custom({
  "type": "elementalcraft:binding",
  "element_amount": 10000,
  "element_type": "fire",
  "ingredients": [
    {
      "item": "mekanism:teleportation_core"
    },
	{
      "item": "elementalcraft:purecrystal"
    },
	{
      "item": "minecraft:dragon_egg"
    },
    
	Item.of('elementalcraft:jewel', '{elementalcraft:{jewel:"elementalcraft:phoenix"}}').strongNBT().toJson(),
    
    {
      "item": "minecraft:dragon_egg"
    },
    {
      "item": "elementalcraft:purecrystal"
    }
  ],
  "output": Item.of('mekanism:teleportation_core', "{HideFlags:1,display:{Name:'[{\"text\":\"Draconic Infused Teleportation Core\",\"italic\":false}]'}}").enchant('unbreaking', 1).toJson()
}).id('kubejs:allthetweaks/draco_core')
  
  
})