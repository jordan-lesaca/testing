class SessionsController < ApplicationController
  before_action :authorize, except: :create #skips create when authorizing
  
    def create
      user = User.find_by(username: params[:username])
      session[:user_id] = user.id
      render json: user
    end
  
    def destroy
      session.delete :user_id
      head :no_content
    end

    private

    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end 
  
  end
  
  #The first time a user makes a request to the sessions controller, Rails will include the Set-Cookie response header with our sessions an cookies values, which will instruct the browser to store these values in memory and send them with any future requests on this domain.
  #sessions and cookies hashes can both be used to store key-value pairs of data
  #The entire session hash is actually stored in the _session_id cookie, in a signed and excrypted format. 
  #Cookie info can be found in the Application tab, and go to the Cookies section. 