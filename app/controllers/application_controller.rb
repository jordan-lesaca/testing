class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize

  private

  def authorize
    @current_user = User.find(session[:user_id])
    render json: {errors: "Not authorized"}, status: unauthorized unless @current_user
  end

# Cookies   
# Rails serialializes all the key/value pairs you set with session, 
# converting them from a Ruby object into a big string. 
# Whenever you set a key with the session methods, 
# Rails updates the value of its session cookie to this big string

end
