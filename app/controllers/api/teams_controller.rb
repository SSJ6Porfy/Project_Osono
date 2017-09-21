class Api::TeamsController < ApplicationController

  before_action :check_if_user_is_team_leader?,  only: [:new, :create]

  def check_if_user_is_team_leader?
    render :json ["Only the Team Lead can edit this team"] unless current_user.id == this_team.user_id;
  end

  def this_team
    @team = Team.find_by(params[:id])
  end

  def index
    @teams = current_user.teams.where(team.user_id != "#{current_user.id}")
    @current_user_teams = current_user.teams.where(user_id: current_user.id)
  end

  def create
    @team = Team.new(team_params)
    @team.user_id = current_user.id # Set the current_user as the Team Lead

    if @team.save
      render :show
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def edit
    @team = Team.find_by(params[:id])
  end

  def update
    @team = current_user.teams.find_by(params[:id])

    if @team.update_attributes(team_params)
      render :show
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def show
    @team = Team.find_by(params[:id])
  end

  def destroy

  end

  def team_params
    current_params = params.require(:team).permit(:user_id, :name, :department)
    current_params[:user_id] = current_user.id
    current_params
  end
end
