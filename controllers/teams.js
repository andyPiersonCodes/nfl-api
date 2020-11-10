const teams = require('../teams')

const getAllTeams = (req, res) => {
  return res.send(teams)
}

const getTeamsById = (req, res) => {
  const { id } = req.params

  const foundTeam = teams.filter((team) => parseInt(team.id) === parseInt(id))

  return res.send(foundTeam)
}

module.exports = { getAllTeams, getTeamsById }
