# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Team.destroy_all
Project.destroy_all
Task.destroy_all
TeamMember.destroy_all

user1 = User.create!(username: "porfy", password: "password", email: "porfy@porfy.com")
user2 = User.create!(username: "john", password: "12345678", email: "john@john.com")
user3 = User.create!(username: "adrianJ", password: "pass1234", email: "adrianJ@adrianJ.com")
user4 = User.create!(username: "mike", password: "admin123", email: "mike@mike.com")
user5 = User.create!(username: "adrianR", password: "acbd1234", email: "adrianR@adrianR.com")

team1 = Team.create!(user_id: user1.id, name: "Cohort X Upstairs", team_mission: "App Academy")
team2 = Team.create!(user_id: user5.id, name: "Cohort X Downstairs", team_mission: "AA")

project1 = Project.create!(project_leader_id: user2.id, team_id: team1.id, name: "Final Project")
project2 = Project.create!(project_leader_id: user4.id, team_id: team2.id, name: "Javascript Project")

Task.create!(user_id: user1.id, project_id: project1.id, name: "seed DB")
Task.create!(user_id: user1.id, project_id: project1.id, name: "seed DB again")
Task.create!(user_id: user2.id, project_id: project1.id, name: "darken modal overlay")
Task.create!(user_id: user3.id, project_id: project1.id, name: "put on AWS")
Task.create!(user_id: user4.id, project_id: project2.id, name: "Do something")
Task.create!(user_id: user5.id, project_id: project2.id, name: "do something else")

TeamMember.create!(team_id: team1.id, user_id: user1.id)
TeamMember.create!(team_id: team1.id, user_id: user2.id)
TeamMember.create!(team_id: team1.id, user_id: user3.id)
TeamMember.create!(team_id: team2.id, user_id: user4.id)
TeamMember.create!(team_id: team2.id, user_id: user5.id)
TeamMember.create!(team_id: team2.id, user_id: user1.id)
