const zod = require('zod')

const createTodo = zod.object({
    title: zod.string(),
    completed: zod.boolean(),
})

const updateTodo = zod.object({
    title: zod.string(),
    completed: zod.boolean(),
})

module.exports = {
    createTodo : createTodo,
    updateTodo : updateTodo 
}

