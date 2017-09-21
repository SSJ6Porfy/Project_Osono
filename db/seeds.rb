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

User.create!(id: 1, username: "porfy", password: "password", email: "porfy@porfy.com")
User.create!(id: 2, username: "john", password: "12345678", email: "john@john.com")
User.create!(id: 3, username: "adrianJ", password: "pass1234", email: "adrianJ@adrianJ.com")
User.create!(id: 4, username: "mike", password: "admin123", email: "mike@mike.com")
User.create!(id: 5, username: "adrianR", password: "acbd1234", email: "adrianR@adrianR.com")

Team.create!(id: 1, user_id: 1, name: "Cohort X Upstairs", department: "App Academy")
Team.create!(id: 2, user_id: 5, name: "Cohort X Downstairs", department: "AA")

Project.create!(id: 1, project_leader_id: 2, team_id: 1, name: "Final Project")
Project.create!(id: 2, project_leader_id: 4, team_id: 2, name: "Javascript Project")

Task.create!(id: 1, user_id: 1, project_id: 1, name: "seed DB")
Task.create!(id: 2, user_id: 1, project_id: 1, name: "seed DB again")
Task.create!(id: 3, user_id: 2, project_id: 1, name: "darken modal overlay")
Task.create!(id: 4, user_id: 3, project_id: 1, name: "put on AWS")
Task.create!(id: 5, user_id: 4, project_id: 2, name: "Do something")
Task.create!(id: 6, user_id: 5, project_id: 2, name: "do something else")

TeamMember.create!(id: 1, team_id: 1, user_id: 1)
TeamMember.create!(id: 2, team_id: 1, user_id: 2)
TeamMember.create!(id: 3, team_id: 1, user_id: 3)
TeamMember.create!(id: 4, team_id: 2, user_id: 4)
TeamMember.create!(id: 5, team_id: 2, user_id: 5)
TeamMember.create!(id: 6, team_id: 2, user_id: 1)
