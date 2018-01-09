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
Comment.destroy_all

user1 = User.create!(username: "porfy", password: "password", email: "porfy@porfyCompany.com")
user2 = User.create!(username: "John", password: "12345678", email: "john@johnCompany.com")
user3 = User.create!(username: "AdrianJ", password: "pass1234", email: "adrianJ@adrianJCompany.com")
user4 = User.create!(username: "Mike", password: "admin123", email: "mike@mikeCompany.com")
user5 = User.create!(username: "AdrianR", password: "acbd1234", email: "adrianR@adrianRCompany.com")
user6 = User.create!(username: "Alice", password: "acbd1234", email: "alice@aliceCo.com")
user7 = User.create!(username: "Sarah", password: "acbd1234", email: "sarah@sarahCompany.com")

team1 = Team.create!(user_id: user1.id, name: "Advertising", team_mission: "Increase visibility")
team2 = Team.create!(user_id: user5.id, name: "Engineering", team_mission: "Launch Products")
team3 = Team.create!(user_id: user2.id, name: "Accounting", team_mission: "Make the books")
team4 = Team.create!(user_id: user4.id, name: "Sales", team_mission: "Increase sales")

project1 = Project.create!(project_leader_id: user2.id, team_id: team1.id, name: "New Campaign")
project2 = Project.create!(project_leader_id: user4.id, team_id: team2.id, name: "New Product Launch")
project3 = Project.create!(project_leader_id: user1.id, team_id: team3.id, name: "File quarterly reports")
project4 = Project.create!(project_leader_id: user3.id, team_id: team4.id, name: "New Business Leads")

task1 = Task.create!(user_id: user1.id, project_id: project1.id, name: "Prepare Email Campaign")
task2 = Task.create!(user_id: user1.id, project_id: project1.id, name: "Call PR Firm")
task3 = Task.create!(user_id: user2.id, project_id: project1.id, name: "Review customer feedback")
task4 = Task.create!(user_id: user2.id, project_id: project1.id, name: "Social Media strategy meeting")
task5 = Task.create!(user_id: user3.id, project_id: project1.id, name: "Update metrics")
task6 = Task.create!(user_id: user4.id, project_id: project2.id, name: "Meeting with AWS for rates")
task7 = Task.create!(user_id: user2.id, project_id: project2.id, name: "New user experience improvements")
task8 = Task.create!(user_id: user2.id, project_id: project2.id, name: "App redesign")
task9 = Task.create!(user_id: user2.id, project_id: project2.id, name: "Upgrade Payment Options")
task10 = Task.create!(user_id: user2.id, project_id: project2.id, name: "Emoji support")
task11 = Task.create!(user_id: user2.id, project_id: project3.id, name: "Compliance check")
task12 = Task.create!(user_id: user5.id, project_id: project3.id, name: "Powerpoint presentation")
task13 = Task.create!(user_id: user5.id, project_id: project3.id, name: "Revenue analysis")
task14 = Task.create!(user_id: user5.id, project_id: project3.id, name: "Advanced reporting options")
task15 = Task.create!(user_id: user2.id, project_id: project4.id, name: "New lead generation strategy")
task16 = Task.create!(user_id: user2.id, project_id: project4.id, name: "Sales team meeting")
task17 = Task.create!(user_id: user3.id, project_id: project4.id, name: "Send client thank you cards")

com1 = Comment.create!(user_id: user1.id, body: "this is task comment", commentable_id: task1.id, commentable_type: "Task")
com2 = Comment.create!(user_id: user2.id, body: "this is com comment", commentable_id: com1.id, commentable_type: "Comment")


TeamMember.create!(team_id: team1.id, user_id: user1.id)
TeamMember.create!(team_id: team4.id, user_id: user1.id)
TeamMember.create!(team_id: team1.id, user_id: user2.id)
TeamMember.create!(team_id: team1.id, user_id: user3.id)
TeamMember.create!(team_id: team2.id, user_id: user4.id)
TeamMember.create!(team_id: team2.id, user_id: user5.id)
TeamMember.create!(team_id: team2.id, user_id: user2.id)
TeamMember.create!(team_id: team3.id, user_id: user2.id)
TeamMember.create!(team_id: team3.id, user_id: user7.id)
TeamMember.create!(team_id: team3.id, user_id: user4.id)
TeamMember.create!(team_id: team4.id, user_id: user2.id)
TeamMember.create!(team_id: team2.id, user_id: user6.id)
TeamMember.create!(team_id: team4.id, user_id: user7.id)
