ServerEvents.recipes(e=> {
    e.remove({id: 'mekanism:atomic_disassembler'})
    e.shaped('mekanism:atomic_disassembler',['ITI','IAI',' P '],{
        I: 'mekanism:alloy_infused',
        T: 'mekanism:energy_tablet',
        A: 'mekanism:alloy_atomic',
    })
    e.remove({id: 'mekanism:meka_tool'})
    e.shaped('mekanism:meka_tool',['UCU','TDT','PBP'],{
        U: 'mekanism:ultimate_control_circuit',
        C: 'mekanism:configurator',
        D: 'mekanism:atomic_disassembler',
        B: 'mekanism:basic_induction_cell',
        P: 'mekanism:pellet_polonium'
    })

})