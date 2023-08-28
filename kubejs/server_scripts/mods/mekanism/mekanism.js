ServerEvents.recipes(e => {
  e.remove({ id: 'mekanism:atomic_disassembler' })
  e.shaped('mekanism:atomic_disassembler', ['ITI', 'IAI', ' P '], {
    I: 'mekanism:alloy_infused',
    T: 'mekanism:energy_tablet',
    A: 'mekanism:alloy_atomic',
    P: 'minecraft:diamond'
  })
  e.remove({ id: 'mekanism:meka_tool' })
  e.shaped('mekanism:meka_tool', ['UCU', 'UDU', 'PBP'], {
    U: 'mekanism:ultimate_control_circuit',
    C: 'mekanism:configurator',
    D: 'mekanism:atomic_disassembler',
    B: 'mekanism:basic_induction_cell',
    P: 'mekanism:pellet_polonium'
  })
  e.remove({ id: 'mekanism:upgrade/anchor' })

  // remove combiner recipes for ores
  e.remove({ type: 'mekanism:combining', id: /ore/ })
  // Nerf ethylene
  e.remove({ id: 'mekanism:reaction/substrate/water_hydrogen'})
  e.custom({
    "type": "mekanism:reaction",
    "duration": 100,
    "fluidInput": {
      "amount": 10,
      "tag": "minecraft:water"
    },
    "gasInput": {
      "amount": 100,
      "gas": "mekanism:hydrogen"
    },
    "gasOutput": {
      "amount": 50,
      "gas": "mekanism:ethene"
    },
    "itemInput": {
      "amount": 2,
      "ingredient": {
        "tag": "forge:fuels/bio"
      }
    },
    "itemOutput": {
      "item": "mekanism:substrate"
    }
  }).id('kubejs:mek/ethene')
})
