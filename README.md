## OnlineJobs(Demo)

### Introduction

This is Demo version with simple features.

### Installation Guide

Clone the repo and then install the needed gems locally:

```
$ bundle install --without production
```

Next, migrate the database:

```
$ rails db:migrate
```

Finally, run the test suite to verify that everything is working correctly:

```
$ rails test
```

If the test suite passes, you'll be ready to run the app in a local server:

```
$ rails server
```

### Guide for Non-technical member

https://launchschool.com/blog/how-to-install-ruby-on-rails-development-environment-for-mac-os-x


Brew
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

RVM
curl -L https://get.rvm.io | bash -s stable --auto-dotfiles --autolibs=enable —rails

brew install postgres
 

rvm use 2.4.1
 

rvm gemset create job
 

rvm gemset use job
 

gem install bundler
 

bundle install
 

brew install bower
 

rake db:migrate
 

rails s

