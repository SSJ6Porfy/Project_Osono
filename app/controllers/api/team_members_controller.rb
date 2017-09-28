class Api::TeamMembersController < ApplicationController

  def index
    @team_members = TeamMember.all
  end

  def show
    @team_member = TeamMember.find_by(id: params[:id])
  end

  def destroy
    @team_member = TeamMember.find_by(id: params[:id])
    @team_member.destroy
    render :show
  end

  def create
    @team_member = TeamMember.new(team_member_params)

    if @team_member.save
      render :show
    else
      render json: @team_member.errors.full_messages, status: 422
    end
  end

  def team_member_params
    params.require(:team_member).permit(:user_id, :team_id)
  end

end
