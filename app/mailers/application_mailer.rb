class ApplicationMailer < ActionMailer::Base
  default from: 'takahashi.senoo@hotmail.com'
  
  def send_email(email)
    mail(to: email, subject: 'Invite to OnlineJobs site')
  end
end
