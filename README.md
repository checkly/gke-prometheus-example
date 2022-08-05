
# Intro
A simple nodejs server to access checkly prometheus metrics and expose them in an internal network. 
This examples contains what you need to run the tool inside of a Google cloud K8s engine (GKE)

So you can use Google Cloud hosted Prometheus to scrape Checkly metrics easily. 

# GKE Setup

Update your GCP PROJECT_ID, checkly prometheus url and bearer token in deployment.yaml

The setup exposes everything through a publicly reachable loadbalancer, so modify it to your needs 
in case your metrics are a secret. 

#  Run locally

Use nodeJS 18

Run `npm install`

This code uses dotenv. 

Create a file named `.env` and fill in your Checkly credentials like so:
```
checkly_endpoint = url of my integration
checkly_bearer = my token
```

run node index.js and you're done. 