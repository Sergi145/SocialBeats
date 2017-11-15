const express =require('express')
const cors = require('cors')
const app = express()
//const ProjectsModel = require('./data/models/ProjectsModel')
const ProjectsData = new(require('./data/OngData.js'))
const FestivalsData = new(require('./data/FestivalsData.js'))
const UsersData = new(require('./data/UsersData'))
const mongoose = require('mongoose')
const bodyParser= require('body-parser')


app.use(bodyParser.json())
app.use(cors())
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/socialbeats',{useMongoClient:true})

// ong/projects
// crear router
// router.route('/ong')

app.get('/ong', (req,res)=>{
	//ongData.listAllTheOng()
	//ProjectsModel.find('5a09ba02de937d39a73c39e3').exec()
	ProjectsData.listAllTheProjects()
		.then(onginfo => {
			console.log(onginfo)
			res.status(200).json({
				status: 'OK',
		        message: 'ong listed successfully',
		        data: onginfo
			})
		})
		.catch(err => {
			res.status(404).json({
				status: 'KO',
		        message: err.message
			})
		})
})
app.get('/festivals', (req,res)=>{
	//ongData.listAllTheOng()
	//ProjectsModel.find('5a09ba02de937d39a73c39e3').exec()
	FestivalsData.listAllTheFestivals()
		.then(festinfo => {
			console.log(festinfo)
			res.status(200).json({
				status: 'OK',
		        message: 'festivals listed successfully',
		        data: festinfo
			})
		})
		.catch(err => {
			res.status(404).json({
				status: 'KO',
		        message: err.message
			})
		})
})
app.get('/users', (req,res)=>{
	//ongData.listAllTheOng()
	//ProjectsModel.find('5a09ba02de937d39a73c39e3').exec()
	UsersData.listAllTheUsers()
		.then(userinfo => {
			console.log(userinfo)
			res.status(200).json({
				status: 'OK',
		        message: 'users listed successfully',
		        data: userinfo
			})
		})
		.catch(err => {
			res.status(404).json({
				status: 'KO',
		        message: err.message
			})
		})
})



app.listen(3000, ()=> console.log(`express API is UP on port 3000`))