const schedule = require('node-schedule')


//tarefa para executar a cada três segundos, todos os dias, horas e minutos
const tarefa1 = schedule.scheduleJob('*/3 * * * * *', function () {
    console.log('Executando Tarefa 1', new Date().getSeconds())
})


//quebrando a tarefa 1 após 20 Segundos de exec
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando tarefa 1')
}, 20000) // 20000ms


// criando um agendamento para a tarefa 2
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,6)]
regra.hour = [new schedule.Range(5, 22)]
regra.second = 1

//disparando a tarefa 2 com base nos dados armazenados em regra!
const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando tarefa 2', new Date().getSeconds())
})
