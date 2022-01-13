STORE = [
  {
    message: ['hi', 'hello'],
    response: 'Welcome to StationFive.'
  },
  {
    message: ['bye', 'goodbye'],
    response: 'Thank you, see you around.'
  }
]

class MessageResponse < ApplicationService
  attr_reader :message

  def initialize(message)
    @message = message
  end

  def call
    response = 'Sorry, I don’t understand.'

    STORE.each do |item|
      item[:message].each do |message|

        if @message.include?(message)
          response = item[:response]
          break
        end
      end
    end

    response
  end
end