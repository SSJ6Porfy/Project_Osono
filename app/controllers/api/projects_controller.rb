class Api::ProjectsController < ApplicationController
  before_action :check_if_user_is_project_leader?,  only: [:update]

  #Method checks the current_user is the Project Lead.
  #Only Project Leads are allow to modify projects

  def check_if_user_is_project_leader?
    if current_user.id != this_project.project_leader_id;
      render json: ["Only the Project Lead can edit this project"]
    end
  end

  def this_project
    @project = Project.find_by(params[:id])
  end

  def index
    if params[:team_id]
      @projects = Project.where(team_id: params[:team_id])
    else
      @projects = Project.all
    end
  end

  def create
    @project = Project.new(project_params)

    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = current_user.projects.find_by(params[:id])

    if @project.update_attributes(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show
    @project = Project.find_by(params[:id])
  end

  def destroy
    @project = Project.find_by(params[:id])
    if @project
      @project.destroy
      render :show
    else
      render json: ["Project does not exist!"], status: 422
    end
  end

  def project_params
    current_params = params
      .require(:project)
      .permit(:id, :project_leader_id, :team_id, :name, :description)

    current_params[:project_leader_id] = current_user.id
    current_params
  end
end
