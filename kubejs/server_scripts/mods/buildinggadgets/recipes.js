ServerEvents.recipes(event => {
  event.remove({ id: 'buildinggadgets:gadget_exchanging' })
  event.shaped('buildinggadgets:gadget_exchanging', ['IRI', 'DLD', 'IDI'], {
    I: '#forge:ingots/iron',
    R: '#forge:dusts/redstone',
    L: '#forge:gems/lapis',
    D: '#forge:gems/diamond',
  }).id('kubejs:buildinggadgets/gadget_exchanging')
})
