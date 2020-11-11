const teams = require('../teams')

const getAllTeams = (req, res) => {
  return res.send(teams)
}

const getTeamsById = (req, res) => {
  const { id } = req.params

  const foundTeam = teams.filter((team) => parseInt(team.id) === parseInt(id))

  return res.send(foundTeam)
}

const saveNewTeam = (req, res) => {
  const {
    id, location, mascot, abbreviation, conference, division
  } = req.body

  if (!id || !location || !mascot || !abbreviation || !conference || !division) {
    return res.status(400).send('Error need all fields')
  }


  const newTeam = {
    id, location, mascot, abbreviation, conference, division
  }

  teams.push(newTeam)

  return res.status(201).send(newTeam)
}


module.exports = { getAllTeams, getTeamsById, saveNewTeam }


