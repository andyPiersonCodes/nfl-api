/* eslint-disable no-console */
const express = require('express')
const bodyParser = require('body-parser')
const { getAllTeams, getTeamsById, saveNewTeam } = require('./controllers/teams')

const app = express()

app.get('/teams', getAllTeams)

app.get('/teams/:id', getTeamsById)

app.post('/', bodyParser.json(), saveNewTeam)

app.listen(1337, () => {
  console.log('Listening on port 1337...')
})
