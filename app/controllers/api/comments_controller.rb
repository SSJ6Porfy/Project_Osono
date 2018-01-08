class Api::CommentsController < ApplicationController

    before_action :require_logged_in?
    
    def index
        Comment.all
    end

    def show
        Comment.find_by(params[:id])
    end

    def create
        @comment = Comment.new(comment_params)

        if @comment.save
            render :show
        else
          render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find_by(params[:id])

        if @comment.update_attributes(comment_params)
          render :show
        else
          render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find_by(params[:id])
        if @comment
            @comment.destroy
            render :show
        else
            render json: ["Comment does not exist!"], status: 422
        end
    end

    def comment_params
        params.require(:comment).permit(:comment_type, :user_id, :task_id, :body, :parent_id)
    end
end
