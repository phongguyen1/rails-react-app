class Api::V1::SessionsController < ApplicationController
    def new
    end

    def create
        
        user = User.find_by(email: params[:user][:email])
        
        if user && user.authenticate(params[:user][:password])
            session[:user_id] = user.id
            
            render json: user.as_json.merge(session: session), status: :ok
        else
            render json: { error: 'Invalid email/password combination' }, status: :unauthorized
        end
    end

    def destroy
        session[:user_id] = nil
        render json: { message: 'Logged out' }, status: :ok
    end
end