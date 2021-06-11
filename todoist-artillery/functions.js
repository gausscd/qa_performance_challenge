var faker = require('faker');

module.exports = {taskFunction}

function taskFunction (userContext, events, done){
    userContext.vars.task_content = '{faker.company.catchPhrase()}';
    userContext.vars.task_description = '{faker.company.catchPhraseDescriptor()}';
}

