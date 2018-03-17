class Api::SearchController < ApplicationController
    def search
        if params[:search].nil?
          @teams = []
        else
          @teams = Team.search params[:search]
          render "api/search/search"
        end
      end
end
