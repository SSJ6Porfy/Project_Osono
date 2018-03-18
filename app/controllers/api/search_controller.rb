class Api::SearchController < ApplicationController
    def search
        if params[:q].nil?
          @teams = []
        else
          @teams = Team.search(params[:q])
          render :search
        end
      end
end
