class Api::TasksController < ApplicationController

  def index
    if params[:project_id]
      @tasks = Task.where(project_id: params[:project_id])
    else
      @tasks = Task.all
    end
  end

  def create
    @task = Task.new(task_params)

    if @task.save
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = current_user.tasks.find_by(id: params[:id])

    if @task.update_attributes(task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def show
    @task = Task.find_by(id: params[:id])
  end

  def destroy
    @task = Task.find_by(id: params[:id])
    if @task
      @task.destroy
      render :show
    else
      render json: ["Task does not exist!"], status: 422
    end
  end

  def task_params
    params.require(:task).permit(:project_id, :user_id, :name, :description, :complete?)
  end
end
