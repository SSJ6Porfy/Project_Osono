module ApplicationCable
  class Channel < ActionCable::Channel::Base
  end

  class FormChannel < ApplicationCable::Channel
    # Called when the consumer has successfully
    # become a subscriber of this channel.
    def subscribed
    end
  end

end
