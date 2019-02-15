## GDG Bangalore Cloud Study Jam 2019


### View Projects
```
gcloud config list project
```

### Enable APIs
```
gcloud services enable vision.googleapis.com
```

### Export Project 
```
export GOOGLE_CLOUD_PROJECT="<PROJECT_ID>"
```

### Create Service Account
```
gcloud iam service-accounts create my-vision-sa \
  --display-name "my vision service account"
```
```
gcloud iam service-accounts keys create ~/key.json \
  --iam-account my-vision-sa@${GOOGLE_CLOUD_PROJECT}.iam.gserviceaccount.com
```
```
export GOOGLE_APPLICATION_CREDENTIALS="/home/${USER}/key.json"
```
