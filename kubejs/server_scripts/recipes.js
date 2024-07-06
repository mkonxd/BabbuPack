ServerEvents.recipes(event => {
    event.remove({ output: 'strainers:summoning_block' })
    event.remove({ input: 'strainers:summoning_block' })
})