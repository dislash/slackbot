# nabot
A tutorial on creating a Node.js nabot using AWS Lambda with AWS API Gateway.

### Checkout Code
```
$ git clone https://github.com/dislash/nabot.git
$ cd nabot  
$ npm install  
$ zip -r nabot.zip index.js node_modules/* *.crt *.key
```

### AWS Lambda
1. Go to [AWS Lambda]
2. Click "Get Started Now".
3. Click "Skip".
4. Click "Next".
5. You will be brought to the "Configure Function" page.
6. Under "Name", you can choose any name for your function. I called it "nabot".
7. Under "Runtime", ensure it is "Node.js 4.3".
8. Under "Code entry type", choose "Upload a .ZIP file" and click the "Upload" button" to browse for the file "nabot.zip" which you have zipped previously.
9. Under "Handler", we leave it as "index.handler".
10. Under "Role", we choose "Choose an existing role".
11. Under "Existing role", we choose "Role Name".
12. Leave "Memory (MB)" as "128MB".
13. You might want to increase "Timeout" to "1" min.
14. Under VPC, choose "No VPC".
15. Click "Next".
16. Click "Create function".

### AWS API Gateway
1. Go to [AWS API Gateway]
2. Click "Get Started Now".
3. Under "API name", enter the name of your API. I will just name it "nabot".
4. Click "Create API".
5. You will be redirected to the "Resources" page.
6. Click "Create Method" and on the dropdown menu on the left, choose "POST" and click on the "tick" icon.
7. Now, you will see the "/ - POST - Setup" page on the right.
8. Under "Integration Type", choose "Lambda Function".
9. Under "Lambda Region", choose "us-east-1".
10. Under "Lambda Function", type "slack" and it should auto-complete it to "slack-bot".
11. Click "Save" and "Ok" when the popup appears.
12. You will be brought to the "/ - POST - Method Execution" Page.
13. Click "Integration Request".
14. Click "Mapping Templates" and the section should expand.
15. Click "Add Mapping Template" and type in "application/x-www-form-urlencoded" and click on the "tick" icon.
16. Under "Input Passthrough" on the right, click on the "pencil" icon.
17. Choose "Mapping Template" on the dropdown that appears.
18. Copy and paste [this GitHub Gist](https://gist.githubusercontent.com/ryanray/668022ad2432e38493df/raw/a3b8c765791ac6cfc15811a5dcb2d97056adc107/aws-api-gateway-form-to-json.ftl) to the template box.
19. Click on the "tick" icon beside the dropdown once you are done.
20. This GitHub Gist will covert the your API Gateway data from application/x-www-form-urlencoded to application/json.
21. Click on "Deploy API" button on the top left.
22. Under "Deployment Stage", click "New Stage".
23. Under "Stage Name", I will type in "production".
24. Click "Deploy".
25. Note the "Invoke URL" at the top and your API is now live.

### Slack
1. Go to [Slack Apps](https://slack.com/apps).
2. Search for "Outgoing WebHooks".
3. Click "Install" besides the team you wanted.
4. Click "Add Outgoing WebHook Integration".
5. Scroll down to "Integration Settings" section.
6. Under "Channel", choose "Any".
7. Under "Trigger Word(s)", type in "nabot" (without the quotes).
8. Under "URL(s)", type in your "Invoke URL" as noted above.
9. Customize "Descriptive Label", "Name" and "Icon" to your liking and click "Save Settings".
10. You are all set.

### Testing Slack
1. Type in "nabot" (without the quotes) in any Slack channel.
