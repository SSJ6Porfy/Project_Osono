class Api::TeamsController < ApplicationController

  before_action :check_if_user_is_team_leader?, only: [:update, :destroy]

  #Method checks the current_user is the Team Lead.
  #Only Team Leads are allow to modify teams
  def check_if_user_is_team_leader?
    render json: ["Only the Team Lead can edit this team"], status: 422 unless current_user.id == this_team.user_id;
  end

  def this_team
    @team = Team.find_by(id: params[:id])
  end

  def search
    if params[:search]
      query = params[:search]
      @teams = Team.where('name ILIKE ?', "%#{query}%").limit(3)
      render "api/teams/search"
    end
  end

  def index
    @teams = current_user.teams
  end

  def create
    @team = Team.new(team_params)
    if @team.save
      @teamMember = TeamMember.create!(user_id: current_user.id, team_id: @team.id)
      if @teamMember.save
        render :show
      else
        render json: @teamMember.errors.full_messages, status: 422
      end
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def update
    @team = Team.find_by(id: params[:id])

    if @team.update_attributes(team_params)
      render :show
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def show
    @team = Team.find_by(id: params[:id])
  end

  def destroy
    @team = Team.find_by(id: params[:id])
    if @team
      @team.destroy
      render :show
    else
      render json: ["Team does not exist!"], status: 422
    end
  end

  def team_params
    current_params = params.require(:team).permit(:id, :user_id, :name, :team_mission, :search)
    current_params[:user_id] = current_user.id
    current_params
  end
end
