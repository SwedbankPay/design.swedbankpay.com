# Deploy to github pages
./build/deploy-github-pages.ps1

# Wait for deploy to actually be deployed
Start-Sleep -s $Env:wait_time

# Check response time for scripts and styles
npm run response-time basename=$Env:basename

# TODO: Run functional tests etc here [EH]
