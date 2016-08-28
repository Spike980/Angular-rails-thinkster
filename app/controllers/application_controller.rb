require "application_responder"

class ApplicationController < ActionController::Base
  self.responder = ApplicationResponder
  respond_to :html

  protect_from_forgery with: :exception
  after_filter :set_csrf_cookie_for_ng

  respond_to :json

  before_action :configure_permitted_parameters, if: :devise_controller?

  def angular
  	render 'layouts/application'
  end

  private
  	def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
  	end

    def set_csrf_cookie_for_ng
      cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
    end

    def verified_request?
      super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
    end

end
