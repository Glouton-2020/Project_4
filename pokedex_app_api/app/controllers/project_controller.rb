class ProjectController < ApplicationController
    def index
        render json: { status: 200, message: "Pokedex API" }
      end
end
