ServerEvents.recipes(event => {
  event.remove({ id: 'aeinfinitybooster:infinity_card' })
  event.shaped('aeinfinitybooster:infinity_card', ['EBE', 'BNB', 'NNN'], {
    B: 'ae2:wireless_booster',
    E: '#forge:plates/enderium',
    N: 'minecraft:netherite_ingot'
  }).id('kubejs:aeinfinitybooster/infinity_card')
})
