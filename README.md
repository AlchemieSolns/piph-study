# lti-13
LTI 1.3 (via ltiaas)


### LTIAAS registration with firebase
# replace API_KEY with the key given to you by LTIaaS
# replace YOUR with the subdomain given to you by LTIaaS
```
firebase functions:config:set env.apikey="b8c52d3a-0264-47fe-929e-de64a889fd8a"
firebase functions:config:set env.ltiaasurl="https://lti-api.alchem.ie"
```

## piph-study
# Creating piph-study site
```
firebase hosting:sites:create lti-piph-study
```

# apply target
```
firebase target:apply hosting piph-study lti-piph-study
```

# deploy target
```
firebase deploy --only hosting:piph-study
```


## Launch
# Creating launch site
```
firebase hosting:sites:create lti-launch
```

# apply target
```
firebase target:apply hosting launch lti-launch
```

# deploy target
```
firebase deploy --only hosting:launch
```


### Moodle Sandbox Setup
https://sandbox401.moodledemo.net/
This site resets every hour so if you know you're gonna go back and forth, it's best to
start a registration at the top of the hour.

1) Login: admin / sandbox
2) [More ->] Site Administration
3) Plugins -> Activity modules -> External Tool -> Manage Tools
4) https://lti-api.alchem.ie/register
5) Activate tool

### Enable Activation
https://portal.ltiaas.com

1) Registrations
2) Set Active to True for your moodle registration (you have to click off the dropdown to save.)
3) Optional, but appreciated, delete old moodle registrations.
