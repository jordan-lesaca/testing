class GamesController < ApplicationController
    # rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
    def index #Get. Displays all. Ordered by Release Year in Descending Order
      games = Game.all.order(release_year: :desc) 
      render json: games, each_serializer: GameSerializer #instructed to use GameSerializer as directions to how to render
    end
  
    def show
      game = Game.find(params[:id])#
      render json: game
    end

    def create
      game = Game.create!(game_params)
      render json: game, status: :created
    end

      def update
        game = Game.find(params[:id])
        game.update(game_params)
        render json: game
    end

    def destroy
        game = Game.find(params[:id])#finds a game using the ID from route params. 
        game.destroy #removes from database with game.destroy
        head :no_content #:no_content will give a 204 status code, indicating that the server successfully fulfilled the request and that there is no content to send in the response. 
    end
  
    private

    def game_params #strong params. This returns a new hash with only the title, release year, genre, and user id. 
      params.require(:game).permit(:title, :release_year, :genre, :user_id) #rails will also mark this new hash as permitted, which means we can safely use this new hash for mass assignment. 
    end
  
    # def record_not_found
    #   render json: { error: "Game not found" }, status: :not_found
    # end

    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
  
  end