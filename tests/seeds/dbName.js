exports.seed = knex => {
    return knex('dbName').del()                             // Clear db content
      .then(() => {
        return knex('dbName').insert([                      // Replace it by test content in the same shape than db data
          { id: 1, task: 'test task 1', completed: false }, // Example
          { id: 2, task: 'test task 2', completed: true },
          { id: 3, task: 'test task 3', completed: false }
        ])
      })
    }